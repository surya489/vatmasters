import { NextResponse } from "next/server";
import { z } from "zod";
import { connectMongo } from "@/lib/mongo";
import { ContactMessage } from "@/models/ContactMessage";

const querySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  limit: z.coerce.number().int().min(1).max(50).default(10),
  search: z
    .string()
    .optional()
    .transform((val) => {
      const t = typeof val === "string" ? val.trim() : "";
      return t.length ? t : undefined;
    }),
  dateFrom: z.string().optional(),
  dateTo: z.string().optional(),
});

function escapeRegex(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const parsed = querySchema.safeParse(Object.fromEntries(url.searchParams.entries()));
    if (!parsed.success) {
      return NextResponse.json({ ok: false, errors: parsed.error.flatten() }, { status: 400 });
    }

    const { page, limit, search, dateFrom, dateTo } = parsed.data;
    const skip = (page - 1) * limit;

    await connectMongo();

    const mongoFilter: Record<string, unknown> = {};

    const parsedFrom =
      dateFrom && dateFrom.length > 0 ? new Date(`${dateFrom}T00:00:00.000Z`) : undefined;
    const parsedTo =
      dateTo && dateTo.length > 0 ? new Date(`${dateTo}T23:59:59.999Z`) : undefined;

    if (parsedFrom && Number.isNaN(parsedFrom.getTime())) {
      return NextResponse.json({ ok: false, message: "Invalid dateFrom." }, { status: 400 });
    }
    if (parsedTo && Number.isNaN(parsedTo.getTime())) {
      return NextResponse.json({ ok: false, message: "Invalid dateTo." }, { status: 400 });
    }

    if (search && search.length > 0) {
      const q = escapeRegex(search);
      mongoFilter.$or = [
        { firstName: { $regex: q, $options: "i" } },
        { lastName: { $regex: q, $options: "i" } },
        { email: { $regex: q, $options: "i" } },
        { phone: { $regex: q, $options: "i" } },
        { message: { $regex: q, $options: "i" } },
      ];
    }

    if (parsedFrom || parsedTo) {
      const range: Record<string, Date> = {};
      if (parsedFrom) {
        range.$gte = parsedFrom;
      }
      if (parsedTo) {
        range.$lte = parsedTo;
      }
      mongoFilter.createdAt = range;
    }

    const [rows, total] = await Promise.all([
      ContactMessage.find(mongoFilter)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .lean()
        .exec(),
      ContactMessage.countDocuments(mongoFilter),
    ]);

    const mapped = rows.map((r) => ({
      id: String(r._id),
      firstName: r.firstName,
      lastName: r.lastName,
      email: r.email,
      phone: r.phone,
      message: r.message,
      createdAt: r.createdAt,
    }));

    const totalPages = Math.max(1, Math.ceil(total / limit));

    return NextResponse.json({
      ok: true,
      data: mapped,
      page,
      limit,
      total,
      totalPages,
    });
  } catch (err) {
    console.error("[contact-submissions GET]", err);
    return NextResponse.json({ ok: false, message: "Server error." }, { status: 500 });
  }
}
