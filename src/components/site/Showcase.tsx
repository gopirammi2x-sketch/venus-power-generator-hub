import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import gensetAsset from "@/assets/cummins-genset.jpeg.asset.json";
import factory from "@/assets/ind-factory.jpg";
import hospital from "@/assets/ind-hospital.jpg";
import commercial from "@/assets/ind-commercial.jpg";

// Replace these with real installation / launch / display photos and captions.
const slides = [
  { tag: "Product display", title: "Cummins Diesel Generator Sets", text: "15–3000 kVA solutions for every business.", img: gensetAsset.url },
  { tag: "Latest installation", title: "[Installation — customer & site]", text: "Add your latest installation photo and details here.", img: factory },
  { tag: "New launch", title: "[New launch event]", text: "Add photos from product launches and events.", img: commercial },
  { tag: "Latest installation", title: "[Healthcare installation]", text: "Showcase standby power projects for hospitals.", img: hospital },
];

export function Showcase() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((n) => (n + 1) % slides.length), 5000);
    return () => clearInterval(t);
  }, []);
  const go = (d: number) => setI((n) => (n + d + slides.length) % slides.length);

  return (
    <section aria-label="Latest installations and events" className="relative h-[300px] overflow-hidden bg-charcoal md:h-[440px]">
      {slides.map((s, n) => (
        <div key={n} className={`absolute inset-0 transition-opacity duration-700 ${n === i ? "opacity-100" : "pointer-events-none opacity-0"}`} aria-hidden={n !== i}>
          <img src={s.img} alt={s.title} className="h-full w-full object-cover" loading={n === 0 ? "eager" : "lazy"} />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/50 to-transparent" />
          <div className="absolute inset-0 mx-auto flex max-w-7xl flex-col justify-end px-14 pb-12 text-charcoal-foreground md:justify-center md:pb-0">
            <span className="self-start rounded-sm bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">{s.tag}</span>
            <h2 className="mt-3 max-w-xl text-3xl font-bold uppercase md:text-5xl">{s.title}</h2>
            <p className="mt-2 max-w-md opacity-90">{s.text}</p>
          </div>
        </div>
      ))}
      <button onClick={() => go(-1)} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background"><ChevronLeft /></button>
      <button onClick={() => go(1)} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/80 p-2 text-foreground hover:bg-background"><ChevronRight /></button>
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {slides.map((_, n) => (
          <button key={n} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} className={`h-2 rounded-full transition-all ${n === i ? "w-8 bg-primary" : "w-2 bg-background/70"}`} />
        ))}
      </div>
    </section>
  );
}
