import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-gradient-to-b from-slate-950 via-slate-950 to-black text-slate-300">
      <div className="max-w-6xl mx-auto px-6 md:px-8 py-10 md:py-14 grid gap-10 md:grid-cols-[1.6fr_1fr_1fr]">
        <div>
          <p className="text-xs tracking-[0.35em] uppercase text-emerald-300/90 mb-3">
            Explore Nigeria
          </p>
          <h3 className="font-serif text-2xl text-white mb-3">
            Travel deeper into Nigeria.
          </h3>
          <p className="text-sm text-slate-400 max-w-md">
            A curated gateway into Nigeria’s cities, coasts, and cultural
            heartlands—designed for travelers who want stories, not just
            stopovers.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-sm text-white mb-3">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-emerald-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/map" className="hover:text-emerald-300">
                Explore Map
              </Link>
            </li>
            <li>
              <Link href="/culture" className="hover:text-emerald-300">
                Cultures
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-emerald-300">
                Gallery
              </Link>
            </li>
          </ul>
        </div>

        <div id="contact">
          <h4 className="font-semibold text-sm text-white mb-3">
            Contact & Social
          </h4>
          <p className="text-sm mb-3">
            Email:{" "}
            <a
              href="mailto:iamibrahimhamid@gmail.com"
              className="hover:text-emerald-300"
            >
              iamibrahimhamid@gmail.com
            </a>
          </p>
          <div className="flex gap-3 text-sm mb-4">
            <a
              href="https://instagram.com/stillayrab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-emerald-300"
            >
              Instagram
            </a>
            <a href="#" className="hover:text-emerald-300">
              X
            </a>
            <a href="#" className="hover:text-emerald-300">
              YouTube
            </a>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Explore Nigeria. Crafted for modern
            explorers.
          </p>
        </div>
      </div>
    </footer>
  );
}

