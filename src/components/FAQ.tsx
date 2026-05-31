"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/client";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);

  const fallbackFaqs = [
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

  useEffect(() => {
    async function fetchFaqs() {
      try {
        const query = `*[_type == "faq"] | order(order asc)`;
        const data = await client.fetch(query);
        if (data && data.length > 0) {
          setFaqs(data);
        }
      } catch (err) {
        console.error("Failed to fetch FAQs from Sanity, using fallback:", err);
      }
    }
    fetchFaqs();
  }, []);

  const displayFaqs = faqs.length > 0 ? faqs : fallbackFaqs;

  return (
    <section className="faq-section">
      {/* CENTERED HEADER */}
      <div className="section-title" style={{ marginBottom: "40px", width: "100%", textAlign: "center" }}>
        <p>FAQ</p>
      </div>

      {/* CENTERED FAQ ACCORDIONS */}
      <div className="faq-right">
        <Accordion defaultValue={["faq-0"]} className="faq-accordion-group">
          {displayFaqs.map((faq, index) => {
            const itemValue = `faq-${index}`;
            return (
              <AccordionItem key={index} value={itemValue} className="faq-card">
                <AccordionTrigger className="faq-question">
                  <h3>{faq.question}</h3>
                </AccordionTrigger>
                <AccordionContent className="faq-answer">
                  <div className="faq-answer-inner">
                    <p>{faq.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}