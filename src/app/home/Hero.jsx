"use client";

export default function Hero() {
  const handleScroll = () => {
    document.getElementById("destinations")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-screen flex items-center text-white overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-slowZoom"
        style={{
          backgroundImage: "url('/images/aerialcitygate.png')",
        }}
      />

      {/* Directional Cinematic Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.65)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-8 md:px-20">
        <h1 className="font-serif text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6 animate-fadeUp">
          Discover Nigeria
        </h1>

        <p className="text-lg md:text-xl max-w-xl text-gray-200 leading-relaxed mb-10 animate-fadeUp delay-200">
          Where heritage meets modern ambition. Landscapes, culture, and
          experiences designed to move you.
        </p>

        <button
          onClick={handleScroll}
          className="group relative overflow-hidden bg-emerald-600 px-10 py-4 rounded-full 
                     text-lg font-medium tracking-wide transition-all duration-500
                     hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]
                     active:scale-95 animate-fadeUp delay-300"
        >
          <span className="relative z-10">Explore Destinations</span>

          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                           translate-x-[-100%] group-hover:translate-x-[100%] 
                           transition-transform duration-1000" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-80">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
