import NigeriaMap from "@/components/Map/NigeriaMap";
import "./Destinations.css";

export default function DestinationsPage() {
  return (
    <main className="destinations-page">

      <section className="map-frame">
         <button className="back-button">← Back</button>

        <div className="top-bar">
         
        </div>

        <h1 className="page-title">Explore Nigeria</h1>

        <p className="map-instruction">
          Click on any state to discover destinations
        </p>

        <NigeriaMap />

      </section>

    </main>
  );
}
