import { Quote, MessageCircle } from "lucide-react";
import { business, waLink } from "@/config/business";

/**
 * Genuine customer feedback only. Every slot starts empty on purpose —
 * quotes are added from real customers, never invented.
 */
export const testimonialSlots = [
  { quote: "", name: "", company: "", district: "" },
  { quote: "", name: "", company: "", district: "" },
  { quote: "", name: "", company: "", district: "" },
] as const;

const shareLink = waLink(
  `Hello ${business.name}, I would like to share my experience of purchasing and running my D.G. Set from Venus Power for the customer voices section on your website.`,
);

export function Testimonials() {
  const filled = testimonialSlots.filter((s) => s.quote.trim().length > 0);

  return (
    <section id="customer-voices" className="bg-muted">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <p className="eyebrow">Customer voices</p>
        <h2 className="mt-3 text-4xl font-bold uppercase md:text-5xl">What Our Customers Say</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          We publish genuine feedback from customers who bought and run their D.G. Sets with us. If your
          Venus Power genset is working well, tell us about it — we will add your words here.
        </p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {filled.length > 0
            ? filled.map((s) => (
                <figure key={s.name} className="rounded-sm border border-border bg-card p-7">
                  <Quote className="h-7 w-7 text-primary" />
                  <blockquote className="mt-4 text-lg leading-relaxed">&ldquo;{s.quote}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4 text-sm">
                    <span className="font-display text-xl font-semibold">{s.name}</span>
                    {(s.company || s.district) && (
                      <span className="block text-muted-foreground">
                        {[s.company, s.district].filter(Boolean).join(" · ")}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))
            : testimonialSlots.map((_, i) => (
                <div
                  key={i}
                  className="grid place-items-center rounded-sm border-2 border-dashed border-border p-7 text-center"
                >
                  <p className="text-sm font-medium text-muted-foreground">
                    Customer quote {i + 1}
                    <span className="mt-1 block text-xs font-normal opacity-80">
                      A real customer&rsquo;s experience will appear here.
                    </span>
                  </p>
                </div>
              ))}
        </div>

        <a
          href={shareLink}
          target="_blank"
          rel="noopener"
          className="mt-10 inline-flex items-center gap-2 rounded-sm border-2 border-foreground px-6 py-3 font-display text-lg font-semibold uppercase tracking-wide hover:bg-foreground hover:text-background"
        >
          <MessageCircle className="h-5 w-5" />
          Share your experience
        </a>
      </div>
    </section>
  );
}
