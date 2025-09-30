import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState({ name: false, email: false, message: false });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!form[field]) {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Contacto de ${form.name}`);
    const body = encodeURIComponent(
      `Nombre: ${form.name}\nEmail: ${form.email}\n\nMensaje:\n${form.message}`
    );

    window.location.href = `mailto:gcobena.dev@gmail.com?subject=${subject}&body=${body}`;

    setForm({ name: '', email: '', message: '' });
    setIsFocused({ name: false, email: false, message: false });
  };

  return (
    <div className="contact">
      <h2 className="section-title">{t('contact')}</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>{t('contact_title', 'Get In Touch')}</h3>
          <p>{t('contact_description', 'Have a question or want to work together? Feel free to reach out!')}</p>
          <div className="contact-details">
            <div className="contact-item">
              <FaEnvelope />
              <span>gcobena.dev@gmail.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="contact-form">
          <div className={`form-group ${isFocused.name || form.name ? 'focused' : ''}`}>
            <FaUser className="form-icon" />
            <input
              type="text"
              name="name"
              placeholder={t('contact_name', 'Your Name')}
              value={form.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={() => handleBlur('name')}
              required
            />
          </div>

          <div className={`form-group ${isFocused.email || form.email ? 'focused' : ''}`}>
            <FaEnvelope className="form-icon" />
            <input
              type="email"
              name="email"
              placeholder={t('contact_email', 'Your Email')}
              value={form.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={() => handleBlur('email')}
              required
            />
          </div>

          <div className={`form-group ${isFocused.message || form.message ? 'focused' : ''}`}>
            <textarea
              name="message"
              placeholder={t('contact_message', 'Your Message')}
              value={form.message}
              onChange={handleChange}
              onFocus={() => handleFocus('message')}
              onBlur={() => handleBlur('message')}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-btn">
            <FaPaperPlane />
            <span>{t('send')}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
