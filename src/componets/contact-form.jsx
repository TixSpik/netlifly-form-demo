
import { useState } from 'react'
import '../assets/styles/form-style.css'; 

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="form-wrapper">
      <h1>Contáctame</h1>

      {submitted ? (
        <p className="success-message">Gracias por tu mensaje 🎉</p>
      ) : (
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="contact" />

          <label>Nombre</label>
          <input type="text" id="name" name="name" required />

          <label>Correo electrónico</label>
          <input type="email" id="email" name="email" required />

          <label>Mensaje</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
