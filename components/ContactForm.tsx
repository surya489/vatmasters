"use client";

import { useMemo, useState } from "react";
import { contactPayloadSchema } from "@/lib/validators/contact";

const initial = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactForm() {
  const [values, setValues] = useState(initial);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const hasErrors = useMemo(() => Object.keys(fieldErrors).length > 0, [fieldErrors]);

  const onChange = (key: keyof typeof initial) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setFieldErrors((fe) => {
      const next = { ...fe };
      delete next[key];
      return next;
    });
    setFormError(null);
    setSuccess(null);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    setSuccess(null);
    const parsed = contactPayloadSchema.safeParse(values);
    if (!parsed.success) {
      setFieldErrors(parsed.error.flatten().fieldErrors as Record<string, string[]>);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await res.json();
      if (!res.ok) {
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setFormError(data.message ?? "Could not send message.");
        return;
      }
      setSuccess("Thank you — your message has been received.");
      setValues(initial);
      setFieldErrors({});
    } catch {
      setFormError("Network error. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="mx-auto"
      style={{
        maxWidth: 640,
        background: "#fff",
        borderRadius: 24,
        padding: "2rem",
        boxShadow: "0 14px 40px rgba(2, 8, 23, .10)",
        border: "1px solid rgba(36,62,66,.18)",
      }}
    >
      <h1 className="mb-2" style={{ color: "#0f172a", fontWeight: 700 }}>
        Contact VAT Masters
      </h1>
      <p className="mb-4" style={{ color: "rgba(15,23,42,.72)" }}>
        Send us a message and our team will get back to you shortly.
      </p>
      <form onSubmit={onSubmit} noValidate>
        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label" htmlFor="firstName" style={{ fontWeight: 600, color: "#223b41" }}>
              First name
            </label>
            <input
              id="firstName"
              name="firstName"
              className="form-control"
              value={values.firstName}
              onChange={onChange("firstName")}
              autoComplete="given-name"
            />
            {fieldErrors.firstName?.[0] && (
              <div className="text-danger small mt-1">{fieldErrors.firstName[0]}</div>
            )}
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="lastName" style={{ fontWeight: 600, color: "#223b41" }}>
              Last name
            </label>
            <input
              id="lastName"
              name="lastName"
              className="form-control"
              value={values.lastName}
              onChange={onChange("lastName")}
              autoComplete="family-name"
            />
            {fieldErrors.lastName?.[0] && (
              <div className="text-danger small mt-1">{fieldErrors.lastName[0]}</div>
            )}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="email" style={{ fontWeight: 600, color: "#223b41" }}>
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control"
              value={values.email}
              onChange={onChange("email")}
              autoComplete="email"
            />
            {fieldErrors.email?.[0] && <div className="text-danger small mt-1">{fieldErrors.email[0]}</div>}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="phone" style={{ fontWeight: 600, color: "#223b41" }}>
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-control"
              value={values.phone}
              onChange={onChange("phone")}
              autoComplete="tel"
            />
            {fieldErrors.phone?.[0] && <div className="text-danger small mt-1">{fieldErrors.phone[0]}</div>}
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="message" style={{ fontWeight: 600, color: "#223b41" }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows={5}
              value={values.message}
              onChange={onChange("message")}
            />
            {fieldErrors.message?.[0] && (
              <div className="text-danger small mt-1">{fieldErrors.message[0]}</div>
            )}
          </div>
        </div>
        {formError && <div className="alert alert-danger mt-3 mb-0 py-2">{formError}</div>}
        {success && <div className="alert alert-success mt-3 mb-0 py-2">{success}</div>}
        <button
          type="submit"
          className="btn mt-4 w-100"
          disabled={loading}
          style={{
            background: "#00e6f6",
            color: "#0B2F35",
            fontWeight: 800,
            border: "none",
            borderRadius: 999,
            padding: "0.65rem 1rem",
          }}
        >
          {loading ? "Sending…" : "Submit"}
        </button>
        {hasErrors && !formError && (
          <p className="small text-danger mt-2 mb-0">Please fix the highlighted fields.</p>
        )}
      </form>
    </div>
  );
}
