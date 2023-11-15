import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { VscGithub } from "react-icons/vsc";
gsap.registerPlugin(ScrollTrigger);

import img1 from "../assets/poke.png";
import img2 from "../assets/peliculas.png";
import img3 from "../assets/lista.png";
import img4 from "../assets/calculadora.png";

import "../styles/Proyectos.css";

export const Proyectos = () => {
  const aRef3 = useRef(null);
  useEffect(() => {
    const conteiner = aRef3.current;
    const la = gsap.timeline({
      scrollTrigger: {
        trigger: conteiner,
      },
    });
    la.fromTo(
      conteiner.children,
      { opacity: 0, x: 30 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: {
          from: "start",
          amount: 1,
        },
      }
    );
  }, []);

  const imgs = [
    {
      img: img1,
      titulo: "Pokememory",
      descripcion: "Un juego hecho a base de react y una API gratuita",
    },
    {
      img: img2,
      titulo: "web de peliculas",
      descripcion: "Un juego hecho a base de react y una API gratuita",
    },
    
    {
      img: img3,
      titulo: "Lista de tareas",
      descripcion: "Un juego hecho a base de react y una API gratuita",
    },
    {
      img: img4,
      titulo: "calculadora",
      descripcion: "Una calculadora hecha a base de react",
    },
   
  ];

  return (
    <div id="proyectos" className="p-conteiner">
      <div className="bg-img-conteiner">
        <div className="titulo-proyectos">
          <h2>Proyectos</h2>
          <a
            href="https://github.com/jerodup?tab=repositories"
            className="github"
            target="blank"
          >
            {" "}
            <VscGithub />{" "}
          </a>
        </div>
      </div>

      <div className="proyectos" ref={aRef3}>
        {imgs.map((x) => (
          <div key={x.titulo}>
            <div className="proyecto">
              <img src={x.img} alt={x.titulo} width={100} />
            </div>
            <p>{x.titulo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
