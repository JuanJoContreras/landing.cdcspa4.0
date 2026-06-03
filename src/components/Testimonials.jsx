import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Marcela Rodríguez',
    role: 'Propietaria, Providencia',
    avatar: 'https://i.pravatar.cc/80?img=25',
    rating: 5,
    text: 'Reemplacé todas las ventanas del departamento y la diferencia es brutal. El ruido de Providencia prácticamente desapareció y el invierno pasado pagué casi la mitad de calefacción. El equipo fue puntual y dejó todo limpio.',
    project: 'Reemplazo 8 ventanas — Departamento',
  },
  {
    name: 'Carlos Muñoz',
    role: 'Constructor, Las Condes',
    avatar: 'https://i.pravatar.cc/80?img=12',
    rating: 5,
    text: 'Los uso para todos mis proyectos de obra nueva. Tiempo de entrega exacto, materiales de PVC de calidad y el servicio post-venta resuelve cualquier cosa rápido. Para clientes finales exigentes son la opción correcta.',
    project: 'Obra nueva — 24 ventanas',
  },
  {
    name: 'Valentina Torres',
    role: 'Arquitecta, Ñuñoa',
    avatar: 'https://i.pravatar.cc/80?img=45',
    rating: 5,
    text: 'Especifiqué CDC SPA en dos proyectos de remodelación y el resultado cumplió con creces. Los perfiles tienen muy buena terminación y el sistema de perfilería es compatible con todos los sistemas de fachada que manejo.',
    project: 'Remodelación — Local comercial',
  },
  {
    name: 'Roberto Sáez',
    role: 'Propietario, San Miguel',
    avatar: 'https://i.pravatar.cc/80?img=31',
    rating: 5,
    text: 'Pedí cotización un viernes a las 3 PM y el lunes ya tenía el presupuesto detallado con visita a terreno incluida. El precio era más alto que otras opciones pero el asesor me explicó exactamente por qué vale la diferencia. Contento.',
    project: 'Reemplazo 5 ventanas — Casa',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 md:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#2ECC71] font-semibold text-sm uppercase tracking-widest mb-3 block">Clientes reales</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
            Lo que dicen quienes<br className="hidden md:block" /> ya instalaron
          </h2>
          <div className="flex items-center justify-center gap-2 text-amber-500">
            {[...Array(5)].map((_, i) => <Star key={i} size={18} className="fill-amber-400 text-amber-400" />)}
            <span className="text-gray-600 text-sm ml-2">4.9 / 5 — +120 reseñas verificadas</span>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7 relative"
            >
              <Quote size={32} className="text-[#1A4B8C]/10 absolute top-5 right-6" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-gray-700 text-sm leading-relaxed mb-5">"{t.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                </div>
                <span className="text-xs text-[#1A4B8C] bg-[#EEF4FF] px-3 py-1 rounded-full font-medium">{t.project}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
