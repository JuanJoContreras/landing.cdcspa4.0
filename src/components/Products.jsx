import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight } from 'lucide-react'

const products = [
  {
    name: 'Ventana Corredera',
    desc: 'Deslizamiento horizontal suave. Ideal para balcones, terrazas y espacios amplios donde se requiere máxima apertura.',
    badge: 'Más popular',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 70mm', 'DVH 4/12/4', 'Alta ventilación'],
  },
  {
    name: 'Ventana Abatible',
    desc: 'Apertura lateral total. Máxima ventilación y hermeticidad con bisagras de alta resistencia.',
    badge: null,
    img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 70mm', 'Apertura 100%', 'Sellado superior'],
  },
  {
    name: 'Oscilobatiente',
    desc: 'Combina 2 sistemas de apertura — abatir y oscilar — en una misma ventana. El estándar europeo de calidad.',
    badge: 'Premium',
    img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 82mm', '2 en 1', 'Alta seguridad'],
  },
  {
    name: 'Ventana Fija',
    desc: 'Sin apertura, máximo aislamiento y entrada de luz. Perfecta para fachadas y vanos de gran tamaño.',
    badge: null,
    img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 60mm', 'Max. luminosidad', 'Sin límite de ancho'],
  },
  {
    name: 'Ventana Proyectante',
    desc: 'Apertura desde la parte inferior hacia el exterior. Ideal para baños, cocinas y espacios que requieren ventilación constante.',
    badge: null,
    img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 60mm', 'Anti-lluvia', 'Ventilación segura'],
  },
  {
    name: 'Ventana Oscilante',
    desc: 'Abre desde la parte superior hacia el interior. Ventilación continua y segura incluso con lluvia o viento.',
    badge: null,
    img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&q=75&auto=format&fit=crop',
    tags: ['Perfil 60mm', 'Apertura sup.', 'Ventilación 24/7'],
  },
]

export default function Products() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <section id="productos" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#E8650A] font-semibold text-sm uppercase tracking-widest mb-3 block">Nuestros sistemas</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
            Una solución para<br className="hidden md:block" /> cada espacio
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Todos nuestros sistemas son fabricados a medida con perfiles de PVC de alta calidad. Sin medidas estándar, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.6 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {p.badge && (
                  <span className="absolute top-3 left-3 bg-[#E8650A] text-white text-xs font-bold px-3 py-1 rounded-full">
                    {p.badge}
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-gray-900 text-lg mb-2">{p.name}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="bg-gray-50 border border-gray-200 text-gray-600 text-xs px-2.5 py-1 rounded-full">{t}</span>
                  ))}
                </div>
                <a href="#cotizar" className="inline-flex items-center gap-1.5 text-[#E8650A] font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Cotizar este modelo <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
