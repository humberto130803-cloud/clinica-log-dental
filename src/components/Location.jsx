import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhoneAlt, FaClock, FaInstagram, FaFacebookF } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Location() {
  return (
    <section id="ubicacion" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Ubicación</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Encuéntranos en <span className="font-semibold text-accent">David, Chiriquí</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <FaMapMarkerAlt className="text-primary text-lg" />
              </div>
              <div>
                <h3 className="font-heading font-medium text-text-dark mb-1">Dirección</h3>
                <p className="text-text-light font-light">{siteConfig.address}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <FaPhoneAlt className="text-primary text-lg" />
              </div>
              <div>
                <h3 className="font-heading font-medium text-text-dark mb-1">Teléfonos</h3>
                <p className="text-text-light font-light">
                  <a href={`tel:+507${siteConfig.phone.replace('-', '')}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a>
                  {' / '}
                  <a href={`tel:+507${siteConfig.phone2.replace('-', '')}`} className="hover:text-primary transition-colors">{siteConfig.phone2}</a>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center shrink-0">
                <FaClock className="text-primary text-lg" />
              </div>
              <div>
                <h3 className="font-heading font-medium text-text-dark mb-2">Horario</h3>
                <div className="space-y-1.5">
                  {siteConfig.hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm max-w-xs">
                      <span className="text-text-dark font-medium">{h.day}</span>
                      <span className={`font-light ${h.time === 'Cerrado' ? 'text-red-400' : 'text-text-light'}`}>{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-[#1877F2] rounded-xl flex items-center justify-center text-white hover:shadow-lg transition-shadow"
              >
                <FaFacebookF size={18} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-xl h-80 lg:h-full min-h-[350px]"
          >
            <iframe
              title="Ubicación de Clínica L.O.G. Dental"
              src={`https://www.google.com/maps?q=${siteConfig.mapQuery}&output=embed`}
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
