import { useEffect } from "react";
import About from "./components/heros/about"
import Home from "./components/heros/home"
import Navbar from "./components/ui/Navbar"
import { useLocation } from "react-router-dom";
import Portfolio from "./components/heros/portfolio";
import Services from "./components/heros/services";
import BottomNavigation from "./components/ui/BottomNavigation";



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
        <nav className="h-[20vh] z-50 relative">
          <Navbar />
        </nav>
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

      <BottomNavigation />
    </div>

  )
}

export default App
