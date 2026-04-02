"use client";

import dynamic from "next/dynamic";

const NigeriaMap = dynamic(() => import("@/components/NigeriaMap"), {
  ssr: false,
  loading: () => (
    <div style={{ minHeight: "100vh", background: "#0b3d2e", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <p style={{ color: "#9fd8b7" }}>Loading map...</p>
    </div>
  ),
});

export default function NigeriaMapWrapper() {
  return <NigeriaMap />;
}
