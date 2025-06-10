// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import SocialSidebar from './components/SocialSidebar/SocialSidebar'
import Footer from './components/Footer/Footer.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Contact from './pages/Contact/Contact'

function App() {
  return (
    <>
      <Navbar />
      <SocialSidebar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/projetos" element={<Projects />} />
        <Route path="/contato" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
