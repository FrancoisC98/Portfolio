import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // ✅ message de retour

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

  emailjs.send("service_1def81m","template_mbyzwk8",
        {
        title: "Nouveau message depuis le site",
        name: `${formData.firstName} ${formData.lastName}`,
        time: new Date().toLocaleString(),
        message: formData.message
        },
        "pWCYVm061lMFqox7J" 
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("✅ Message envoyé avec succès !");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
          });
        },
        (error) => {
          console.log(error.text);
          setStatus("❌ Une erreur est survenue, réessaie plus tard.");
        }
      );
  };

  return (
    <section id="contact" className="contact-section">
      <h2>Contactez-moi</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        {/* champs déjà créés */}
        <div className="form-group">
          <label htmlFor="firstName">Prénom *</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName">Nom *</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="company">Société</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn-submit">Envoyer</button>
      </form>

      {status && <p className="status">{status}</p>} {/* ✅ message de confirmation */}
    </section>
  );
}

export default Contact;
