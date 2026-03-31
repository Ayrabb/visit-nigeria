"use client";

import { useState } from "react";
import NgMap from "@/assets/maps/ng.svg";
import styles from "./page.module.css";
import { STATES } from "@/app/data/nigeriaStates";

export default function MapPage() {
  const [activeState, setActiveState] = useState(null);

  const [tooltip, setTooltip] = useState({
    visible: false,
    name: "",
    x: 0,
    y: 0,
  });

  const getStateKeyFromPath = (path) => {
    if (!path) return null;

    const rawName = path.getAttribute?.("name");
    if (rawName) {
      const normalized = rawName.toLowerCase().replace(/[^a-z]/g, "");
      if (normalized === "federalcapitalterritory") return "fct";
      return normalized; // "akwaibom", "crossriver", etc.
    }

    // Fallback to SVG ID codes like "NGAD"
    const rawId = path.id || "";
    const code = rawId.toLowerCase().replace(/^ng/, "");
    if (!code) return null;

    const codeMap = {
      ab: "abia",
      ad: "adamawa",
      ak: "akwaibom",
      an: "anambra",
      ba: "bauchi",
      be: "benue",
      bo: "borno",
      by: "bayelsa",
      cr: "crossriver",
      de: "delta",
      eb: "ebonyi",
      ed: "edo",
      ek: "ekiti",
      en: "enugu",
      fc: "fct",
      go: "gombe",
      im: "imo",
      ji: "jigawa",
      kd: "kaduna",
      ke: "kebbi",
      kn: "kano",
      ko: "kogi",
      kt: "katsina",
      kw: "kwara",
      la: "lagos",
      na: "nasarawa",
      ni: "niger",
      og: "ogun",
      on: "ondo",
      os: "osun",
      oy: "oyo",
      pl: "plateau",
      ri: "rivers",
      so: "sokoto",
      ta: "taraba",
      yo: "yobe",
      za: "zamfara",
    };

    return codeMap[code] || null;
  };

  const getStateFromEvent = (e) => {
    const target = e?.target;
    const path =
      target?.closest?.("path") ||
      (target?.tagName === "path" ? target : null);
    if (!path) return null;

    const key = getStateKeyFromPath(path);
    if (!key) return null;

    const data = STATES[key];
    if (!data) return null;

    return { key, path, data };
  };

  const handlePointerMove = (e) => {
    const state = getStateFromEvent(e);
    if (!state) {
      setTooltip((prev) => (prev.visible ? { ...prev, visible: false } : prev));
      return;
    }

    setTooltip({
      visible: true,
      name: state.data.name,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handlePointerLeave = () => {
    setTooltip({
      visible: false,
      name: "",
      x: 0,
      y: 0,
    });
  };

  const handlePointerDown = (e) => {
    const state = getStateFromEvent(e);
    if (!state) return;

    // ensure only one highlighted path at a time
    const svgRoot = state.path.ownerSVGElement;
    if (svgRoot) {
      svgRoot.querySelectorAll("path").forEach((p) => {
        p.classList.remove(styles.activePath);
      });
    }
    state.path.classList.add(styles.activePath);

    setActiveState({ id: state.key, ...state.data });
  };

  const closeDrawer = () => {
    // remove highlighted state when closing
    const svgEl = document.querySelector(`.${styles.nigeriaMap}`);
    if (svgEl) {
      svgEl.querySelectorAll("path").forEach((p) => {
        p.classList.remove(styles.activePath);
      });
    }
    setActiveState(null);
  };

  return (
    <section className={styles.mapWrapper}>
      <div className={styles.mapContent}>
        <h1 className={styles.mapTitle}>
          Explore Nigeria by Region
        </h1>

        <p className={styles.mapSubtitle}>
          Click any state to discover destinations, culture,
          cuisine and festivals
        </p>

        <div className={styles.mapContainer}>
          <NgMap
            className={styles.nigeriaMap}
            onPointerMove={handlePointerMove}
            onPointerLeave={handlePointerLeave}
            onPointerDown={handlePointerDown}
            style={{ touchAction: "none" }}
          />

          {tooltip.visible && (
            <div
              className={styles.tooltip}
              style={{
                top: tooltip.y + 12,
                left: tooltip.x + 12,
                position: "fixed", // 🔥 IMPORTANT FIX
                pointerEvents: "none",
                zIndex: 1000,
              }}
            >
              {tooltip.name}
            </div>
          )}
        </div>
      </div>

      <div
        className={`${styles.overlay} ${
          activeState ? styles.overlayVisible : ""
        }`}
        onClick={closeDrawer}
      />

      <aside
        className={`${styles.drawer} ${
          activeState ? styles.drawerOpen : ""
        }`}
      >
        {activeState && (
          <div>
            <button
              className={styles.closeBtn}
              onClick={closeDrawer}
            >
              ×
            </button>

            <h2 className={styles.drawerTitle}>{activeState.name}</h2>

            <div className={styles.drawerSection}>
              <h3>Overview</h3>
              <p>
                <strong>Capital:</strong> {activeState.capital} •{" "}
                <strong>Region:</strong> {activeState.region}
              </p>
              {activeState.size && (
                <p>
                  <strong>Size:</strong> {activeState.size}
                </p>
              )}
            </div>

            {activeState.tribes && (
              <div className={styles.drawerSection}>
                <h3>Key Tribes</h3>
                <p>{activeState.tribes.join(", ")}</p>
              </div>
            )}

            {activeState.foods && (
              <div className={styles.drawerSection}>
                <h3>Signature Foods</h3>
                <p>{activeState.foods.join(" • ")}</p>
              </div>
            )}

            {activeState.attractions && (
              <div className={styles.drawerSection}>
                <h3>Major Tourist Attractions</h3>
                <ul>
                  {activeState.attractions.map((spot) => (
                    <li key={spot}>{spot}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeState.description && (
              <div className={styles.drawerSection}>
                <h3>Why visit</h3>
                <p>{activeState.description}</p>
              </div>
            )}
          </div>
        )}
      </aside>
    </section>
  );
}