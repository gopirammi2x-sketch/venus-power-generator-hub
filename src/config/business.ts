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
  capacityRange: "15–3000 kVA",
  districts: ["Ernakulam", "Thrissur", "Palakkad"],
};

export const kvaOptions = [
  "15–62.5 kVA",
  "63–125 kVA",
  "126–250 kVA",
  "251–500 kVA",
  "501–1000 kVA",
  "1001–3000 kVA",
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
