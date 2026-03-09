import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Footer() {
  return (
    <footer className="bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.jpg" alt={siteConfig.name} className="h-10 rounded-lg" />
              <span className="font-heading font-semibold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-white/60 font-light text-sm leading-relaxed">
              Tu clínica dental de confianza en David, Chiriquí. Atención personalizada, sin dolor y a precios accesibles.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaInstagram size={16} />
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaFacebookF size={16} />
              </a>
              <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center transition-colors">
                <FaWhatsapp size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Enlaces</h3>
            <ul className="space-y-2.5">
              {[
                { label: 'Inicio', href: '#inicio' },
                { label: 'Servicios', href: '#servicios' },
                { label: 'Nosotros', href: '#nosotros' },
                { label: 'Reseñas', href: '#resenas' },
                { label: 'Preguntas Frecuentes', href: '#faq' },
                { label: 'Ubicación', href: '#ubicacion' },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/60 hover:text-primary-light transition-colors text-sm font-light">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-medium text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary-light mt-1 shrink-0" size={14} />
                <p className="text-white/60 text-sm font-light">{siteConfig.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-primary-light shrink-0" size={14} />
                <p className="text-white/60 text-sm font-light">{siteConfig.phone} / {siteConfig.phone2}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaWhatsapp className="text-primary-light shrink-0" size={14} />
                <a href={siteConfig.whatsapp} target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-primary-light text-sm font-light transition-colors">
                  Chatea por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm font-light">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Todos los derechos reservados.
          </p>
          <p className="text-white/40 text-sm font-light">
            Desarrollado por{' '}
            <a href="https://axiomsais.org" target="_blank" rel="noopener noreferrer" className="text-primary-light hover:text-white transition-colors">
              Axiom Software &amp; AI Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
