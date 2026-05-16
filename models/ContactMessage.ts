import mongoose, { Schema, model, models } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    firstName: { type: String, required: true, trim: true, maxlength: 100 },
    lastName: { type: String, required: true, trim: true, maxlength: 100 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 255 },
    phone: { type: String, required: true, trim: true, maxlength: 40 },
    message: { type: String, required: true, trim: true, maxlength: 8000 },
  },
  { timestamps: true },
);

ContactMessageSchema.index({ createdAt: -1 });

export const ContactMessage =
  models.ContactMessage ?? model("ContactMessage", ContactMessageSchema);
