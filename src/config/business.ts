// Edit business details here. Empty strings hide related buttons.
export const business = {
  name: "Venus Power",
  tagline: "Authorized Dealer — Cummins & Powerica",
  authorizedDealer: true,
  phoneDisplay: "75590 77577",
  phone: "+917559077577",
  whatsapp: "917559077577", // country code + number, digits only
  email: "venuscok@gmail.com",
  address: "No. 32/2625, D-6, Salwa Square, Nandanath Kochako Rd, Thammanam Rd, NH Bypass, Chakkaraparambu, Thammanam, Kochi, Kerala 682032",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Venus%20Power%20Salwa%20Square%20Thammanam%20Kochi%20682032",
  hours: "Mon – Sat, 9:00 AM – 6:00 PM",
  capacityRange: "LHP 7.5–160 kVA · MHP 180–500 kVA · HHP above 650 kVA",
  rating: "Prime rating only",
  districts: ["Ernakulam", "Thrissur", "Palakkad"],
};

export const generatorRanges = [
  { category: "LHP", capacity: "7.5–160 kVA", minKva: 7.5, maxKva: 160, applications: "Shops, clinics, offices, restaurants, schools and residential buildings", customers: "Small businesses, healthcare practices, educational trusts and homeowners" },
  { category: "MHP", capacity: "180–500 kVA", minKva: 180, maxKva: 500, applications: "Hotels, hospitals, apartment complexes, commercial buildings and manufacturing units", customers: "Hoteliers, healthcare groups, builders and industrial businesses" },
  { category: "HHP", capacity: "Above 650 kVA", minKva: 650, maxKva: null, exclusiveMin: true, applications: "Large industrial facilities, IT campuses, data centres and critical infrastructure", customers: "Large industries, IT operators, utilities and infrastructure developers" },
] as const;

export const rangeOption = (range: (typeof generatorRanges)[number]) => `${range.category} — ${range.capacity} (prime)`;

export const kvaOptions = [
  ...generatorRanges.map(rangeOption),
  "Not sure — need assessment",
];

export const industryOptions = [
  "Manufacturing / Industrial",
  "Hospital / Healthcare",
  "Hotel / Commercial building",
  "Apartment / Residential",
  "Construction / Infrastructure",
  "IT park / Office",
  "Educational institution",
  "Warehouse / Logistics",
  "Other",
];

export const waLink = (text: string) =>
  business.whatsapp ? `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}` : "";
