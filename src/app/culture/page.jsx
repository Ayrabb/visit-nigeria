import TribesSection from "./sections/TribesSection";
import FoodsSection from "./sections/FoodsSection";
import DancesSection from "./sections/DancesSection";
import FestivalsSection from "./sections/FestivalsSection";

export const metadata = {
  title: "Cultures of Nigeria | Explore Nigeria",
  description:
    "Discover Nigerian tribes, foods, dances, and festivals in a curated cultural journey.",
};

export default function CulturePage() {
  return (
    <main className="pt-32 pb-24 bg-[#040814] text-slate-100">
      <section className="max-w-6xl mx-auto px-6 md:px-8">
        <header className="mb-14">
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-4">
            Culture Atlas
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight mb-4">
            Many tribes. One rhythm.
          </h1>
          <p className="text-slate-300 max-w-2xl">
            Nigeria’s cultures span language, food, dance, and festivals. Wander
            through the highlights curated for travelers who want to feel the
            country, not just see it.
          </p>
        </header>

        <div className="space-y-20">
          <TribesSection />
          <FoodsSection />
          <DancesSection />
          <FestivalsSection />
        </div>
      </section>
    </main>
  );
}

