import { motion } from 'framer-motion'

export default function BeforeAfter() {
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
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Casos Clínicos</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Resultados que <span className="font-semibold text-accent">transforman</span>
          </h2>
          <p className="mt-4 text-text-light font-light text-lg">
            Devolvemos funcionalidad y estética con prótesis flexibles de alta calidad.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="/post_11.jpg"
                alt="Caso clínico — Antes del tratamiento"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary-dark/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Antes
              </div>
            </div>
            <div className="relative rounded-3xl overflow-hidden shadow-xl group">
              <img
                src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?w=800&q=80"
                alt="Sonrisa restaurada"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-primary/80 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium">
                Resultado
              </div>
            </div>
          </div>
          <p className="text-center mt-6 text-text-light font-light text-sm">
            Caso clínico: Prótesis flexible — Restauración completa de funcionalidad y estética dental.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
