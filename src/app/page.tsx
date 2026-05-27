import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Blogs from "@/components/Blogs";

export default function Home() {

  return (

    <main>

      <Navbar />

      <Hero />
    
      <About />

      <Services />

      <Blogs />

      <FAQ />
    
      <Contact />

      <Footer />

    </main>
  );
}