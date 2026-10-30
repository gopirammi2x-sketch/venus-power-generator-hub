import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Mail, MapPin, Clock, ClipboardList, Gauge, FileText, BookOpen, Truck, Factory, Hospital, Building2, Home, HardHat, Laptop, GraduationCap, Warehouse, ArrowRight, Wrench } from "lucide-react";
import gensetAsset from "@/assets/cummins-genset.jpeg.asset.json";
import factory from "@/assets/ind-factory.jpg";
import hospital from "@/assets/ind-hospital.jpg";
import commercial from "@/assets/ind-commercial.jpg";
import construction from "@/assets/ind-construction.jpg";
import apartment from "@/assets/ind-apartment.jpg";
import itpark from "@/assets/ind-it.jpg";
import education from "@/assets/ind-education.jpg";
import warehouse from "@/assets/ind-warehouse.jpg";
import mdPhoto from "@/assets/md-portrait.jpg";
import logo from "@/assets/venus-logo.jpg";
import { Showcase } from "@/components/site/Showcase";
import { KeralaMap } from "@/components/site/KeralaMap";
import { Testimonials } from "@/components/site/Testimonials";
import { business, generatorRanges, rangeOption, waLink } from "@/config/business";
import { Button } from "@/components/ui/button";
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
const nav: [string, string][] = [["Home", "#home"], ["About Us", "#about"], ["Generator Range", "#range"], ["Applications", "#applications"], ["Why Choose Us", "#why"], ["Get a Quote", "#enquiry"]];
const genericWa = waLink(`Hello ${business.name}, I'd like to enquire about a Cummins generator.`);

const why = [
  [ClipboardList, "Assistance with Generator Selection", "Guidance on choosing a genset that fits your site, load profile and backup needs."],
  [Gauge, "Power Requirement Assessment", "Help working out the kVA rating your connected and starting loads call for."],
  [FileText, "Transparent Quotations", "Clear, itemised quotations so you can compare options with confidence."],
  [BookOpen, "Product Specification Guidance", "Plain explanations of ratings, enclosures, controllers and compliance."],
  [Truck, "Delivery and Installation Coordination", "Coordination of supply, site readiness and installation support."],
  [Wrench, "Product Support & After Market", "Product support and after market by Cummins authorized dealers."],
] as const;

const industries = [
  [Factory, "Manufacturing & Industrial", "Keep production lines running through grid outages.", factory],
  [Hospital, "Hospitals & Healthcare", "Dependable standby power for critical care.", hospital],
  [Building2, "Hotels & Commercial Buildings", "Uninterrupted comfort for guests and tenants.", commercial],
  [HardHat, "Construction & Infrastructure", "Prime power for sites without grid supply.", construction],
  [Home, "Apartments & Residential", "Backup for lifts, pumps and common areas.", apartment],
  [Laptop, "IT Parks & Offices", "Protect servers, networks and workspaces.", itpark],
  [GraduationCap, "Educational Institutions", "Power for labs, classrooms and hostels.", education],
  [Warehouse, "Warehouses & Logistics", "Cold chain and operations kept online.", warehouse],
] as const;

