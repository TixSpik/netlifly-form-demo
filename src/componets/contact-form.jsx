
import { useState } from 'react'
import '../assets/styles/form-style.css';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData,
        }).toString(),
      });
      setFormData({ name: '', email: '', message: '' }); // Clear form
      setSubmitted(true); 
    } catch (error) {
      console.error('Form submission error:', error);
    }
  };

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
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <label>Nombre</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />

          <label>Correo electrónico</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

          <label>Mensaje</label>
          <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required></textarea>

          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
