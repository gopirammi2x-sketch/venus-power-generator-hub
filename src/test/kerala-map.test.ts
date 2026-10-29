import { describe, expect, it } from "vitest";
import districts from "@/data/kerala-districts.json";
import { business } from "@/config/business";

describe("Kerala service geography", () => {
  it("contains the boundaries of all fourteen districts", () => {
    expect(districts.map((d) => d.name).sort()).toEqual([
      "Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam",
      "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad",
    ]);
    expect(districts.every((d) => d.path.startsWith("M") && d.path.endsWith("Z"))).toBe(true);
  });
  it("identifies only Ernakulam, Thrissur and Palakkad as service districts", () => {
    expect(districts.filter((d) => business.districts.includes(d.name)).map((d) => d.name).sort()).toEqual(["Ernakulam", "Palakkad", "Thrissur"]);
  });
});