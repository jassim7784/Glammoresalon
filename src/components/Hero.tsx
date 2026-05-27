  export default function Hero() {

  return (

    <section className="hero">

      <div className="hero-content">

        <h1>
          Elevate Your
          <br />
          <span className="gold-text">
            Beauty Experience
          </span>
        </h1>

        <p>
          Discover luxury beauty treatments,
          professional care, and personalized
          styling services designed to make
          you look and feel your absolute best.
        </p>

        <div className="hero-buttons">

          <a href="#services" className="primary-btn">
            Our Services
          </a>

          <a href="#contact" className="secondary-btn">
            Book Appointment
          </a>

        </div>

      </div>

      <div className="hero-image">

        <img
          src="/images/model.jpeg"
          alt="Beauty Model"
        />

      </div>

    </section>
  );
}