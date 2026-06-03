import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: '¿Cuánto tiempo tarda la instalación?',
    a: 'La mayoría de los proyectos residenciales (hasta 10 ventanas) se instalan en un solo día. Proyectos más grandes se coordinan en etapas para no interrumpir la rutina familiar. Te informamos el plazo exacto al momento de la cotización.',
  },
  {
    q: '¿Qué diferencia hay entre ventanas de PVC y aluminio?',
    a: 'El PVC ofrece mejor aislamiento térmico y acústico que el aluminio estándar, no conduce frío ni calor, y no requiere mantención. Para la mayoría de los hogares chilenos, el PVC entrega mejor relación calidad-precio.',
  },
  {
    q: '¿Vienen con garantía? ¿Qué cubre?',
    a: 'Sí. La instalación tiene garantía de 5 años contra fallas de montaje. Los perfiles de PVC tienen garantía del fabricante contra deformación y despigmentación. Cualquier problema, lo resolvemos sin costo dentro del periodo de garantía.',
  },
  {
    q: '¿Fabrican a medida o trabajan con medidas estándar?',
    a: 'Todo es fabricado a medida. No existe medida estándar — cada ventana se corta y ensambla según las dimensiones exactas de tu vano, lo que garantiza hermeticidad perfecta y un acabado limpio.',
  },
  {
    q: '¿Cubren toda Chile?',
    a: 'Sí, trabajamos en todo Chile. Para proyectos fuera de Santiago evaluamos el traslado dependiendo del volumen del proyecto.',
  },
  {
    q: '¿El doble vidrio es obligatorio o hay otras opciones?',
    a: 'Nuestro estándar incluye doble vidrio 4-12-4 mm, que cumple la Reglamentación Térmica de la OGUC. Para proyectos premium ofrecemos triple vidrio y vidrio laminado de seguridad.',
  },
  {
    q: '¿Puedo pagar en cuotas?',
    a: 'Sí. Aceptamos tarjetas de crédito y tenemos opciones de financiamiento para proyectos de mayor monto. Consúltanos al momento de cotizar.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      className="border border-gray-200 rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-display font-semibold text-gray-900 text-sm md:text-base pr-4">{item.q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }} className="shrink-0">
          <ChevronDown size={18} className="text-[#E8650A]" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4 bg-gray-50">
              {item.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-[#E8650A] font-semibold text-sm uppercase tracking-widest mb-3 block">Preguntas frecuentes</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
            Todo lo que necesitas saber
          </h2>
          <p className="text-gray-500 text-base">
            ¿Tienes otra pregunta? Escríbenos por WhatsApp y respondemos en minutos.
          </p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((item, i) => <FAQItem key={i} item={item} index={i} />)}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mt-10">
          <a href="https://api.whatsapp.com/send?phone=56966879910" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-semibold px-7 py-3.5 rounded-full transition-all shadow-lg shadow-green-500/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.523 5.848L0 24l6.335-1.498A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.37l-.36-.213-3.76.889.951-3.642-.235-.374A9.794 9.794 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>
            Hacer una pregunta por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
