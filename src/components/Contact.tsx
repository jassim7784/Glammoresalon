 'use client';
 import { useState } from "react";
export default function Contact() {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
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

  const text = `Hello Glammore Salon,

Name: ${formData.name}

Email: ${formData.email}

Phone: ${formData.phone}

Message: ${formData.message}`;

  const whatsappURL =
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;

  window.open(whatsappURL, "_blank");
};

  return (

    <section className="contact-section" id="contact">

      <div className="section-title">

        <p>CONTACT US</p>

        <h2>
          Book Your
          <span className="gold-text">
            {" "}Comfort Session
          </span>
        </h2>

      </div>

      <div className="contact-container">

        {/* LEFT SIDE - MAP */}

        <div className="map-container">

           <iframe
            src="https://maps.google.com/maps?q=9.37093545602042, 76.57918359677527z=17&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <div className="map-details">

            <h3>Glammore Premium Unisex Salon</h3>

            <p>
                 Your Destination For Luxury Beauty,
                 Styling & Wellness Experience.
                 </p>

                <p>
                  📍 Glam'more Premium Unisex Salon

                </p>

            </div>
        </div>

        {/* RIGHT SIDE - FORM */}

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
          />

          <input
  type="email"
  name="email"
  placeholder="Your Email"
  value={formData.email}
  onChange={handleChange}
/>

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button
            type="submit"
            className="primary-btn"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}