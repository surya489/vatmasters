import { z } from "zod";

const phoneRegex = /^[+0-9()[\]\s.-]{7,}$/;

export const contactPayloadSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required.")
    .max(100, "First name must be at most 100 characters."),
  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required.")
    .max(100, "Last name must be at most 100 characters."),
  email: z.string().trim().email("Enter a valid email.").max(255),
  phone: z
    .string()
    .trim()
    .min(7, "Phone number is too short.")
    .max(40, "Phone number is too long.")
    .regex(phoneRegex, "Enter a valid phone number."),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(8000, "Message must be at most 8000 characters."),
});

export type ContactPayload = z.infer<typeof contactPayloadSchema>;
