import Image from "next/image";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
export default function Footer() {

  return (

    <footer className="footer">

      {/* LEFT */}

      <div className="footer-left">

        <Image
          src="/images/logo.png"
          alt="Glammore Logo"
          width={180}
          height={180}
          className="footer-logo"
        />

        <p>
          All Rights Reserved, 2026
        </p>

      </div>

      {/* CENTER */}

      <div className="footer-center">

        <a href="/">Home</a>

        <a href="#about">About</a>

        <a href="#blog">Blogs</a>

        <a href="#contact">Contact</a>

      </div>

      

      {/* RIGHT */}

<div className="footer-right">

  <h3>
    Get to know us
  </h3>

   <div className="social-icons">

  <a
    href="https://instagram.com/glammore.unisex.salon"
    target="_blank"
  >
    <FaInstagram />
  </a>

  <a
    href="https://facebook.com"
    target="_blank"
  >
    <FaFacebookF />
  </a>

  <a
    href="https://youtube.com"
    target="_blank"
  >
    <FaYoutube />
  </a>

</div>

</div>

    </footer>
  );
}