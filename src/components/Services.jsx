import { motion } from 'framer-motion'
import { FaTooth, FaTeethOpen, FaHeartbeat, FaSmile, FaSprayCan, FaStar } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const iconMap = {
  FaTooth, FaTeethOpen, FaHeartbeat, FaSmile, FaSprayCan, FaStar,
}

export default function Services() {
  return (
    <section id="servicios" className="py-20 md:py-28 bg-surface relative overflow-hidden isolate" style={{ WebkitTransform: 'translateZ(0)' }}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Nuestros Servicios</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Soluciones dentales <span className="font-semibold text-accent">completas</span>
          </h2>
          <p className="mt-4 text-text-light font-light text-lg">
            Desde odontología general hasta tratamientos especializados, todo en un solo lugar.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.services.map((service, i) => {
            const Icon = iconMap[service.icon] || FaTooth
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary group-hover:to-accent rounded-2xl flex items-center justify-center mb-6 transition-all duration-300">
                  <Icon className="text-primary group-hover:text-white text-2xl transition-colors duration-300" />
                </div>
                <h3 className="font-heading font-medium text-xl text-text-dark mb-3">{service.title}</h3>
                <p className="text-text-light font-light text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
