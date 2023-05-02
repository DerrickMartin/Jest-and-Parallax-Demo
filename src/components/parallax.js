import React, { useEffect, useRef } from "react";
import image1 from "../assets/gorilla.jpg";
import image2 from "../assets/gorilla.jpg";
import "../App.css";

function Parallax() {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const parallax = parallaxRef.current;
      const scrollPosition = window.scrollY;
      const parallaxPosition = scrollPosition * 0.5;
      parallax.style.transform = `translateY(${parallaxPosition}px)`;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="parallax-container" ref={parallaxRef}>
      <img src={image1} alt="image1" className="parallax-image" />
      <img src={image2} alt="image2" className="parallax-image" />
    </div>
  );
}

export default Parallax;