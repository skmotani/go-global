import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import FTAHub from './pages/FTAHub'
import FTACountryDetail from './pages/FTACountryDetail'
import FTAIndustryArticle from './pages/FTAIndustryArticle'
import Resources from './pages/Resources'
import Contact from './pages/Contact'
import ServicesPage from './pages/Services'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/fta-hub" element={<FTAHub />} />
          <Route path="/fta-hub/:country" element={<FTACountryDetail />} />
          <Route path="/fta-hub/:country/:industry" element={<FTAIndustryArticle />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
