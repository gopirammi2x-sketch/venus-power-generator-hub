import { business } from "@/config/business";

// Simplified, schematic outline of Kerala (not to survey scale).
const outline =
  "M30,10 L62,6 L78,40 L96,70 L104,110 L120,150 L140,190 L168,215 L150,250 L150,290 L170,330 L176,370 L168,410 L160,450 L146,494 L132,486 L118,450 L104,410 L94,370 L84,330 L72,290 L62,250 L52,210 L44,170 L36,130 L30,90 L24,50 Z";

const districts: { name: string; x: number; y: number }[] = [
  { name: "Kasaragod", x: 40, y: 30 },
  { name: "Kannur", x: 52, y: 75 },
  { name: "Wayanad", x: 84, y: 105 },
  { name: "Kozhikode", x: 62, y: 130 },
  { name: "Malappuram", x: 78, y: 175 },
  { name: "Palakkad", x: 118, y: 220 },
  { name: "Thrissur", x: 92, y: 262 },
  { name: "Ernakulam", x: 100, y: 305 },
  { name: "Idukki", x: 138, y: 330 },
  { name: "Kottayam", x: 116, y: 350 },
  { name: "Alappuzha", x: 98, y: 365 },
  { name: "Pathanamthitta", x: 140, y: 385 },
  { name: "Kollam", x: 124, y: 420 },
  { name: "Thiruvananthapuram", x: 140, y: 462 },
];

export function KeralaMap() {
  const served = new Set(business.districts);
  return (
    <div className="grid items-center gap-10 md:grid-cols-[minmax(0,360px)_1fr]">
      <svg viewBox="0 0 220 500" className="mx-auto h-[460px] w-auto" role="img" aria-label="Map of Kerala highlighting Ernakulam, Thrissur and Palakkad">
        <path d={outline} className="fill-muted stroke-border" strokeWidth={2} />
        {districts.map((d) => {
          const on = served.has(d.name);
          return (
            <g key={d.name}>
              {on && <circle cx={d.x} cy={d.y} r={14} className="fill-primary/20" />}
              <circle cx={d.x} cy={d.y} r={on ? 6 : 3} className={on ? "fill-primary" : "fill-muted-foreground/50"} />
              {on && <text x={d.x + 18} y={d.y + 5} className="fill-foreground font-display text-[15px] font-bold uppercase">{d.name}</text>}
            </g>
          );
        })}
        <text x={14} y={320} className="fill-muted-foreground text-[10px] italic" transform="rotate(-70 14 320)">Arabian Sea</text>
      </svg>
      <div>
        <p className="font-display text-3xl font-bold uppercase">Serving {business.districts.join(" · ")}</p>
        <p className="mt-3 max-w-md text-muted-foreground">Businesses and institutions in the highlighted districts can contact us for generator selection, quotations and installation coordination.</p>
      </div>
    </div>
  );
}
