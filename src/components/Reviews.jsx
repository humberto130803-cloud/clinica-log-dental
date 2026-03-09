import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaGoogle, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function Reviews() {
  const [current, setCurrent] = useState(0)
  const reviews = siteConfig.reviews

  const next = () => setCurrent((prev) => (prev + 1) % reviews.length)
  const prev = () => setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length)

  return (
    <section id="resenas" className="py-20 md:py-28 bg-surface-alt">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Reseñas</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Lo que dicen <span className="font-semibold text-accent">nuestros pacientes</span>
          </h2>
          <div className="mt-6 inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm">
            <FaGoogle className="text-[#4285F4]" />
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-sm" />
              ))}
            </div>
            <span className="text-text-dark font-heading font-semibold">{siteConfig.rating}</span>
            <span className="text-text-light text-sm">({siteConfig.reviewCount} reseñas)</span>
          </div>
        </motion.div>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <FaQuoteLeft className="text-primary/20 text-2xl mb-4" />
              <p className="text-text-dark font-light leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-heading font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-medium text-text-dark text-sm">{review.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(review.stars)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Second row desktop */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 mt-6 max-w-3xl mx-auto">
          {reviews.slice(3).map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i + 3) * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <FaQuoteLeft className="text-primary/20 text-2xl mb-4" />
              <p className="text-text-dark font-light leading-relaxed mb-6">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-heading font-semibold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-medium text-text-dark text-sm">{review.name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(review.stars)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100"
            >
              <FaQuoteLeft className="text-primary/20 text-2xl mb-4" />
              <p className="text-text-dark font-light leading-relaxed mb-6">"{reviews[current].text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-heading font-semibold text-sm">
                  {reviews[current].name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-medium text-text-dark text-sm">{reviews[current].name}</p>
                  <div className="flex gap-0.5">
                    {[...Array(reviews[current].stars)].map((_, j) => (
                      <FaStar key={j} className="text-yellow-400 text-xs" />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center gap-4 mt-6">
            <button onClick={prev} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-text-dark hover:text-primary transition-colors">
              <FaChevronLeft size={14} />
            </button>
            <div className="flex items-center gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-primary w-6' : 'bg-gray-300'}`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-text-dark hover:text-primary transition-colors">
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
