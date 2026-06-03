import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, CheckCircle2, Users, TrendingUp } from 'lucide-react'

const stats = [
  { value: '+200', label: 'Proyectos instalados', icon: TrendingUp },
  { value: '5 años', label: 'Garantía en instalación', icon: Award },
  { value: '100%', label: 'Equipo técnico propio', icon: Users },
  { value: '24h', label: 'Cotización personalizada', icon: CheckCircle2 },
]

const trust = [
  'Empresa innovadora con más de 10 años en el mercado',
  'Equipo técnico certificado 100% propio, sin subcontratistas',
  'Fabricación a medida — sin medidas estándar ni stock',
  'Doble vidrio hermético 4-12-4 mm incluido en todos los proyectos',
  'Garantía formal por escrito en cada instalación',
  'Financiamiento disponible — consulta condiciones',
]

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="nosotros" className="py-20 md:py-28 bg-[#0d1b2a] text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#E8650A]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E8650A]/5 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s, i) => {
            const Icon = s.icon
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <Icon size={24} className="text-[#E8650A] mx-auto mb-3" />
                <div className="font-display font-extrabold text-3xl md:text-4xl text-white mb-1">{s.value}</div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </motion.div>
            )
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#E8650A] font-semibold text-sm uppercase tracking-widest mb-3 block">¿Por qué CDC SPA?</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl mb-6 leading-tight">
              Somos CDC SPA —<br />
              <span className="text-[#E8650A]">Cierres de Cristal.</span>
            </h2>
            <p className="text-white/70 text-base mb-4 leading-relaxed">
              Empresa innovadora dedicada a la instalación y venta de ventanas de PVC a lo largo de todo Chile. Desde la Innovación, Tecnología y el Diseño, nos hemos caracterizado por un abordaje de excelencia.
            </p>
            <p className="text-white/70 text-base mb-8 leading-relaxed">
              Hemos liderado proyectos de diversas complejidades del mercado nacional, tanto a nivel de empresas como particulares, entregando soluciones personalizadas, inteligentes y eficientes.
            </p>
            <a href="#cotizar"
              className="inline-flex items-center gap-2 bg-[#E8650A] hover:bg-[#C4540A] text-white font-bold px-8 py-4 rounded-full transition-all hover:shadow-lg active:scale-95"
            >
              Quiero una cotización gratis
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-4"
          >
            {trust.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex items-start gap-3 bg-white/5 backdrop-blur border border-white/10 rounded-xl px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-[#E8650A] mt-0.5 shrink-0" />
                <span className="text-white/85 text-sm">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
