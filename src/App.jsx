// App.jsx - Híbrido com rolagem + suporte a rotas futuras
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import ContactButton from "./components/ContactButton/ContactButton";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";

function App() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    }
  }, []);

  return (
    <>
      <Navbar />
      <SocialSidebar />
      <ContactButton />

      <div className="section">
        <Home />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Contact />
      </div>

      <Footer />
    </>
  );
}

export default App;
