import { describe, expect, it } from "vitest";
import { business, generatorRanges, kvaOptions, rangeOption } from "@/config/business";

describe("Venus Power prime ranges", () => {
  it("defines LHP as 7.5 to 160 kVA", () => {
    expect(generatorRanges[0]).toMatchObject({ category: "LHP", minKva: 7.5, maxKva: 160 });
  });
  it("defines MHP as 180 to 500 kVA", () => {
    expect(generatorRanges[1]).toMatchObject({ category: "MHP", minKva: 180, maxKva: 500 });
  });
  it("defines HHP as strictly above 650 kVA with no stated upper limit", () => {
    expect(generatorRanges[2]).toMatchObject({ category: "HHP", minKva: 650, exclusiveMin: true, maxKva: null });
  });
  it("offers only prime rated range selections", () => {
    expect(business.rating).toBe("Prime rating only");
    expect(kvaOptions.slice(0, 3)).toEqual([
      "LHP — 7.5–160 kVA (prime)", "MHP — 180–500 kVA (prime)", "HHP — Above 650 kVA (prime)",
    ]);
    expect(generatorRanges.map(rangeOption)).toEqual(kvaOptions.slice(0, 3));
  });
});