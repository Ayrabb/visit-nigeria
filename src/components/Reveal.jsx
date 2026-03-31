"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, delay = "" }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Ensure first client render matches server
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [mounted]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        mounted && visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      } ${delay}`}
    >
      {children}
    </div>
  );
}
