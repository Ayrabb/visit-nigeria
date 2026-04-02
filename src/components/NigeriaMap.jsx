"use client";

import { useState } from "react";
import NgMapInline from "@/components/NgMapInline";
import "@/app/destinations/Destinations.css";
import { STATES } from "@/app/data/nigeriaStates";

export default function NigeriaMap() {
  const [activeState, setActiveState] = useState(null);
  const [tooltip, setTooltip] = useState({ visible: false, name: "", x: 0, y: 0 });

  const getStateFromEvent = (e) => {
    let target = e.target;
    while (target && target.tagName !== "PATH") {
      target = target.parentElement;
    }
    if (!target || !target.getAttribute("name")) return null;

    const nameAttr = target.getAttribute("name");
    const key = nameAttr.toLowerCase().replace(/\s+/g, "") === "federalcapitalterritory"
      ? "fct"
      : nameAttr.toLowerCase().replace(/\s+/g, "");

    const data = STATES[key];
    if (!data) return null;
    return { key, path: target, data };
  };

  const handlePointerMove = (e) => {
    const state = getStateFromEvent(e);
    if (!state) {
      setTooltip(prev => prev.visible ? { ...prev, visible: false } : prev);
      return;
    }
    setTooltip({ visible: true, name: state.data.name, x: e.clientX, y: e.clientY });
  };

  const handlePointerLeave = () => {
    setTooltip({ visible: false, name: "", x: 0, y: 0 });
  };

  const handlePointerDown = (e) => {
    const state = getStateFromEvent(e);
    if (!state) return;
    const svgRoot = state.path.ownerSVGElement;
    if (svgRoot) {
      svgRoot.querySelectorAll("path").forEach(p => p.classList.remove("active-path"));
    }
    state.path.classList.add("active-path");
    setActiveState({ id: state.key, ...state.data });
  };

  const closeDrawer = () => {
    document.querySelectorAll("path.active-path").forEach(p => p.classList.remove("active-path"));
    setActiveState(null);
  };

  return (
    <section className="destinations-page">
      <div className="map-frame">
        <div className="top-bar">
          <button className="back-button" onClick={() => window.history.back()}>← Back</button>
        </div>
        <h1 className="page-title">Explore Nigeria by State</h1>
        <p className="map-instruction">CLICK ANY STATE TO DISCOVER MORE</p>

        <NgMapInline
          className="nigeria-map"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
          onPointerDown={handlePointerDown}
          style={{ touchAction: "none", cursor: "pointer" }}
        />

        {tooltip.visible && (
          <div style={{
            position: "fixed", top: tooltip.y + 12, left: tooltip.x + 12,
            background: "#0b3d2e", color: "#fff", padding: "6px 12px",
            borderRadius: "6px", fontSize: "13px", pointerEvents: "none", zIndex: 1000,
          }}>
            {tooltip.name}
          </div>
        )}
      </div>

      <div onClick={closeDrawer} style={{
        display: activeState ? "block" : "none", position: "fixed",
        inset: 0, background: "rgba(0,0,0,0.4)", zIndex: 200,
      }} />

      <aside style={{
        position: "fixed", top: 0, right: activeState ? 0 : "-420px",
        width: "400px", height: "100vh", background: "#fff",
        boxShadow: "-4px 0 20px rgba(0,0,0,0.15)", zIndex: 300,
        transition: "right 0.3s ease", overflowY: "auto",
        padding: "32px 28px", boxSizing: "border-box",
      }}>
        {activeState && (
          <>
            <button onClick={closeDrawer} style={{
              position: "absolute", top: 16, right: 20, background: "none",
              border: "none", fontSize: "24px", cursor: "pointer", color: "#0b3d2e",
            }}>×</button>
            <h2 style={{ color: "#0b3d2e", marginBottom: 4 }}>{activeState.name}</h2>
            <div style={{ marginBottom: 20 }}>
              <p style={{ margin: "4px 0", fontSize: 14 }}>
                <strong>Capital:</strong> {activeState.capital} &nbsp;•&nbsp;
                <strong>Region:</strong> {activeState.region}
              </p>
            </div>
            {activeState.tribes && (
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ color: "#0b3d2e", marginBottom: 6 }}>Key Tribes</h3>
                <p style={{ fontSize: 14 }}>{activeState.tribes.join(", ")}</p>
              </div>
            )}
            {activeState.foods && (
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ color: "#0b3d2e", marginBottom: 6 }}>Signature Foods</h3>
                <p style={{ fontSize: 14 }}>{activeState.foods.join(" • ")}</p>
              </div>
            )}
            {activeState.attractions && (
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ color: "#0b3d2e", marginBottom: 6 }}>Major Attractions</h3>
                <ul style={{ fontSize: 14, paddingLeft: 18 }}>
                  {activeState.attractions.map(spot => <li key={spot} style={{ marginBottom: 4 }}>{spot}</li>)}
                </ul>
              </div>
            )}
            {activeState.description && (
              <div style={{ marginBottom: 20 }}>
                <h3 style={{ color: "#0b3d2e", marginBottom: 6 }}>Why Visit</h3>
                <p style={{ fontSize: 14, lineHeight: 1.6 }}>{activeState.description}</p>
              </div>
            )}
          </>
        )}
      </aside>
    </section>
  );
}
