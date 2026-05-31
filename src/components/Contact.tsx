'use client';
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendToWhatsApp = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const phoneNumber = "919645915329";

    const text = `Hello Glam'more Salon,

My name is ${formData.name}.

${formData.message}`;

    const whatsappURL =
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* LEFT SIDE - FIND US */}
        <div className="map-column" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: "#d4af37", fontSize: "22px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "25px", fontFamily: "Playfair Display, serif" }}>
            Find Us
          </h2>
          <div className="map-container" style={{ flex: 1 }}>
            <iframe
              src="https://maps.google.com/maps?q=9.370987,76.579257&z=17&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-details">
              <h3>Glam'more Unisex Salon</h3>
              <p>
                First Floor, Professional Building, SH 1, Kollam - Theni Hwy, Thukalassery, Thiruvalla, Kerala 689115, India
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - CONTACT US */}
        <div className="form-column" style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <h2 style={{ color: "#d4af37", fontSize: "22px", fontWeight: "700", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "25px", fontFamily: "Playfair Display, serif" }}>
            Contact Us
          </h2>
          <form
            className="contact-form"
            onSubmit={sendToWhatsApp}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              type="submit"
              className="primary-btn"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}