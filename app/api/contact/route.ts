import { NextResponse } from "next/server";
import { connectMongo } from "@/lib/mongo";
import { contactPayloadSchema } from "@/lib/validators/contact";
import { ContactMessage } from "@/models/ContactMessage";

export async function POST(req: Request) {
  try {
    const raw = await req.json();
    const parsed = contactPayloadSchema.safeParse(raw);
    if (!parsed.success) {
      const flattened = parsed.error.flatten();
      return NextResponse.json(
        { ok: false, fieldErrors: flattened.fieldErrors, formErrors: flattened.formErrors },
        { status: 400 },
      );
    }

    await connectMongo();
    const doc = await ContactMessage.create(parsed.data);
    return NextResponse.json({
      ok: true,
      id: String(doc._id),
      createdAt: doc.createdAt,
    });
  } catch (err) {
    console.error("[contact POST]", err);
    const message =
      err instanceof Error && process.env.NODE_ENV !== "production"
        ? err.message
        : "Server error.";
    return NextResponse.json({ ok: false, message }, { status: 500 });
  }
}
