import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import siteConfig from '../siteConfig'

export default function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 md:w-16 md:h-16 bg-[#25D366] hover:bg-[#20BD5A] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all group"
      aria-label="Chatea por WhatsApp"
    >
      <FaWhatsapp className="text-white text-2xl md:text-3xl" />
      <span className="absolute right-full mr-3 bg-white text-text-dark px-4 py-2 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        ¡Escríbenos!
      </span>
    </motion.a>
  )
}
