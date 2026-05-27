 "use client";

import { useState } from "react";

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [

    {
      question: "Where is Glammore Unisex Salon located?",
      answer:
        "We are situated in the heart of Thiruvalla. You can locate us through the Google Maps section below.",
    },

    {
      question: "What are your opening hours?",
      answer:
        "We are open Monday to Sunday from 10:00 AM to 9:30 PM including Sundays.",
    },

    {
      question: "How can I book an appointment?",
      answer:
        "You can call us directly, DM us on Instagram or walk into the salon directly.",
    },

    {
      question: "What services do you offer?",
      answer:
        "We provide premium grooming, hair styling, facials, bridal makeup, beard grooming, nail care and luxury wellness services.",
    },

    {
      question: "Do you specialize in bridal makeup?",
      answer:
        "Yes. We offer premium bridal and groom packages with personalized consultation.",
    },

  ];

  return (

    <section className="faq-section">

      {/* LEFT */}

      <div className="faq-left">

        <p className="faq-tag">
          FAQ
        </p>

        <h2>
          Frequently Asked
          <span className="gold-text">
            {" "}Questions
          </span>
        </h2>

        <p className="faq-description">

          Everything you need to know
          about our luxury salon services,
          appointments and beauty experiences.

        </p>

      </div>

      {/* RIGHT */}

      <div className="faq-right">

        {faqs.map((faq, index) => (

          <div
            className="faq-card"
            key={index}
          >

            <div
              className="faq-question"
              onClick={() => setOpenIndex(index)}
            >

              <h3>{faq.question}</h3>

              <span>
                {openIndex === index ? "−" : "+"}
              </span>

            </div>

            {openIndex === index && (

              <div className="faq-answer">

                <p>{faq.answer}</p>

              </div>

            )}

          </div>

        ))}

      </div>

    </section>
  );
}