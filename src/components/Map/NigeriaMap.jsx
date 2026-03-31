"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import NgMap from "@/assets/maps/ng.svg";
import "./NigeriaMap.css";

export default function NigeriaMap() {
  const router = useRouter();
  const [activeState, setActiveState] = useState(null);

  const handleClick = (e) => {
    if (e.target.tagName !== "path") return;

    const stateId = e.target.id;
    const stateName = e.target.getAttribute("name");

    setActiveState(stateId);

    console.log("State:", stateId, stateName);
  };

  return (
    <section className="map-wrapper">
      <div className="map-content">
        <h1 className="map-title">Explore Nigeria by Region</h1>
        <p className="map-subtitle">
          Click any state to discover its destinations, culture,
          cuisine, festivals, and regional identity.
        </p>

        <NgMap className="nigeria-map" onClick={handleClick} />
      </div>
    </section>
  );
}