const steps = ["Share Your Power Requirements", "Discuss the Application and Load", "Receive a Suitable Recommendation and Quotation", "Coordinate Supply and Installation Support"];


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
            <img src={logo} alt={`${business.name} logo`} className="h-11 w-auto shrink-0" />
            <span className="hidden min-w-0 text-[11px] leading-tight text-muted-foreground sm:block">{business.tagline}</span>
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
        <Showcase />

        {/* About — MD message */}
        <section id="about" className="bg-charcoal text-charcoal-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-[260px_1fr]">
            <div className="text-center">
              <div className="mx-auto grid h-52 w-52 place-items-center overflow-hidden rounded-full border-4 border-primary bg-charcoal-foreground/10">
                <img src={mdPhoto} alt={`Managing Director, ${business.name}`} className="h-full w-full object-cover" />
              </div>
              <p className="mt-4 font-display text-2xl font-bold uppercase">Biju P.M</p>
              <p className="text-sm opacity-70">Managing Director, {business.name}</p>
            </div>
            <div>
              <p className="eyebrow">A message from our Managing Director</p>
              <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Your Local Partner for Reliable Power</h2>
              <blockquote className="mt-6 space-y-4 border-l-4 border-primary pl-6 text-lg opacity-90">
                <p>"At {business.name}, we are proud to be an authorized dealer of Cummins and Powerica diesel generators, serving businesses and institutions across Central Kerala."</p>
                <p>"Every site is different. My team and I take the time to understand your facility, your operating loads and your backup needs, and then recommend the right generator across our ranges: {business.capacityRange}, all prime rated — with clear quotations and coordinated supply and installation support."</p>
                <p>"Our promise is simple: dependable power, honest advice and support you can count on."</p>
              </blockquote>
            </div>
          </div>
        </section>

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
              <p className="mt-6 flex items-start gap-2 text-sm font-medium"><MapPin className="h-4 w-4 shrink-0 text-primary" /><span>Serving Ernakulam | Thrissur | Palakkad<br />{business.capacityRange} · {business.rating}</span></p>
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

        {/* Range */}
        <section id="range" className="mx-auto max-w-7xl px-4 py-20">
          <p className="eyebrow">Generator range</p>
          <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Cummins Generator Range</h2>
          <p className="mt-3 font-semibold text-primary">All generators are prime rated only.</p>
          <p className="mt-2 max-w-2xl text-muted-foreground">Likely applications and customer segments are indicative. Exact models, emission compliance and availability are confirmed on enquiry.</p>
          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[2fr_3fr]">
            <img src={genset} alt="Cummins diesel generator set" loading="lazy" className="w-full rounded-sm object-cover shadow-lg lg:sticky lg:top-24" />
            <div className="divide-y divide-border overflow-hidden rounded-sm border border-border bg-card">
              {generatorRanges.map((range) => (
                <div key={range.category} className="grid gap-3 p-5 sm:grid-cols-[140px_1fr] sm:items-center">
                  <div><p className="font-display text-3xl font-bold text-primary">{range.category}</p><h3 className="text-2xl font-bold">{range.capacity}</h3><p className="mt-1 text-xs text-muted-foreground">Prime rating</p></div>
                  <div className="text-sm">
                    <p><span className="font-semibold">Applications:</span> <span className="text-muted-foreground">{range.applications}</span></p>
                    <p className="mt-1"><span className="font-semibold">Customers:</span> <span className="text-muted-foreground">{range.customers}</span></p>
                    <Button variant="link" onClick={() => enquire(rangeOption(range))} className="mt-3 h-auto p-0 font-display font-semibold uppercase">Enquire <ArrowRight className="h-4 w-4" /></Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries */}
        <section id="applications" className="bg-muted">
          <div className="mx-auto max-w-7xl px-4 py-20">
            <p className="eyebrow">Applications</p>
            <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">Industries We Serve</h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {industries.map(([, t, d, img]) => (
                <div key={t} className="overflow-hidden rounded-sm border border-border bg-card">
                  <img src={img} alt={t} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover" />
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
          <div className="mt-10"><KeralaMap /></div>
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
          </div>
        </section>

        {/* Enquiry */}
        <section id="enquiry" className="mx-auto max-w-4xl px-4 py-20">
          <p className="eyebrow text-center">Get a quote</p>
          <h2 className="mt-3 text-center text-4xl font-bold uppercase md:text-5xl">Request a Cummins Generator Quotation</h2>
          <div className="mt-10"><EnquiryForm prefillKva={kva} /></div>
        </section>

        <Testimonials />

      </main>

      <footer className="bg-charcoal text-charcoal-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-3">
          <div><p className="font-display text-3xl font-bold uppercase">{business.name}</p><p className="mt-2 text-sm opacity-70">{business.tagline}. Diesel generators: {business.capacityRange}. {business.rating}.</p></div>
          <div><p className="eyebrow">Quick links</p><ul className="mt-3 space-y-2 text-sm opacity-80">{nav.filter(([, h]) => h !== "#enquiry").map(([l, h]) => <li key={h}><a href={h} className="hover:text-primary">{l}</a></li>)}</ul></div>
          
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
