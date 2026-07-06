import Navbar from "../../components/layout/Navbar";
import Hero from "./Hero";
import Stats from "./Stats";
import Features from "./Features";
import Analytics from "./Analytics";
import About from "./About";
import Contact from "./Contact";
import Footer from "../../components/layout/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Stats />

      <Features />

      <Analytics />

      <About />

      <Contact />

      <Footer />

    </>
  );
}

export default Home;