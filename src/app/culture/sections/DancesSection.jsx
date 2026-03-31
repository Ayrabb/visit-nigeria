import Image from "next/image";

const DANCES = [
  {
    name: "Bata Dance",
    region: "Yorùbá – South West",
    image: "/images/dances/bata.png",
    description:
      "Percussive footwork and talking drums used in both royal courts and contemporary performances.",
  },
  {
    name: "Atilogwu",
    region: "Igbo – South East",
    image: "/images/dances/atilogwu.png",
    description:
      "An acrobatic, high-energy youth dance marked by flips, fast kicks, and colorful costumes.",
  },
  {
    name: "Durbar Horse Parade",
    region: "Hausa-Fulani – North",
    image: "/images/dances/durbar.png",
    description:
      "Regal horsemanship with embroidered regalia, drums, and gun salutes during Eid and festivals.",
  },
  {
    name: "Vulma Dancers",
    region: "Adamawa – North East",
    image: "/images/dances/vulma.png",
    description:
      "Colorful, synchronized performances from Adamawa showcasing intricate footwork, spinning fabrics, and community celebration.",
  },
];

export default function DancesSection() {
  return (
    <section>
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-2">
            Nigerian Dances
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            Movement as storytelling.
          </h2>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {DANCES.map((dance) => (
          <article
            key={dance.name}
            className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 flex flex-col"
          >
            <div className="relative h-40">
              <Image
                src={dance.image}
                alt={dance.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover image-hover-zoom"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-semibold text-lg mb-1">{dance.name}</h3>
              <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-3">
                {dance.region}
              </p>
              <p className="text-sm text-slate-200/90 flex-1">
                {dance.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

