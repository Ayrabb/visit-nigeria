"use client";

import dynamic from "next/dynamic";

const NigeriaMap = dynamic(() => import("@/components/NigeriaMap"), {
  ssr: false,
  loading: () => <p>Loading map...</p>,
});

export default function NigeriaMapWrapper() {
  return <NigeriaMap />;
}