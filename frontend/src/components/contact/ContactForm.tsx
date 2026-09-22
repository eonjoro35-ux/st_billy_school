import { FormEvent, useState } from "react";
import { api, ApiRequestError } from "../../lib/api";
import { ApiItemResponse, ContactFormValues } from "../../types";
import Button from "../ui/Button";

const initialValues: ContactFormValues = { name: "", email: "", phone: "", subject: "", message: "" };

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update<K extends keyof ContactFormValues>(key: K, value: ContactFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof ContactFormValues, string>> = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) next.email = "Please enter a valid email address.";
    if (!values.subject.trim()) next.subject = "Please enter a subject.";
    if (!values.message.trim() || values.message.trim().length < 10) {
      next.message = "Please enter a message of at least 10 characters.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await api.post<ApiItemResponse<unknown>>("/contact", values);
      setStatus("success");
      setFeedback(res.message || "Your message has been sent.");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-forest-50 border border-forest-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-forest-900 mb-2">Message sent</h3>
        <p className="text-ink/70">{feedback}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" error={errors.name}>
          <input
            type="text"
            value={values.name}
            onChange={(e) => update("name", e.target.value)}
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email address" error={errors.email}>
          <input
            type="email"
            value={values.email}
            onChange={(e) => update("email", e.target.value)}
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      <Field label="Phone number (optional)">
        <input
          type="tel"
          value={values.phone}
          onChange={(e) => update("phone", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Subject" error={errors.subject}>
        <input
          type="text"
          value={values.subject}
          onChange={(e) => update("subject", e.target.value)}
          className={inputClass(!!errors.subject)}
        />
      </Field>

      <Field label="Message" error={errors.message}>
        <textarea
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          rows={5}
          className={inputClass(!!errors.message)}
        />
      </Field>

      {status === "error" && <p className="text-sm text-brick-600">{feedback}</p>}

      <Button type="submit" className="self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="font-medium text-forest-900">{label}</span>
      {children}
      {error && <span className="text-xs text-brick-600">{error}</span>}
    </label>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-md border px-3.5 py-2.5 text-sm bg-paper text-ink placeholder:text-ink/40 focus:outline-none focus:ring-2 focus:ring-forest-500 ${
    hasError ? "border-brick-500" : "border-line"
  }`;
}
