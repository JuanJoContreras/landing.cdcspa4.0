import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Products from './components/Products'
import WhyUs from './components/WhyUs'
import FormSection from './components/FormSection'
import Testimonials from './components/Testimonials'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-body antialiased">
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <WhyUs />
      <FormSection />
      <Testimonials />
      <Gallery />
      <FAQ />
      <Footer />
    </div>
  )
}
