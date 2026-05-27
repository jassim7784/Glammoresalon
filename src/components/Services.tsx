 export default function Services() {

  return (

    <section className="services" id="services">

      <div className="section-title">

        <p>OUR SERVICES</p>

        <h2>
          Luxury Beauty &
          <span className="gold-text">
            {" "}Wellness
          </span>
        </h2>

      </div>

      <div className="services-grid">

        <div className="service-card">

          <img
            src="/images/model2.jpeg"
            alt="Makeup"
          />

          <h3>Professional Makeup</h3>

          <p>
            Bridal, celebrity and luxury makeup styling.
          </p>

        </div>

        <div className="service-card">

          <img
            src="/images/nail-polish.jpeg"
            alt="Nail Care"
          />

          <h3>Nail Care</h3>

          <p>
            Premium manicure and nail art experience.
          </p>

        </div>

        <div className="service-card">

          <img
            src="/images/spa-area.jpeg"
            alt="Spa"
          />

          <h3>Spa & Massage</h3>

          <p>
            Relaxing wellness and luxury spa therapy.
          </p>

        </div>

      </div>

    </section>
  );
}