import { motion } from 'framer-motion'
import { ChevronDown, Star } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
}

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop"
          alt="Ventanas PVC instaladas en hogar moderno"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b2a]/92 via-[#1a2f45]/80 to-[#1a2f45]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Orange accent line */}
      <div className="absolute left-0 top-0 bottom-0 w-1 z-10 bg-gradient-to-b from-transparent via-[#E8650A] to-transparent opacity-70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={0}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur border border-white/20 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-[#E8650A] rounded-full animate-pulse" />
            Venta &amp; Instalación · Todo Chile
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="show" custom={1}
            className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.05] mb-6"
          >
            Ventanas de <span className="text-[#E8650A]">PVC</span><br />
            que transforman<br />
            tu hogar.
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="show" custom={2}
            className="text-white/80 text-lg md:text-xl max-w-xl mb-4 leading-relaxed"
          >
            Fabricamos e instalamos ventanas de PVC con aislación térmica superior para proyectos residenciales y comerciales en todo Chile.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={2.5}
            className="flex gap-8 mb-8 flex-wrap"
          >
            {[
              { num: '47%', label: 'menos pérdida de energía' },
              { num: '68%', label: 'ahorro en climatización' },
              { num: '10+', label: 'años de experiencia' },
            ].map(s => (
              <div key={s.label}>
                <span className="text-[#E8650A] font-extrabold text-2xl block">{s.num}</span>
                <span className="text-white/50 text-xs">{s.label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={3}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <a href="#cotizar"
              className="inline-flex items-center justify-center gap-2 bg-[#E8650A] hover:bg-[#C4540A] text-white font-bold text-base px-8 py-4 rounded-full shadow-lg shadow-orange-900/40 transition-all hover:scale-105 active:scale-95"
            >
              Cotización Gratis en 24h
            </a>
            <a href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quisiera%20cotizar%20ventanas%20de%20PVC"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 border border-white/30 text-white font-semibold text-base px-8 py-4 rounded-full transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.523 5.848L0 24l6.335-1.498A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.37l-.36-.213-3.76.889.951-3.642-.235-.374A9.794 9.794 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
              </svg>
              WhatsApp Directo
            </a>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" animate="show" custom={4}
            className="flex items-center gap-4"
          >
            <div className="flex -space-x-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-9 h-9 rounded-full border-2 border-white bg-gray-400 overflow-hidden">
                  <img src={`https://i.pravatar.cc/36?img=${i+10}`} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-[#F5A623] text-[#F5A623]" />)}
              </div>
              <p className="text-white/70 text-xs">+200 proyectos instalados en Chile</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50"
      >
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
