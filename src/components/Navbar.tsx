import Image from "next/image";

export default function Navbar() {

  return (

    <nav className="navbar">

      {/* LOGO */}
      <Image
        src="/images/logo.png"
        alt="Glammore Logo"
        width={120}
        height={120}
        className="logo-image"
      />

      {/* NAVIGATION */}
      <ul className="nav-links">

        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <a href="#about">About Us</a>
        </li>

        <li>
          <a href="#services">Services</a>
        </li>

        <li>
          <a href="/blogs">Blogs</a>
        </li>

        <li>
          <a href="#contact">Contact Us</a>
        </li>

        <li>
          <a href="#contact" className="book-btn">
            Book Now
          </a>
        </li>

      </ul>

    </nav>
  );
}