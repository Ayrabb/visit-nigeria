import Image from "next/image";

const FESTIVALS = [
  {
    name: "Calabar Carnival",
    location: "Calabar, Cross River",
    image: "/images/festivals/calabar-carnival.png",
    description:
      "Africa’s biggest street party: month-long parades, costume bands, music stages, and cultural showcases.",
  },
  {
    name: "Argungu Fishing Festival",
    location: "Argungu, Kebbi",
    image: "/images/festivals/argungu.png",
    description:
      "Thousands of fishermen dive into the river with bare hands and traditional nets in a dramatic, timed contest.",
  },
  {
    name: "Durbar Festival",
    location: "Kano, Kaduna & Northern Emirates",
    image: "/images/dances/durbar.png",
    description:
      "Emirs, nobles, and horsemen ride through city streets in richly embroidered regalia to mark Eid celebrations.",
  },
  {
    name: "Osun-Osogbo Festival",
    location: "Osogbo, Osun",
    image: "/images/festivals/osun-osogbo.png",
    description:
      "Pilgrims, priests, and visitors journey to the sacred grove to honor the river goddess Osun.",
  },
  {
    name: "New Yam Festival (Iri Ji)",
    location: "Communities across the South East",
    image: "/images/festivals/new-yam.png",
    description:
      "A thanksgiving celebration marking the harvest of new yams, filled with masquerades, music, and feasts.",
  },
  {
    name: "Ofala Festival",
    location: "Onitsha, Anambra",
    image: "/images/festivals/ofala.png",
    description:
      "A royal festival where the Obi of Onitsha appears in full regalia to greet his people amid dance and gun salutes.",
  },
];

export default function FestivalsSection() {
  return (
    <section>
      <header className="mb-6 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-2">
            Nigerian Festivals
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            The calendar, in color.
          </h2>
        </div>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {FESTIVALS.map((festival) => (
          <article
            key={festival.name}
            className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 flex flex-col"
          >
            <div className="relative h-40">
              <Image
                src={festival.image}
                alt={festival.name}
                fill
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute bottom-3 left-4 right-4">
                <p className="text-xs uppercase tracking-[0.22em] text-emerald-200 mb-1">
                  {festival.location}
                </p>
                <h3 className="font-semibold text-lg">{festival.name}</h3>
              </div>
            </div>
            <div className="p-4 flex-1">
              <p className="text-sm text-slate-200/90">
                {festival.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

