import Reveal from "../../components/Reveal";
import Link from "next/link";

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="relative bg-gradient-to-b from-neutral-50 via-white to-neutral-100 text-neutral-900 py-36 px-8 md:px-20 overflow-hidden"
    >
      <Reveal>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-5xl md:text-6xl tracking-tight mb-8">
            Navigate the Nation
          </h2>

          <p className="text-neutral-600 text-lg md:text-xl leading-relaxed mb-12">
            Nigeria spans thirty-six states and countless identities.
            From savannah to summit, coast to capital,
            each region carries its own rhythm, flavor, and story.
            Explore the full cultural and geographic landscape.
          </p>

          <Link href="/map">
            <button
              className="group relative overflow-hidden bg-emerald-700 px-12 py-4 rounded-full 
                         text-lg font-medium tracking-wide text-white
                         transition-all duration-500
                         hover:shadow-[0_0_40px_rgba(16,185,129,0.45)]
                         active:scale-95"
            >
              <span className="relative z-10">Enter the Map</span>

              <span
                className="absolute inset-0 bg-gradient-to-r 
                           from-transparent via-white/20 to-transparent 
                           translate-x-[-100%] 
                           group-hover:translate-x-[100%] 
                           transition-transform duration-1000"
              />
            </button>
          </Link>
        </div>
      </Reveal>
    </section>
  );
}