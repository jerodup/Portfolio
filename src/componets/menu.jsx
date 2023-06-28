import { useState } from 'react';

import '../styles/MenuHamburguesa.css';

const MenuHamburguesa = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };


  return (
    <div className="menu-container">
      <div className={`menu ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <ul className="menu-items">
          <li><a href="#inicio" onClick={handleClose}>Inicio</a></li>
          <li><a href="#acercaDeMi" onClick={handleClose}>Acerca de mi</a></li>
          <li><a href="#tecnologias" onClick={handleClose}>Tecnologias</a></li>
          <li><a href="#proyectos" onClick={handleClose}>Proyectos</a></li>
          <li><a href="#contacto" onClick={handleClose}>Contacto</a></li>
        </ul>
      )}
    </div>
  );
};

export default MenuHamburguesa;