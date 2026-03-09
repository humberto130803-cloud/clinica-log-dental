import { motion } from 'framer-motion'
import { FaWhatsapp, FaArrowDown } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[100dvh] flex items-center overflow-hidden isolate"
      style={{ WebkitTransform: 'translateZ(0)' }}
    >
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=1920&q=80"
          alt="Consultorio dental moderno"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/90 via-primary-dark/70 to-accent/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <img src="/logo.jpg" alt={siteConfig.name} className="h-16 md:h-20 rounded-2xl shadow-2xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight tracking-tight"
          >
            Tu sonrisa{' '}
            <span className="font-semibold text-primary-light">merece</span>
            <br />
            el mejor cuidado
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-lg md:text-xl text-white/80 font-light max-w-lg leading-relaxed"
          >
            Atención dental personalizada, sin dolor y a precios accesibles en David, Chiriquí. Bienvenido a la Familia L.O.G. Dental.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-light hover:text-primary-dark text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:shadow-xl hover:shadow-primary/20"
            >
              <FaWhatsapp size={22} />
              Agendar Cita
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white px-8 py-4 rounded-full text-lg font-light transition-all"
            >
              Ver Servicios
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#trust"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 animate-bounce hidden md:block"
      >
        <FaArrowDown size={20} />
      </motion.a>
    </section>
  )
}
