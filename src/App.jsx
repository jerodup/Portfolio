import MenuHamburguesa from "./componets/menu";
import Home from "./componets/Home";
import { Tecnologias } from "./componets/Tecnologias";
import {Proyectos} from './componets/Proyectos'
import { AcercaDeMi } from "./componets/AcercaDeMi.jsx";
import {Contact} from './componets/Contact'
import "./styles/App.css";

function App() {
  return (
    
    <>
      <div className="conteiner">
      <MenuHamburguesa />
      <Home />
      <AcercaDeMi />
      <Proyectos />
      <Tecnologias />
      <Contact />
    </div>
    </>
  );
}

export default App;
