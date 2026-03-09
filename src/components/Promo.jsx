import { motion } from 'framer-motion'
import { FaWhatsapp, FaTag } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Promo() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=1920&q=80"
          alt="Sonrisa dental"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/90 to-primary-dark/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <FaTag className="text-primary-light text-3xl mx-auto mb-4" />
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white">
            Promociones <span className="font-semibold text-primary-light">Especiales</span>
          </h2>
          <p className="mt-4 text-white/70 font-light text-lg">Aprovecha nuestras ofertas y cuida tu sonrisa</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {siteConfig.promos.map((promo, i) => (
            <motion.div
              key={promo.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 text-center hover:bg-white/15 transition-all"
            >
              <p className="text-primary-light font-heading text-4xl md:text-5xl font-bold mb-2">{promo.price}</p>
              <h3 className="font-heading text-2xl font-medium text-white mb-3">{promo.title}</h3>
              <p className="text-white/70 font-light mb-6">{promo.description}</p>
              <a
                href={siteConfig.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-light hover:text-primary-dark text-white px-6 py-3 rounded-full font-medium transition-all"
              >
                <FaWhatsapp size={18} />
                Reservar Ahora
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
