import Image from "next/image";
import citygate from "@/assets/images/citygate.png";
import "./HomePage.css";
import Navbar from "./NavBar";

export default function HomePage() {
  return (
    <div className="page">
      <Navbar />

      <div className="scene-wrapper">
        <div className="frame">
    
          <div className="visit-nigeria">
  <span className="visit">Visit</span>
  <span className="nigeria">Nigeria</span>
</div>


          <Image
            src={citygate}
            alt="Nigeria landmark"
            priority
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
}
