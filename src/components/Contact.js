import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Codificar los valores del formulario para el mailto:
    const subject = encodeURIComponent(`Contacto de ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );

    // Abrir el cliente de correo con los datos
    window.location.href = `mailto:gcobena.deb@.com?subject=${subject}&body=${body}`;

    // Limpiar formulario después de enviar
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          value={form.name} 
          onChange={handleChange} 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          value={form.email} 
          onChange={handleChange} 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          value={form.message} 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
