import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhoneAlt } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function CTA() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=1920&q=80"
          alt="Herramientas dentales"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/95 to-accent/80" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
            ¿Listo para transformar{' '}
            <span className="font-semibold text-primary-light">tu sonrisa?</span>
          </h2>
          <p className="mt-6 text-white/70 text-lg font-light max-w-xl mx-auto">
            Agenda tu cita hoy y únete a la Familia L.O.G. Dental.
            Atención personalizada, sin dolor y a precios accesibles.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl"
            >
              <FaWhatsapp size={22} />
              WhatsApp: {siteConfig.phone}
            </a>
            <a
              href={`tel:+507${siteConfig.phone2.replace('-', '')}`}
              className="inline-flex items-center justify-center gap-3 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-light transition-all"
            >
              <FaPhoneAlt size={18} />
              Llamar: {siteConfig.phone2}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
