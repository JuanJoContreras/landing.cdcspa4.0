import { Phone, Mail, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="bg-[#0d1b2a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <img src="/logo-cdc.jpg" alt="CDC SPA" className="h-12 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Empresa innovadora dedicada a la instalación y venta de ventanas de PVC a lo largo de todo Chile. Innovación, Tecnología y Diseño al servicio de tu proyecto.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quisiera%20cotizar"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.523 5.848L0 24l6.335-1.498A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.37l-.36-.213-3.76.889.951-3.642-.235-.374A9.794 9.794 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
                </svg>
                WhatsApp
              </a>
              <a href="https://www.instagram.com/iruzspa.cl/" target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Productos</h4>
            <ul className="space-y-2.5 text-white/60 text-sm">
              {['Ventana Corredera','Ventana Abatible','Oscilobatiente','Ventana Proyectante','Ventana Oscilante','Ventana Fija'].map(item => (
                <li key={item}><a href="#productos" className="hover:text-white transition-colors">{item}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-4">Contacto</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="shrink-0 mt-0.5 text-[#E8650A]" />
                <a href="tel:+56947533300" className="hover:text-white transition-colors">(+56 9) 4753 3300</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={15} className="shrink-0 mt-0.5 text-[#E8650A]" />
                <a href="tel:+56966879910" className="hover:text-white transition-colors">(+56 9) 6687 9910</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={15} className="shrink-0 mt-0.5 text-[#E8650A]" />
                <a href="mailto:ventas@cdcspa.cl" className="hover:text-white transition-colors">ventas@cdcspa.cl</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="shrink-0 mt-0.5 text-[#E8650A]" />
                <span>Santiago, Chile<br />Cobertura nacional</span>
              </li>
              <li className="text-white/40 text-xs pt-2 border-t border-white/10">
                Lun–Vie · 09:00–18:00 hrs
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-xs">© {year} CDC SPA – Cierres de Cristal. Todos los derechos reservados.</p>
          <p className="text-white/25 text-xs">Ventanas de PVC · Fabricación &amp; Instalación · Chile</p>
        </div>
      </div>

      {/* WhatsApp flotante */}
      <a href="https://api.whatsapp.com/send?phone=56966879910&text=Hola,%20quisiera%20cotizar%20ventanas%20de%20PVC"
        target="_blank" rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] rounded-full shadow-xl shadow-green-500/40 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7" fill="white" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.123.553 4.118 1.523 5.848L0 24l6.335-1.498A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.793 9.793 0 01-5.012-1.37l-.36-.213-3.76.889.951-3.642-.235-.374A9.794 9.794 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/>
        </svg>
      </a>
    </footer>
  )
}
