import { FormEvent, useState } from "react";
import { api, ApiRequestError } from "../../lib/api";
import { AdmissionFormValues, ApiItemResponse } from "../../types";
import Button from "../ui/Button";

const initialValues: AdmissionFormValues = {
  childName: "",
  childAge: "",
  guardianName: "",
  guardianPhone: "",
  guardianEmail: "",
  desiredProgram: "",
  additionalNotes: "",
};

const programOptions = [
  "Early Childhood Development",
  "Primary Education",
  "Bridging & Catch-Up Classes",
  "Life Skills & Vocational Training",
  "Not sure yet",
];

export default function AdmissionForm() {
  const [values, setValues] = useState<AdmissionFormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof AdmissionFormValues, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  function update<K extends keyof AdmissionFormValues>(key: K, value: AdmissionFormValues[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function validate(): boolean {
    const next: Partial<Record<keyof AdmissionFormValues, string>> = {};
    if (!values.childName.trim()) next.childName = "Please enter the child's name.";
    if (values.childAge === "" || Number(values.childAge) < 3 || Number(values.childAge) > 20) {
      next.childAge = "Please enter a valid age between 3 and 20.";
    }
    if (!values.guardianName.trim()) next.guardianName = "Please enter the parent or guardian's name.";
    if (!values.guardianPhone.trim()) next.guardianPhone = "Please enter a phone number we can reach you on.";
    if (!values.desiredProgram) next.desiredProgram = "Please select a programme.";

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    try {
      const res = await api.post<ApiItemResponse<unknown>>("/admissions", {
        ...values,
        childAge: Number(values.childAge),
      });
      setStatus("success");
      setFeedback(res.message || "Your inquiry has been received.");
      setValues(initialValues);
    } catch (err) {
      setStatus("error");
      setFeedback(err instanceof ApiRequestError ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-forest-50 border border-forest-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-forest-900 mb-2">Inquiry received</h3>
        <p className="text-ink/70">{feedback}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Child's full name" error={errors.childName}>
          <input
            type="text"
            value={values.childName}
            onChange={(e) => update("childName", e.target.value)}
            className={inputClass(!!errors.childName)}
          />
        </Field>
        <Field label="Child's age" error={errors.childAge}>
          <input
            type="number"
            min={3}
            max={20}
            value={values.childAge}
            onChange={(e) => update("childAge", e.target.value === "" ? "" : Number(e.target.value))}
            className={inputClass(!!errors.childAge)}
          />
        </Field>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Parent / guardian name" error={errors.guardianName}>
          <input
            type="text"
            value={values.guardianName}
            onChange={(e) => update("guardianName", e.target.value)}
            className={inputClass(!!errors.guardianName)}
          />
        </Field>
        <Field label="Phone number" error={errors.guardianPhone}>
          <input
            type="tel"
            value={values.guardianPhone}
            onChange={(e) => update("guardianPhone", e.target.value)}
            className={inputClass(!!errors.guardianPhone)}
            placeholder="07xx xxx xxx"
          />
        </Field>
      </div>

      <Field label="Email (optional)">
        <input
          type="email"
          value={values.guardianEmail}
          onChange={(e) => update("guardianEmail", e.target.value)}
          className={inputClass(false)}
        />
      </Field>

      <Field label="Which programme fits best?" error={errors.desiredProgram}>
        <select
          value={values.desiredProgram}
          onChange={(e) => update("desiredProgram", e.target.value)}
          className={inputClass(!!errors.desiredProgram)}
        >
          <option value="">Select a programme</option>
          {programOptions.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Anything else we should know? (optional)">
        <textarea
          value={values.additionalNotes}
          onChange={(e) => update("additionalNotes", e.target.value)}
          rows={4}
          className={inputClass(false)}
        />
      </Field>

      {status === "error" && <p className="text-sm text-brick-600">{feedback}</p>}

      <Button type="submit" className="self-start" disabled={status === "submitting"}>
        {status === "submitting" ? "Submitting…" : "Submit inquiry"}
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
