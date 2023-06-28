import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Tecnologias.css";
gsap.registerPlugin(ScrollTrigger);

export const Tecnologias = () => {
  const aRef1 = useRef(null)

  useEffect(()=>{
    const conteinerEl = aRef1.current;

    const cE = gsap.timeline({
      scrollTrigger:{
        trigger:conteinerEl
      }
    })
    cE.fromTo(conteinerEl.children, {opacity:0, x: -30}, {opacity:1, x: 0, duration: 1, stagger:{
      from:"start", amount: 1.5
    }})
  },[])

  return (
    <div id="tecnologias" className="contenedor-tecnologias">
      <h2>Tecnologias</h2>
      <div className="lista-de-tecnologias" ref={aRef1}>
        <div >
          <p>HTML</p>
        </div>
        <div>
          <p>CSS</p>
        </div>
        <div>
          <p>Javascript</p>
        </div>
        <div>
          <p>React </p>
        </div>
        <div>
          <p>Next.js </p>
        </div>
        <div>
          <p>Node.js </p>
        </div>
        <div>
          <p>Express </p>
        </div>
      </div>
    </div>
  );
};
