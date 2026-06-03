import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Thermometer, Shield, Volume2, Wind, Zap, Wrench } from 'lucide-react'

const benefits = [
  {
    icon: Thermometer,
    title: 'Ahorro energético real',
    desc: 'Reduce hasta 47% en pérdida de energía. Aislación térmica superior con doble vidrio hermético de última generación.',
    color: 'from-orange-500/10 to-orange-600/5',
    iconColor: 'text-[#E8650A]',
  },
  {
    icon: Shield,
    title: 'Seguridad superior',
    desc: 'Perfiles de PVC reforzados con acero galvanizado y vidrio laminado. Resistencia a impactos y protección frente a robos.',
    color: 'from-blue-500/10 to-blue-600/5',
    iconColor: 'text-blue-600',
  },
  {
    icon: Volume2,
    title: 'Aislamiento acústico',
    desc: 'Reduce significativamente el ruido exterior. Duerme tranquilo aunque vivas cerca de una avenida o zona urbana.',
    color: 'from-purple-500/10 to-purple-600/5',
    iconColor: 'text-purple-600',
  },
  {
    icon: Wind,
    title: 'Hermeticidad total',
    desc: 'Sin corrientes de aire ni infiltraciones. Sellos EPDM que garantizan estanqueidad perfecta y hermeticidad única de mercado.',
    color: 'from-cyan-500/10 to-cyan-600/5',
    iconColor: 'text-cyan-600',
  },
  {
    icon: Zap,
    title: 'Instalación rápida y limpia',
    desc: 'Equipo técnico propio especializado. Mayoría de proyectos residenciales listos en 1 día, sin subcontratistas.',
    color: 'from-amber-500/10 to-amber-600/5',
    iconColor: 'text-amber-600',
  },
  {
    icon: Wrench,
    title: 'Sin mantenimiento',
    desc: 'El PVC no requiere pintura, barniz ni tratamientos. Resiste la corrosión, humedad y cambios de temperatura sin deformarse.',
    color: 'from-emerald-500/10 to-emerald-600/5',
    iconColor: 'text-emerald-600',
  },
]

function BenefitCard({ item, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const Icon = item.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      className={`bg-gradient-to-br ${item.color} border border-gray-100 rounded-2xl p-7 group cursor-default`}
    >
      <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5 group-hover:scale-110 transition-transform ${item.iconColor}`}>
        <Icon size={22} />
      </div>
      <h3 className="font-display font-semibold text-gray-900 text-lg mb-2">{item.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
    </motion.div>
  )
}

export default function Benefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E8650A] font-semibold text-sm uppercase tracking-widest mb-3 block">Por qué elegirnos</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
            Ventanas que transforman<br className="hidden md:block" /> tu calidad de vida
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            No vendemos ventanas, entregamos confort, seguridad y ahorro real para tu familia.
          </p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((item, i) => <BenefitCard key={item.title} item={item} index={i} />)}
        </div>
      </div>
    </section>
  )
}
