import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Mail, MapPin, Clock, ClipboardList, Gauge, FileText, BookOpen, Truck, Wrench, Factory, Hospital, Building2, Home, HardHat, Laptop, GraduationCap, Warehouse, ChevronDown, ArrowRight } from "lucide-react";
import gensetAsset from "@/assets/cummins-genset.jpeg.asset.json";
import factory from "@/assets/ind-factory.jpg";
import hospital from "@/assets/ind-hospital.jpg";
import commercial from "@/assets/ind-commercial.jpg";
import construction from "@/assets/ind-construction.jpg";
import { business, waLink } from "@/config/business";
import { EnquiryForm } from "@/components/site/EnquiryForm";

const TITLE = "Cummins Diesel Generator Dealer | Ernakulam, Thrissur & Palakkad";
const DESC = "Explore Cummins diesel generator solutions for businesses across Ernakulam, Thrissur and Palakkad, Kerala. Enquire for generator selection assistance and quotations.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const genset = gensetAsset.url;
const nav: [string, string][] = [["Home", "#home"], ["About Us", "#about"], ["Generator Range", "#range"], ["Applications", "#applications"], ["Why Choose Us", "#why"], ["Contact", "#contact"]];
const genericWa = waLink(`Hello ${business.name}, I'd like to enquire about a Cummins generator.`);

const why = [
  [ClipboardList, "Assistance with Generator Selection", "Guidance on choosing a genset that fits your site, load profile and backup needs."],
  [Gauge, "Power Requirement Assessment", "Help working out the kVA rating your connected and starting loads call for."],
  [FileText, "Transparent Quotations", "Clear, itemised quotations so you can compare options with confidence."],
  [BookOpen, "Product Specification Guidance", "Plain explanations of ratings, enclosures, controllers and compliance."],
  [Truck, "Delivery and Installation Coordination", "Coordination of supply, site readiness and installation support."],
  [Wrench, "Warranty and After-Sales Support", "Support with warranty matters and service needs after commissioning."],
] as const;

const range: [string, string][] = [
  ["15–62.5 kVA", "Shops, clinics, small offices and homes needing compact, quiet backup."],
  ["63–125 kVA", "Mid-size commercial buildings, restaurants, schools and workshops."],
  ["126–250 kVA", "Hotels, hospitals, apartment complexes and light industry."],
  ["251–500 kVA", "Large commercial facilities, malls and manufacturing units."],
  ["501–1000 kVA", "Heavy industry, large hospitals and IT campuses."],
  ["1001–3000 kVA", "Critical infrastructure, data centres and large industrial plants."],
];

const industries = [
  [Factory, "Manufacturing & Industrial", "Keep production lines running through grid outages.", factory],
  [Hospital, "Hospitals & Healthcare", "Dependable standby power for critical care.", hospital],
  [Building2, "Hotels & Commercial Buildings", "Uninterrupted comfort for guests and tenants.", commercial],
  [HardHat, "Construction & Infrastructure", "Prime power for sites without grid supply.", construction],
  [Home, "Apartments & Residential", "Backup for lifts, pumps and common areas.", null],
  [Laptop, "IT Parks & Offices", "Protect servers, networks and workspaces.", null],
  [GraduationCap, "Educational Institutions", "Power for labs, classrooms and hostels.", null],
  [Warehouse, "Warehouses & Logistics", "Cold chain and operations kept online.", null],
] as const;

const steps = ["Share Your Power Requirements", "Discuss the Application and Load", "Receive a Suitable Recommendation and Quotation", "Coordinate Supply and Installation Support"];

const faqs = [
  ["How do I calculate the required generator capacity?", "Add up the running wattage of the equipment you need to back up, allow for motor starting currents (which can be several times running current), then convert kW to kVA using the power factor (typically 0.8 for gensets). A margin of around 20–25% is commonly added. We recommend a site assessment for accurate sizing."],
  ["Which generator capacity is suitable for my business?", "It depends on your connected load, which equipment must stay on during outages, and future expansion plans. Share your load details and we'll suggest suitable options."],
  ["Do you provide quotations?", "Yes. Send your requirement through the enquiry form or WhatsApp and we'll prepare a quotation based on your needs."],
  ["Which districts do you serve?", "We handle enquiries from Ernakulam, Thrissur and Palakkad districts in Kerala."],
  ["What information is required for a quotation?", "Your required capacity (or load list), application, single or three phase supply, installation location, indoor or outdoor placement, and your expected timeline."],
  ["Which Cummins models are available?", `We work with generators in the ${business.capacityRange} range. Specific model availability, ratings and emission compliance vary, so please contact us for current options.`],
];

