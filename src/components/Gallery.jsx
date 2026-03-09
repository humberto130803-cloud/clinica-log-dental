import { motion } from 'framer-motion'

const photos = [
  { src: '/google_photo_3.jpg', alt: 'Fachada de la clínica', span: 'md:col-span-2' },
  { src: '/google_photo_2.jpg', alt: 'Interior — reloj dental decorativo', span: '' },
  { src: '/google_photo_4.jpg', alt: 'Recepción con logo de la clínica', span: '' },
  { src: '/google_photo_8.jpg', alt: 'Instalaciones de la clínica', span: 'md:col-span-2' },
]

export default function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Galería</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Conoce nuestras <span className="font-semibold text-accent">instalaciones</span>
          </h2>
          <p className="mt-4 text-text-light font-light text-lg">
            Un espacio moderno, limpio y agradable para tu comodidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative rounded-2xl overflow-hidden group ${photo.span}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary-dark/0 group-hover:bg-primary-dark/30 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
