import dev from "../assets/dev.jpg";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/AcercaDeMi.css";
gsap.registerPlugin(ScrollTrigger);

export const AcercaDeMi = () => {
  const aRef = useRef(null);
  const aRef2 = useRef(null);

  useEffect(() => {
    const conteinerElement = aRef.current;
    const title = aRef2.current;

    const le = gsap.timeline({
      scrollTrigger: {
        trigger: title,
        start: () => "top +=500",
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: conteinerElement,
        start: "top center",
        end: () => "+=500",
      },
    });
    le.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 });
    tl.fromTo(
      conteinerElement.children,
      { opacity: 0, y: 30, x: -30 },
      { opacity: 1, y: 0, x: 0, duration: 1, stagger: 0.5 }
    );
  }, []);

  return (
    <div id="acercaDeMi" className="acerca-de-mi">
      <h2 ref={aRef2}>Acerca de mi </h2>
      <div className="acerca-de-mi--info" ref={aRef}>
        <div>
          <img src={dev} alt="imagen de desrrollador" />
        </div>
        <div className="texto">
          <p className="presentacion">
          ¡Bienvenido a mi portafolio web! Soy Jeronimo Dupleich, un apasionado desarrollador frontend.
          </p>
          <p>
            Mi enfoque se centra en diseñar interfaces
            intuitivas y agradables para los usuarios, 
            sin comprometer la
            funcionalidad y la accesibilidad. Con una atención meticulosa al
            detalle y un enfoque en la calidad del código, me esfuerzo por crear
            soluciones web eficientes y escalables. Estoy constantemente
            actualizado con las últimas tendencias y tecnologías en el campo del
            desarrollo frontend para ofrecer los mejores resultados a mis
            clientes. Si estás buscando un desarrollador frontend comprometido y
            orientado a resultados, ¡estoy aquí para ayudarte a llevar tu
            proyecto al siguiente nivel!
          </p>
        </div>
      </div>
    </div>
  );
};
