import { gsap } from "gsap";
import { useEffect } from "react";
import "../styles/home.css";

export default function Home() {
  useEffect(() => {
    const timeLine = gsap.timeline()
    const animation = document.querySelectorAll(".animation")
    timeLine.to(animation, { opacity: 1, y: -20, duration: 1.5, stagger: .5 });
    
  }, []);

  return (
    <div id="inicio" className="titulo-contenedor">
      <h1 className="animation">UI/UX y
      <span><br/> web developer</span></h1>
    </div>
  );
}
