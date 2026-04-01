"use client";

import { useState } from "react";
import Image from "next/image";

const FESTIVALS = [
  {
    name: "Calabar Carnival",
    location: "Calabar, Cross River",
    image: "/images/festivals/calabar-carnival.png",
    videoId: "Og2dzyxBQ3g",
    description:
      "Africa’s biggest street party: month-long parades, costume bands, music stages, and cultural showcases.",
  },
  {
    name: "Argungu Fishing Festival",
    location: "Argungu, Kebbi",
    image: "/images/festivals/argungu.png",
    videoId: "dZGchEkS6lQ",
    description:
      "Thousands of fishermen dive into the river with bare hands and traditional nets in a dramatic, timed contest.",
  },
  {
    name: "Durbar Festival",
    location: "Kano, Kaduna & Northern Emirates",
    image: "/images/dances/durbar.png",
    videoId: "KqOpmd-EDb0",
    description:
      "Emirs, nobles, and horsemen ride through city streets in richly embroidered regalia to mark Eid celebrations.",
  },
  {
    name: "Osun-Osogbo Festival",
    location: "Osogbo, Osun",
    image: "/images/festivals/osun-osogbo.png",
    videoId: "fW0jOcSDwwo",
    description:
      "Pilgrims, priests, and visitors journey to the sacred grove to honor the river goddess Osun.",
  },
  {
    name: "New Yam Festival (Iri Ji)",
    location: "Communities across the South East",
    image: "/images/festivals/new-yam.png",
    videoId: "ygnPcNR9pF0",
    description:
      "A thanksgiving celebration marking the harvest of new yams, filled with masquerades, music, and feasts.",
  },
  {
    name: "Ofala Festival",
    location: "Onitsha, Anambra",
    image: "/images/festivals/ofala.png",
    videoId: "BT4TsgbKmJ4",
    description:
      "A royal festival where the Obi of Onitsha appears in full regalia to greet his people amid dance and gun salutes.",
  },
];

export default function FestivalsSection() {
  const [activeVideo, setActiveVideo] = useState(null);

  return (
    <section>
      <header className="mb-8 flex items-baseline justify-between gap-4">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-2">
            Nigerian Festivals
          </p>
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
            The calendar, in color.
          </h2>
        </div>
      </header>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {FESTIVALS.map((festival) => {
          const isActive = activeVideo === festival.name;

          return (
            <article
              key={festival.name}
              onMouseEnter={() => setActiveVideo(festival.name)}
              onMouseLeave={() => setActiveVideo(null)}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-black/30 hover:-translate-y-1"
            >
              {/* MEDIA (16:9 PERFECT) */}
              <div className="relative aspect-video overflow-hidden">
                {/* IMAGE */}
                <Image
                  src={festival.image}
                  alt={festival.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* VIDEO (LOADS ONLY ON HOVER) */}
                {isActive && (
                  <iframe
                    src={`https://www.youtube.com/embed/${festival.videoId}?autoplay=1&mute=1&controls=0&loop=1&playlist=${festival.videoId}`}
                    title={festival.name}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay"
                  />
                )}

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* TEXT OVER IMAGE */}
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-emerald-200 mb-1">
                    {festival.location}
                  </p>
                  <h3 className="font-semibold text-lg md:text-xl leading-tight">
                    {festival.name}
                  </h3>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <p className="text-sm text-slate-200/90 leading-relaxed">
                  {festival.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}