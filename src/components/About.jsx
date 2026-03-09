import { motion } from 'framer-motion'
import { FaUserMd, FaHeart, FaUsers } from 'react-icons/fa'
import siteConfig from '../siteConfig'

const values = [
  { icon: FaUserMd, title: 'Atención Personalizada', text: 'Cada paciente recibe un plan de tratamiento único, explicado con detalle y total honestidad.' },
  { icon: FaHeart, title: 'Trato Humano', text: 'Nos preocupamos por tu comodidad. Procedimientos cuidadosos y opciones sin dolor.' },
  { icon: FaUsers, title: 'Familia L.O.G.', text: 'Más que una clínica, somos una familia. Te hacemos sentir como en casa.' },
]

export default function About() {
  return (
    <section id="nosotros" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Sobre Nosotros</p>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-text-dark leading-tight">
              Cuidamos tu sonrisa{' '}
              <span className="font-semibold text-accent">con pasión</span>
            </h2>
            <p className="mt-6 text-text-light text-lg font-light leading-relaxed">
              En Clínica L.O.G. Dental, liderada por el Dr. Logui R., creemos que cada sonrisa cuenta.
              Desde David, Chiriquí, brindamos atención dental de calidad con un enfoque cercano y familiar
              que nos ha ganado la confianza de más de 857 pacientes satisfechos.
            </p>
            <p className="mt-4 text-text-light text-lg font-light leading-relaxed">
              Nuestro compromiso es ofrecerte tratamientos sin dolor, con honestidad y a precios justos.
              Porque tu sonrisa merece el mejor cuidado.
            </p>

            <div className="mt-10 space-y-6">
              {values.map((v, i) => (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="flex gap-4"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                    <v.icon className="text-accent text-lg" />
                  </div>
                  <div>
                    <h3 className="font-heading font-medium text-text-dark">{v.title}</h3>
                    <p className="text-text-light text-sm font-light mt-1">{v.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/google_photo_7.jpg"
                alt="Dr. Logui R. — Odontólogo principal"
                className="w-full h-[500px] object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary-dark/80 to-transparent p-6">
                <p className="text-white font-heading font-semibold text-lg">Dr. Logui R.</p>
                <p className="text-white/70 text-sm">Odontólogo Principal</p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-white px-6 py-4 rounded-2xl shadow-xl">
              <p className="font-heading text-3xl font-bold">+857</p>
              <p className="text-sm font-light text-white/80">Pacientes felices</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
