/* Premium glassmorphism navbar with real page routing */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/map", label: "Explore" },
  { href: "/culture", label: "Cultures" },
  { href: "/gallery", label: "Gallery" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const baseGlass =
    "backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_18px_60px_rgba(15,23,42,0.35)]";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div
          className={`${baseGlass} rounded-3xl px-6 md:px-10 py-3 flex items-center justify-between`}
        >
          {/* Brand */}
          <Link
            href="/"
            className="font-serif text-2xl tracking-tight text-white md:text-neutral-900"
          >
            <span className="font-light">Explore</span>{" "}
            <span className="font-semibold">Nigeria</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-xs tracking-[0.18em] uppercase">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href.replace("/#", "/"));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative px-1 py-1 transition-colors duration-300 ${
                    isActive
                      ? "text-emerald-400"
                      : "text-slate-100/80 md:text-slate-700"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] rounded-full transition-all duration-300 ${
                      isActive
                        ? "w-full bg-gradient-to-r from-emerald-400 via-emerald-300 to-amber-300"
                        : "w-0 bg-slate-300"
                    }`}
                  />
                </Link>
              );
            })}

            <Link
              href="/map"
              className="ml-4 px-5 py-2 rounded-full text-[11px] tracking-[0.2em] bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-[0_0_26px_rgba(16,185,129,0.55)] hover:shadow-[0_0_40px_rgba(16,185,129,0.7)] hover:scale-105 transition-all duration-300"
            >
              Start Exploring
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-full bg-white/10 border border-white/30 text-white"
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Toggle navigation</span>
            <span
              className={`block w-4 h-[1.5px] bg-white transition-transform duration-300 ${
                open ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-4 h-[1.5px] bg-white mt-[5px] transition-transform duration-300 ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div className="md:hidden mt-3">
            <div className={`${baseGlass} rounded-3xl px-5 py-4 space-y-2`}>
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href.replace("/#", "/"));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block py-2 text-sm tracking-[0.18em] uppercase ${
                      isActive ? "text-emerald-300" : "text-slate-100/90"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/map"
                className="block w-full text-center mt-2 px-4 py-2 rounded-full text-xs tracking-[0.18em] bg-gradient-to-r from-emerald-600 to-emerald-500 text-white"
              >
                Start Exploring
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
