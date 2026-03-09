import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronDown } from 'react-icons/fa'
import siteConfig from '../siteConfig'

function FAQItem({ item, isOpen, onClick, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="border-b border-gray-100 last:border-0"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between py-5 text-left group"
      >
        <span className={`font-heading font-medium text-lg pr-4 transition-colors ${isOpen ? 'text-primary' : 'text-text-dark'}`}>
          {item.q}
        </span>
        <FaChevronDown
          className={`text-text-light shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}
          size={14}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-text-light font-light leading-relaxed">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">FAQ</p>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark">
            Preguntas <span className="font-semibold text-accent">frecuentes</span>
          </h2>
        </motion.div>

        <div className="bg-surface rounded-3xl p-6 md:p-8">
          {siteConfig.faq.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
