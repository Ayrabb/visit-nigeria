import Image from "next/image";

const TRIBES = [
  {
    name: "Yorùbá",
    region: "South West",
    image: "/images/tribes/yoruba.jpeg",
    description:
      "Known for elaborate festivals, talking drums, beadwork, and a deep storytelling tradition woven into everyday life.",
  },
  {
    name: "Igbo",
    region: "South East",
    image: "/images/tribes/igbo.png",
    description:
      "Entrepreneurial, expressive, and community-focused, with vibrant masquerades and thriving craft markets.",
  },
  {
    name: "Hausa",
    region: "North",
    image: "/images/dances/durbar.png",
    description:
      "Rich in architecture, textiles, and horsemanship, from ancient city walls to modern Durbar processions.",
  },
  {
    name: "Fulani",
    region: "North",
    image: "/images/tribes/fulani.png",
    description:
      "Rich in architecture, textiles, and horsemanship, from ancient city walls to modern Durbar processions.",
  },
 






];

export default function TribesSection() {
  return (
    <section>
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-2">
            Nigerian Tribes
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Faces of the federation.
          </h2>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {TRIBES.map((tribe) => (
          <article
            key={tribe.name}
            className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 shadow-[0_18px_45px_rgba(15,23,42,0.55)] hover:shadow-[0_28px_70px_rgba(15,23,42,0.85)] transition-shadow duration-300"
          >
            <div className="relative h-44">
              <Image
                src={tribe.image}
                alt={tribe.name}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover image-hover-zoom"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                <h3 className="font-semibold text-lg">{tribe.name}</h3>
                <span className="text-xs uppercase tracking-[0.22em] text-emerald-200">
                  {tribe.region}
                </span>
              </div>
            </div>

            <div className="p-4 text-sm text-slate-200/90">
              <p>{tribe.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

