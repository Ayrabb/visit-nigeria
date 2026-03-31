import Image from "next/image";

const IMAGES = [
  {
    category: "Landscape",
    src: "/images/gallery/obudu.jpg",
    alt: "Misty highlands of Obudu Mountain Resort",
  },
  {
    category: "Culture",
    src: "/images/gallery/durbar-riders.jpg",
    alt: "Horsemen at Durbar festival in colourful regalia",
  },
  {
    category: "Food",
    src: "/images/gallery/spread.jpg",
    alt: "Assorted Nigerian dishes on a shared table",
  },
  {
    category: "Festivals",
    src: "/images/gallery/street-parade.jpg",
    alt: "Dancers in a Nigerian street parade",
  },
  {
    category: "Coastline",
    src: "/images/gallery/ibenobeach.jpg",
    alt: "Long stretch of sand at a Nigerian beach",
  },
  {
    category: "City",
    src: "/images/gallery/night-lagos.jpg",
    alt: "Lagos skyline at night with lights",
  },
];

export const metadata = {
  title: "Gallery | Explore Nigeria",
  description: "A visual journey through Nigeria’s landscapes, culture, food, and festivals.",
};

export default function GalleryPage() {
  return (
    <main className="pt-32 pb-24 bg-[#020617] text-slate-100">
      <section className="max-w-6xl mx-auto px-6 md:px-8">
        <header className="mb-10">
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/80 mb-4">
            Visual Journal
          </p>
          <h1 className="font-serif text-4xl md:text-5xl tracking-tight mb-4">
            Nigeria, frame by frame.
          </h1>
          <p className="text-slate-300 max-w-2xl">
            A curated grid of landscapes, everyday scenes, and festival energy
            to help you imagine your journey before you arrive.
          </p>
        </header>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {IMAGES.map((item) => (
            <figure
              key={item.alt}
              className="relative overflow-hidden rounded-3xl bg-slate-900/40 border border-white/10 break-inside-avoid group"
            >
              <div className="relative w-full h-64">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                  <span className="px-3 py-1 rounded-full bg-black/50 border border-white/20 uppercase tracking-[0.22em]">
                    {item.category}
                  </span>
                  <span className="text-slate-200/90 line-clamp-1">{item.alt}</span>
                </div>
              </div>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}

