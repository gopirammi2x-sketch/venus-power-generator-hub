import { useEffect, useState, type FormEvent } from "react";
import { business, industryOptions, kvaOptions, waLink } from "@/config/business";

type Fields = {
  name: string; company: string; mobile: string; email: string;
  kva: string; industry: string; district: string; location: string; notes: string;
};
const empty: Fields = { name: "", company: "", mobile: "", email: "", kva: "", industry: "", district: "", location: "", notes: "" };

export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your full name.";
  if (!/^(\+?91[\s-]?)?[6-9]\d{9}$/.test(f.mobile.replace(/\s/g, ""))) e.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (f.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email)) e.email = "Enter a valid email address.";
  if (!f.district) e.district = "Please select a district.";
  if (f.location.trim().length < 2) e.location = "Please enter the project location.";
  return e;
}

const inputCls =
  "mt-1.5 w-full rounded-sm border border-input bg-background px-3 py-2.5 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-ring/25 aria-[invalid=true]:border-destructive";

export function EnquiryForm({ prefillKva }: { prefillKva: string }) {
  const [f, setF] = useState<Fields>(empty);
  const [errors, setErrors] = useState<ReturnType<typeof validate>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  useEffect(() => { if (prefillKva) setF((p) => ({ ...p, kva: prefillKva })); }, [prefillKva]);

  const set = (k: keyof Fields) => (ev: { target: { value: string } }) => setF({ ...f, [k]: ev.target.value });

  function submit(ev: FormEvent) {
    ev.preventDefault();
    const e = validate(f);
    setErrors(e);
    if (Object.keys(e).length) return;
    setStatus("sending");
    const msg = [
      `Generator enquiry — ${business.name}`,
      `Name: ${f.name}`, f.company && `Company: ${f.company}`, `Mobile: ${f.mobile}`,
      f.email && `Email: ${f.email}`, f.kva && `Required kVA: ${f.kva}`, f.industry && `Application: ${f.industry}`,
      `District: ${f.district}`, `Location: ${f.location}`, f.notes && `Notes: ${f.notes}`,
    ].filter(Boolean).join("\n");
    window.open(waLink(msg), "_blank", "noopener");
    setTimeout(() => setStatus("done"), 400);
  }

  if (status === "done") {
    return (
      <div role="status" className="rounded-sm border border-border bg-card p-8 text-center">
        <h3 className="text-3xl font-bold">WhatsApp opened with your enquiry</h3>
        <p className="mt-3 text-muted-foreground">
          Please press <strong>Send</strong> in WhatsApp to deliver it to {business.name}. Your enquiry is not sent until you do.
        </p>
        <button onClick={() => { setF(empty); setStatus("idle"); }} className="mt-6 text-sm font-semibold text-primary underline">
          Start a new enquiry
        </button>
      </div>
    );
  }

  const Err = ({ k }: { k: keyof Fields }) =>
    errors[k] ? <p id={`${k}-err`} className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;
  const a = (k: keyof Fields) => ({ id: k, "aria-invalid": !!errors[k], "aria-describedby": errors[k] ? `${k}-err` : undefined });

  return (
    <form onSubmit={submit} noValidate className="grid gap-5 rounded-sm border border-border bg-card p-6 shadow-sm sm:grid-cols-2 sm:p-8">
      <div><label htmlFor="name" className="text-sm font-medium">Full name *</label><input {...a("name")} className={inputCls} value={f.name} onChange={set("name")} autoComplete="name" /><Err k="name" /></div>
      <div><label htmlFor="company" className="text-sm font-medium">Company name</label><input {...a("company")} className={inputCls} value={f.company} onChange={set("company")} autoComplete="organization" /></div>
      <div><label htmlFor="mobile" className="text-sm font-medium">Mobile number *</label><input {...a("mobile")} type="tel" inputMode="tel" className={inputCls} value={f.mobile} onChange={set("mobile")} autoComplete="tel" /><Err k="mobile" /></div>
      <div><label htmlFor="email" className="text-sm font-medium">Email</label><input {...a("email")} type="email" className={inputCls} value={f.email} onChange={set("email")} autoComplete="email" /><Err k="email" /></div>
      <div><label htmlFor="kva" className="text-sm font-medium">Required kVA</label>
        <select {...a("kva")} className={inputCls} value={f.kva} onChange={set("kva")}><option value="">Select capacity</option>{kvaOptions.map((o) => <option key={o}>{o}</option>)}</select></div>
      <div><label htmlFor="industry" className="text-sm font-medium">Application / industry</label>
        <select {...a("industry")} className={inputCls} value={f.industry} onChange={set("industry")}><option value="">Select application</option>{industryOptions.map((o) => <option key={o}>{o}</option>)}</select></div>
      <div><label htmlFor="district" className="text-sm font-medium">District *</label>
        <select {...a("district")} className={inputCls} value={f.district} onChange={set("district")}><option value="">Select district</option>{business.districts.map((o) => <option key={o}>{o}</option>)}</select><Err k="district" /></div>
      <div><label htmlFor="location" className="text-sm font-medium">Project location *</label><input {...a("location")} className={inputCls} value={f.location} onChange={set("location")} placeholder="Town / area" /><Err k="location" /></div>
      <div className="sm:col-span-2"><label htmlFor="notes" className="text-sm font-medium">Additional requirements</label><textarea {...a("notes")} rows={4} className={inputCls} value={f.notes} onChange={set("notes")} placeholder="Connected load, single/three phase, indoor/outdoor, timeline…" /></div>
      <div className="sm:col-span-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">Submitting opens WhatsApp with your details filled in.</p>
        <button type="submit" disabled={status === "sending"} className="rounded-sm bg-primary px-7 py-3 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground transition hover:brightness-110 disabled:opacity-60">
          {status === "sending" ? "Preparing…" : "Send enquiry via WhatsApp"}
        </button>
      </div>
    </form>
  );
}