function Index() {
  const [open, setOpen] = useState(false);
  const [kva, setKva] = useState("");
  const enquire = (k: string) => { setKva(k); document.getElementById("enquiry")?.scrollIntoView({ behavior: "smooth" }); };

  return (
    <div className="min-h-screen pb-16 md:pb-0">
      {/* Top bar */}
      <div className="bg-charcoal text-charcoal-foreground text-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2">
          <div className="flex min-w-0 items-center gap-5">
            <a href={`tel:${business.phone}`} className="flex items-center gap-1.5 hover:text-primary"><Phone className="h-4 w-4 shrink-0" />{business.phoneDisplay}</a>
            {business.hours && <span className="hidden items-center gap-1.5 sm:flex"><Clock className="h-4 w-4" />{business.hours}</span>}
            <a href={`mailto:${business.email}`} className="hidden items-center gap-1.5 hover:text-primary md:flex"><Mail className="h-4 w-4" />{business.email}</a>
          </div>
          <a href="#enquiry" className="shrink-0 font-semibold text-primary hover:underline">Request a Quote</a>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex min-w-0 items-center gap-2.5">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-primary font-display text-2xl font-bold text-primary-foreground">V</span>
            <span className="min-w-0 leading-tight">
              <span className="block font-display text-2xl font-bold uppercase">{business.name}</span>
              <span className="block truncate text-[11px] text-muted-foreground">{business.tagline}</span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
            {nav.map(([l, h]) => <a key={h} href={h} className="text-sm font-medium hover:text-primary">{l}</a>)}
          </nav>
          <div className="flex items-center gap-2">
            <a href="#enquiry" className="hidden rounded-sm bg-primary px-5 py-2.5 font-display font-semibold uppercase tracking-wide text-primary-foreground hover:brightness-110 sm:block">Get Best Price</a>
            <button onClick={() => setOpen(!open)} className="p-2 lg:hidden" aria-label="Toggle menu" aria-expanded={open}>{open ? <X /> : <Menu />}</button>
          </div>
        </div>
        {open && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden" aria-label="Mobile">
            {nav.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)} className="block py-2.5 font-medium">{l}</a>)}
            <a href="#enquiry" onClick={() => setOpen(false)} className="mt-2 block rounded-sm bg-primary py-3 text-center font-semibold text-primary-foreground">Get Best Price</a>
          </nav>
        )}
      </header>

      <main>
        {/* Hero */}
        <section id="home" className="border-b border-border">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 md:py-20 lg:grid-cols-2">
            <div className="fade-up">
              <p className="eyebrow">Authorized dealer · Cummins & Powerica</p>
              <h1 className="mt-4 text-5xl font-bold uppercase leading-[0.95] md:text-7xl">Reliable Power for <span className="text-primary">Every Business</span></h1>
              <p className="mt-5 font-display text-2xl font-medium text-muted-foreground">Cummins Diesel Generator Solutions in Ernakulam, Thrissur & Palakkad</p>
              <p className="mt-4 max-w-xl text-muted-foreground">Explore dependable power backup solutions for commercial, industrial and institutional applications. Get expert assistance in selecting a generator that matches your power requirements.</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#enquiry" className="rounded-sm bg-primary px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground hover:brightness-110">Request Best Price</a>
                <a href={`tel:${business.phone}`} className="rounded-sm border-2 border-foreground px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide hover:bg-foreground hover:text-background">Speak to Our Team</a>
                <a href={genericWa} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide text-whatsapp-foreground hover:brightness-110"><MessageCircle className="h-5 w-5" />WhatsApp</a>
              </div>
              <p className="mt-6 flex items-center gap-2 text-sm font-medium"><MapPin className="h-4 w-4 text-primary" />Serving Ernakulam | Thrissur | Palakkad · {business.capacityRange}</p>
            </div>
            <div className="relative fade-up">
              <div className="absolute -inset-3 -z-10 translate-x-6 translate-y-6 bg-primary/10" />
              <img src={genset} alt="Cummins 250 kVA diesel generator set" className="w-full rounded-sm object-cover shadow-xl" fetchPriority="high" />
            </div>
          </div>
        </section>

        {/* Why */}
        <section id="why" className="mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Why choose us</p>
          <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Why Choose Our Generator Solutions</h2>
          <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {why.map(([Icon, t, d]) => (
              <div key={t} className="group bg-card p-7 transition hover:bg-accent">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="mt-4 text-2xl font-semibold">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-charcoal text-charcoal-foreground">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-2">
            <div>
              <p className="eyebrow">About {business.name}</p>
              <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Your Local Partner for Reliable Power</h2>
            </div>
            <div className="space-y-4 opacity-90">
              <p>{business.name} is an authorized dealer of Cummins and Powerica diesel generators, helping businesses and institutions across Central Kerala find the right power backup solution.</p>
              <p>We work with you to understand your facility, operating loads and backup requirements, then recommend generator options from {business.capacityRange} — with clear quotations and coordinated supply and installation support.</p>
              <p className="rounded-sm border border-dashed border-charcoal-foreground/30 p-4 text-sm opacity-70">[Company history and years of experience — to be added]</p>
            </div>
          </div>
        </section>

        {/* Range */}
        <section id="range" className="mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Generator range</p>
          <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Cummins Generator Range</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Indicative categories to help you browse. Exact models, ratings, emission compliance and availability are confirmed on enquiry.</p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {range.map(([k, d]) => (
              <article key={k} className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition hover:-translate-y-1 hover:shadow-lg">
                <div className="overflow-hidden bg-muted"><img src={genset} alt={`Cummins diesel generator — ${k} category`} loading="lazy" className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105" /></div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-3xl font-bold">{k}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
                  <button onClick={() => enquire(k)} className="mt-5 flex items-center gap-2 self-start font-display text-lg font-semibold uppercase tracking-wide text-primary">Enquire Now <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Industries */}
        <section id="applications" className="bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <p className="eyebrow">Applications</p>
            <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Industries We Serve</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(([Icon, t, d, img]) => (
                <div key={t} className="overflow-hidden rounded-sm border border-border bg-card">
                  {img ? <img src={img} alt={t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" /> : <div className="grid aspect-[4/3] place-items-center bg-charcoal"><Icon className="h-14 w-14 text-primary" /></div>}
                  <div className="p-5"><h3 className="text-xl font-semibold">{t}</h3><p className="mt-1 text-sm text-muted-foreground">{d}</p></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service area */}
        <section className="mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Service area</p>
          <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Cummins Generator Enquiries Across Central Kerala</h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">Customers across these districts can enquire about generator selection, quotations and available services.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {business.districts.map((d) => (
              <div key={d} className="border-l-4 border-primary bg-card p-7 shadow-sm">
                <MapPin className="h-7 w-7 text-primary" />
                <h3 className="mt-3 text-3xl font-bold uppercase">{d} District</h3>
                <p className="mt-2 text-sm text-muted-foreground">Generator selection, quotations and installation coordination for businesses in {d}.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Steps */}
        <section className="bg-charcoal text-charcoal-foreground">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <p className="eyebrow">How it works</p>
            <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Four Simple Steps</h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s} className="border-t-2 border-primary pt-5">
                  <span className="font-display text-5xl font-bold text-primary">0{i + 1}</span>
                  <p className="mt-2 font-display text-2xl font-semibold">{s}</p>
                </li>
              ))}
            </ol>
            <a href="#enquiry" className="mt-12 inline-block rounded-sm bg-primary px-7 py-3 font-display text-lg font-semibold uppercase tracking-wide text-primary-foreground hover:brightness-110">Discuss Your Generator Requirement</a>
          </div>
        </section>

        {/* Enquiry */}
        <section id="enquiry" className="mx-auto max-w-4xl px-4 py-20">
          <p className="eyebrow text-center">Get a quote</p>
          <h2 className="mt-3 text-center text-4xl font-bold uppercase md:text-5xl">Request a Cummins Generator Quotation</h2>
          <div className="mt-10"><EnquiryForm prefillKva={kva} /></div>
        </section>

        {/* FAQ */}
        <section className="bg-muted">
          <div className="mx-auto max-w-3xl px-4 py-20">
            <p className="eyebrow">FAQ</p>
            <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Frequently Asked Questions</h2>
            <div className="mt-8 divide-y divide-border rounded-sm border border-border bg-card">
              {faqs.map(([q, a]) => (
                <details key={q} className="group p-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold">{q}<ChevronDown className="h-5 w-5 shrink-0 transition group-open:rotate-180" /></summary>
                  <p className="mt-3 text-sm text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Contact</p>
          <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Talk to {business.name}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Phone, "Phone & WhatsApp", business.phoneDisplay],
              [Mail, "Email", business.email],
              [MapPin, "Office address", business.address || "[Address — to be added]"],
              [Clock, "Business hours", business.hours || "[Hours — to be added]"],
            ].map(([Icon, l, v]) => {
              const I = Icon as typeof Phone;
              return <div key={l as string} className="rounded-sm border border-border p-6"><I className="h-6 w-6 text-primary" /><p className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{l as string}</p><p className="mt-1 break-words font-semibold">{v as string}</p></div>;
            })}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`tel:${business.phone}`} className="flex items-center gap-2 rounded-sm bg-primary px-6 py-3 font-semibold text-primary-foreground"><Phone className="h-4 w-4" />Call Now</a>
            <a href={genericWa} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-sm bg-whatsapp px-6 py-3 font-semibold text-whatsapp-foreground"><MessageCircle className="h-4 w-4" />WhatsApp</a>
            <a href={`mailto:${business.email}`} className="flex items-center gap-2 rounded-sm border border-foreground px-6 py-3 font-semibold"><Mail className="h-4 w-4" />Email Us</a>
            {business.mapsUrl && <a href={business.mapsUrl} target="_blank" rel="noopener" className="flex items-center gap-2 rounded-sm border border-foreground px-6 py-3 font-semibold"><MapPin className="h-4 w-4" />Get Directions</a>}
          </div>
        </section>
      </main>

      <footer className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div><p className="font-display text-3xl font-bold uppercase">{business.name}</p><p className="mt-2 text-sm opacity-70">{business.tagline}. Diesel generators {business.capacityRange}.</p></div>
          <div><p className="eyebrow">Quick links</p><ul className="mt-3 space-y-2 text-sm opacity-80">{nav.map(([l, h]) => <li key={h}><a href={h} className="hover:text-primary">{l}</a></li>)}</ul></div>
          <div><p className="eyebrow">Generator enquiry</p><ul className="mt-3 space-y-2 text-sm opacity-80">{range.map(([k]) => <li key={k}><button onClick={() => enquire(k)} className="hover:text-primary">{k} generators</button></li>)}</ul></div>
          <div><p className="eyebrow">Service districts</p><ul className="mt-3 space-y-2 text-sm opacity-80">{business.districts.map((d) => <li key={d}>{d}, Kerala</li>)}</ul>
            <p className="mt-5 text-sm opacity-80">{business.phoneDisplay}<br />{business.email}</p></div>
        </div>
        <div className="border-t border-charcoal-foreground/10">
          <div className="mx-auto flex max-w-7xl flex-wrap justify-between gap-3 px-4 py-5 text-xs opacity-60">
            <p>© {new Date().getFullYear()} {business.name}. Cummins is a trademark of Cummins Inc.</p>
            <p className="flex gap-4"><a href="#" className="hover:underline">Privacy Policy</a><a href="#" className="hover:underline">Terms and Conditions</a></p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky actions */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 md:hidden">
        <a href={`tel:${business.phone}`} className="flex items-center justify-center gap-2 bg-primary py-4 font-semibold text-primary-foreground"><Phone className="h-5 w-5" />Call</a>
        <a href={genericWa} target="_blank" rel="noopener" className="flex items-center justify-center gap-2 bg-whatsapp py-4 font-semibold text-whatsapp-foreground"><MessageCircle className="h-5 w-5" />WhatsApp</a>
      </div>
    </div>
  );
}
