import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaPhoneAlt } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Reseñas', href: '#resenas' },
  { label: 'Ubicación', href: '#ubicacion' },
  { label: 'Preguntas', href: '#faq' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo.jpg" alt={siteConfig.name} className="h-10 md:h-12 rounded-lg" />
            <span className={`font-heading font-semibold text-lg hidden sm:block transition-colors ${scrolled ? 'text-primary-dark' : 'text-white'}`}>
              {siteConfig.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors hover:text-primary ${
                  scrolled ? 'text-text-dark' : 'text-white/90'
                }`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all hover:shadow-lg"
            >
              Agendar Cita
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <a href={`tel:+507${siteConfig.phone.replace('-', '')}`} className={`p-2 rounded-full transition-colors ${scrolled ? 'text-primary' : 'text-white'}`}>
              <FaPhoneAlt size={18} />
            </a>
            <button onClick={() => setOpen(!open)} className={`p-2 transition-colors ${scrolled ? 'text-text-dark' : 'text-white'}`}>
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 text-text-dark hover:text-primary hover:bg-primary/5 rounded-xl text-sm font-medium transition-all"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary text-white px-5 py-3 rounded-full text-sm font-medium mt-3"
              >
                Agendar Cita por WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
