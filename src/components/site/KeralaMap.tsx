import { business } from "@/config/business";
import districts from "@/data/kerala-districts.json";

const districtColors: Record<string, string> = {
  Kasaragod: "fill-map-lime", Kannur: "fill-map-rose", Wayanad: "fill-map-violet",
  Kozhikode: "fill-map-cyan", Malappuram: "fill-map-gold", Idukki: "fill-map-lime",
  Kottayam: "fill-map-violet", Alappuzha: "fill-map-rose", Pathanamthitta: "fill-map-cyan",
  Kollam: "fill-map-gold", Thiruvananthapuram: "fill-map-lime",
  Ernakulam: "fill-map-ernakulam", Thrissur: "fill-map-thrissur", Palakkad: "fill-map-palakkad",
};
const serviceColors: Record<string, string> = {
  Ernakulam: "bg-map-ernakulam", Thrissur: "bg-map-thrissur", Palakkad: "bg-map-palakkad",
};

export function KeralaMap() {
  const served = new Set(business.districts);
  return (
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
      <figure className="min-w-0">
        <svg viewBox="0 0 770 705" className="mx-auto block h-auto w-full" role="img" aria-labelledby="kerala-map-title kerala-map-desc">
          <title id="kerala-map-title">Kerala district map — Venus Power service area</title>
          <desc id="kerala-map-desc">All 14 districts of Kerala. Ernakulam is highlighted in red, Thrissur in blue and Palakkad in green, with dark boundary outlines.</desc>
          <text x={100} y={435} className="fill-muted-foreground text-[18px] italic" transform="rotate(-60 100 435)">Arabian Sea</text>
          {districts.map((d) => <path key={d.name} d={d.path} data-district={d.name} data-served={served.has(d.name)} className={`${districtColors[d.name]} stroke-background`} strokeWidth={1.6} strokeLinejoin="round"><title>{d.name}{served.has(d.name) ? " — Venus Power service district" : ""}</title></path>)}
          {districts.filter((d) => served.has(d.name)).map((d) => <path key={d.name} d={d.path} className="fill-none stroke-foreground" strokeWidth={2.4} strokeLinejoin="round" />)}
          {districts.map((d) => {
            const on = served.has(d.name);
            const endX = d.anchor === "end" ? d.labelX + 8 : d.labelX - 8;
            return <g key={d.name}>
              <polyline points={`${d.x},${d.y} ${endX},${d.labelY - 6}`} className={on ? "fill-none stroke-foreground" : "fill-none stroke-muted-foreground/60"} strokeWidth={on ? 1.8 : 1} />
              <circle cx={d.x} cy={d.y} r={on ? 4 : 2.5} className={on ? "fill-background stroke-foreground" : "fill-foreground"} strokeWidth={1.6} />
              <text x={d.labelX} y={d.labelY} textAnchor={d.anchor === "end" ? "end" : "start"} className={`fill-foreground text-[18px] ${on ? "font-bold" : "font-medium"}`}>{d.name}</text>
            </g>;
          })}
          <g transform="translate(660 54)" className="fill-foreground stroke-foreground"><path d="M0,36 L0,0 L-6,14 M0,0 L6,14" fill="none" strokeWidth={1.5} /><text x={0} y={-9} textAnchor="middle" className="stroke-none text-[15px] font-semibold">N</text></g>
        </svg>
        <figcaption className="mt-2 text-xs text-muted-foreground">District boundaries: <a href="https://projects.datameet.org/maps/districts/" target="_blank" rel="noopener noreferrer" className="underline">DataMeet community</a> / <a href="https://github.com/geohacker/kerala" target="_blank" rel="noopener noreferrer" className="underline">Kerala maps</a>. For service-area reference.</figcaption>
      </figure>
      <div>
        <p className="eyebrow">Venus Power service districts</p>
        <h3 className="mt-3 font-display text-3xl font-bold uppercase">Ernakulam · Thrissur · Palakkad</h3>
        <ul className="mt-6 divide-y divide-border border-y border-border">
          {business.districts.map((name) => <li key={name} className="flex items-center gap-3 py-4"><span className={`h-4 w-4 shrink-0 rounded-full border border-foreground ${serviceColors[name]}`} /><span className="font-display text-2xl font-semibold">{name}</span></li>)}
        </ul>
        <p className="mt-5 max-w-md text-muted-foreground">Businesses and institutions in these three districts can contact us for generator selection, quotations and installation coordination.</p>
      </div>
    </div>
  );
}
