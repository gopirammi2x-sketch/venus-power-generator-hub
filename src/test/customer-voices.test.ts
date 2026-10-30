import { describe, expect, it } from "vitest";
import { testimonialSlots } from "@/components/site/Testimonials";

describe("customer voices panel", () => {
  it("never ships an invented customer quote", () => {
    expect(testimonialSlots.length).toBeGreaterThan(0);
    for (const slot of testimonialSlots) {
      expect(slot.quote.trim()).toBe("");
      expect(slot.name.trim()).toBe("");
    }
  });
});
