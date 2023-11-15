import { useState } from "react";
import "../styles/Contact.css";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

export const Contact = () => {
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMensajeChange = (event) => {
    setMensaje(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    // por ejemplo, puedes enviarlos a una API o procesarlos de alguna manera
    console.log("Correo electrónico:", email);
    console.log("Mensaje:", mensaje);
    // Luego puedes restablecer los valores del formulario
    setEmail("");
    setMensaje("");
  };

  return (
    <div id="contacto" className="contacto-contenedor">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            required
            placeholder="nombre@mail.com"
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={handleMensajeChange}
            required
            placeholder="Tu mensaje..."
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="social-media">
        <a href="https://wa.me/+543544312765" target="blank">
          <FaWhatsapp />
        </a>
        <a href="https://www.instagram.com/jeroo.dup/" target="blank">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};
