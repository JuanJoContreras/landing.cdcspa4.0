import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'

const links = [
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Productos', href: '#productos' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2">
          <img
            src="/logo-cdc.jpg"
            alt="CDC SPA – Cierres de Cristal"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`text-sm font-medium transition-colors hover:text-[#E8650A] ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+56966879910"
            className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
              scrolled ? 'text-gray-700 hover:text-[#E8650A]' : 'text-white/90'
            }`}
          >
            <Phone size={14} />
            (+56 9) 6687 9910
          </a>
          <a href="#cotizar"
            className="bg-[#E8650A] hover:bg-[#C4540A] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all hover:shadow-lg active:scale-95"
          >
            Cotizar gratis
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map(l => (
                <a key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-gray-700 font-medium py-1 border-b border-gray-50 last:border-0"
                >
                  {l.label}
                </a>
              ))}
              <a href="#cotizar" onClick={() => setOpen(false)}
                className="bg-[#E8650A] text-white text-center font-semibold px-5 py-3 rounded-full mt-2"
              >
                Cotizar gratis
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
