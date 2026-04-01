import Reveal from "../../components/Reveal";
import Link from "next/link";

export default function CultureSection() {
  return (
    <section
      id="culture"
      className="relative py-40 px-8 md:px-20 text-white overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/wazobialnd.png')",
        }}
      />

      {/* Dark Green Film Overlay (ties to hero) */}
      <div className="absolute inset-0 bg-emerald-950/70" />

      {/* Subtle Gradient Fade for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/40 via-transparent to-black/50" />

      {/* Faint Gold Grain Texture (more refined) */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay 
                      bg-[radial-gradient(rgba(212,175,55,0.6)_1px,transparent_1px)]
                      bg-[size:4px_4px]" />

      {/* Gold Corner Glow */}
      <div className="absolute inset-0 
                      bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_45%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        <Reveal>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight tracking-tight mb-8">
            Culture in Motion
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-lg md:text-xl text-emerald-100 leading-relaxed mb-6">
            Nigeria’s story is written in rhythm, language, and ceremony.
            Diverse traditions stand together — powerful, proud, and alive.
          </p>
        </Reveal>

        <Reveal delay={400}>
          <p className="text-lg md:text-xl text-emerald-200 leading-relaxed mb-12">
            Many tribes. One nation.
          </p>
        </Reveal>

        <Reveal delay={600}>
          <Link href="/culture">
          <button
          
            className="inline-flex items-center gap-2 
                       bg-white text-emerald-900
                       px-10 py-4 rounded-full
                       text-sm tracking-wide uppercase
                       transition-all duration-300
                       hover:scale-105 
                       hover:shadow-[0_0_30px_rgba(212,175,55,0.5)]"
          >
            Explore our Culture
          </button>
          </Link>
        </Reveal>

        {/* Elegant Gold Divider */}
        <Reveal delay={800}>
          <div className="mt-16 w-40 h-[1px] mx-auto 
                          bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        </Reveal>

      </div>
    </section>
  );
}
