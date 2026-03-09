import { motion } from 'framer-motion'
import { FaStar, FaClock, FaHandHoldingMedical, FaMoneyBillWave } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const items = [
  { icon: FaStar, label: `${siteConfig.rating} Estrellas`, sub: `${siteConfig.reviewCount} reseñas en Google` },
  { icon: FaClock, label: 'Horario Extendido', sub: 'Lunes a viernes hasta 8:30 p.m.' },
  { icon: FaHandHoldingMedical, label: 'Sin Dolor', sub: 'Procedimientos cuidadosos' },
  { icon: FaMoneyBillWave, label: 'Precios Accesibles', sub: 'Calidad a precio justo' },
]

export default function TrustBar() {
  return (
    <section id="trust" className="bg-primary-dark py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex items-center gap-3 justify-center py-3"
            >
              <item.icon className="text-primary-light text-xl md:text-2xl shrink-0" />
              <div>
                <p className="text-white font-heading font-medium text-sm md:text-base">{item.label}</p>
                <p className="text-white/60 text-xs md:text-sm font-light">{item.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
