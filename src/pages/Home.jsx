import Hero from "../components/home/Hero";
import HowItWorks from "../components/home/HowItWorks";
import Benefits from "../components/home/Benefits";
import FAQ from "../components/home/FAQ";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Benefits />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;