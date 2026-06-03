import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const projects = [
  { img: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=75&auto=format&fit=crop', title: 'Casa moderna Las Condes', type: 'Ventanas correderas + balcón' },
  { img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=75&auto=format&fit=crop', title: 'Depto. Providencia', type: 'Reemplazo total 8 ventanas' },
  { img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=75&auto=format&fit=crop', title: 'Oficina Vitacura', type: 'Ventanas fijas fachada' },
  { img: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=75&auto=format&fit=crop', title: 'Casa Ñuñoa', type: 'Oscilobatientes premium' },
  { img: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=75&auto=format&fit=crop', title: 'Edificio Maipú', type: 'Obra nueva 45 ventanas' },
  { img: 'https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&q=75&auto=format&fit=crop', title: 'Local comercial Nunoa', type: 'Puertas + ventanas PVC' },
]

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#1A4B8C] font-semibold text-sm uppercase tracking-widest mb-3 block">Proyectos realizados</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-4">
            Resultados que hablan<br className="hidden md:block" /> por sí solos
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Cada proyecto es fabricado a medida. Miramos el antes y después para asegurarnos de superar tus expectativas.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden aspect-square cursor-pointer"
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-white font-display font-semibold text-sm">{p.title}</div>
                <div className="text-white/70 text-xs mt-0.5">{p.type}</div>
              </div>
              <ExternalLink size={16} className="absolute top-3 right-3 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#cotizar"
            className="inline-flex items-center gap-2 bg-[#1A4B8C] hover:bg-[#0D2F5E] text-white font-semibold px-8 py-4 rounded-full transition-all shadow-lg shadow-blue-900/20"
          >
            Cotiza tu proyecto →
          </a>
        </div>
      </div>
    </section>
  )
}
