import { useEffect } from "react";
import About from "../components/heros/about"
import Home from "../components/heros/home"
import { useLocation } from "react-router-dom";
import Portfolio from "../components/heros/portfolio";
import Services from "../components/heros/services";

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <div className="bg-[#0A0019] min-h-screen relative">
      
      <section id="home">

        <div className="z-0 relative">
          <Home />
        </div>
      </section>
      <section id="about" className="z-0 relative">
        <About />
      </section>
      <section id="portfolio" className="z-0 relative">
        <Portfolio />
      </section>
      <section id="services" className="z-0 relative">
        <Services />
      </section>

    </div>

  )
}

export default App
