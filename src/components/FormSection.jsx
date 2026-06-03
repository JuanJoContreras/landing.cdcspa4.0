import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

const comunas = [
  'Providencia','Las Condes','Vitacura','Lo Barnechea','Ñuñoa','La Reina',
  'Maipú','Pudahuel','Quilicura','Colina','San Miguel','La Florida',
  'Peñalolén','Macul','San Bernardo','Puente Alto','Otra región',
]

const proyectos = [
  'Reemplazo de ventanas existentes',
  'Obra nueva — vivienda',
  'Obra nueva — departamento',
  'Local comercial u oficina',
  'Ampliación o remodelación',
  'Otro proyecto',
]

const cantidades = [
  '1 a 3 ventanas',
  '4 a 8 ventanas',
  '9 a 15 ventanas',
  '16 a 30 ventanas',
  'Más de 30 ventanas',
]

export default function FormSection() {
  const [status, setStatus] = useState('idle')
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1800))
    console.log('Lead:', data)
    setStatus('success')
    reset()
    setTimeout(() => setStatus('idle'), 6000)
  }

  const inputClass = (err) => `w-full border rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition ${
    err ? 'border-red-400 focus:ring-red-200' : 'border-gray-200 focus:ring-[#E8650A]/20 focus:border-[#E8650A]'
  }`

  return (
    <section id="cotizar" className="py-20 md:py-28 bg-gradient-to-br from-[#fff5ee] to-white relative">
      <div className="absolute inset-0 opacity-30"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, #E8650A22 0%, transparent 50%), radial-gradient(circle at 80% 20%, #E8650A11 0%, transparent 40%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:sticky md:top-28"
          >
            <span className="text-[#E8650A] font-semibold text-sm uppercase tracking-widest mb-3 block">Sin compromiso</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-gray-900 mb-6 leading-tight">
              Cotiza con nosotros.<br />
              <span className="text-[#E8650A]">¡Respondemos muy rápido!</span>
            </h2>
            <p className="text-gray-600 text-base mb-8 leading-relaxed">
              Completa el formulario y un especialista te contactará a la brevedad con tu cotización personalizada — sin compromisos.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: '⚡', title: 'Respuesta a la brevedad', desc: 'Lunes a viernes 09:00–18:00 hrs' },
                { icon: '📋', title: 'Cotización detallada', desc: 'Por ventana, con materiales e instalación' },
                { icon: '🔒', title: 'Sin compromiso', desc: 'Cero presión para decidir' },
              ].map(item => (
                <div key={item.title} className="flex items-start gap-4 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-3 border-t border-gray-100 pt-6">
              {[
                { icon: '✉', label: 'Email', value: 'ventas@cdcspa.cl', href: 'mailto:ventas@cdcspa.cl' },
                { icon: '📞', label: 'Teléfono', value: '(+56 9) 4753 3300', href: 'tel:+56947533300' },
                { icon: '💬', label: 'WhatsApp', value: '(+56 9) 6687 9910', href: 'https://api.whatsapp.com/send?phone=56966879910' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#E8650A]/10 rounded-full flex items-center justify-center text-base flex-shrink-0">{item.icon}</div>
                  <div>
                    <p className="text-gray-400 text-xs">{item.label}</p>
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                      className="text-gray-800 text-sm font-medium hover:text-[#E8650A] transition-colors"
                    >{item.value}</a>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl shadow-xl shadow-orange-900/10 border border-gray-100 p-8"
          >
            {status === 'success' ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <CheckCircle2 size={56} className="text-[#E8650A] mb-5" />
                <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">¡Solicitud enviada!</h3>
                <p className="text-gray-600">Un especialista te contactará a la brevedad con tu cotización personalizada.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <h3 className="font-display font-bold text-xl text-gray-900 mb-6">Solicitar cotización gratis</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Nombre completo *</label>
                  <input {...register('nombre', { required: 'Ingresa tu nombre' })}
                    placeholder="Ej: María González" className={inputClass(errors.nombre)} />
                  {errors.nombre && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.nombre.message}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">WhatsApp / Teléfono *</label>
                    <input {...register('telefono', { required: 'Ingresa tu teléfono', pattern: { value: /^[\d\s+\-()]{7,15}$/, message: 'Inválido' } })}
                      placeholder="+56 9 XXXX XXXX" className={inputClass(errors.telefono)} />
                    {errors.telefono && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.telefono.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Correo electrónico *</label>
                    <input {...register('email', { required: 'Ingresa tu email', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Inválido' } })}
                      placeholder="tu@correo.cl" type="email" className={inputClass(errors.email)} />
                    {errors.email && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Comuna / Región *</label>
                  <select {...register('comuna', { required: 'Selecciona tu comuna' })} className={inputClass(errors.comuna)}>
                    <option value="">Selecciona tu comuna...</option>
                    {comunas.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.comuna && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.comuna.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Tipo de proyecto *</label>
                  <select {...register('proyecto', { required: 'Selecciona el tipo' })} className={inputClass(errors.proyecto)}>
                    <option value="">¿Qué tipo de proyecto es?</option>
                    {proyectos.map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                  {errors.proyecto && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.proyecto.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">¿Cuántas ventanas aproximadamente? *</label>
                  <select {...register('cantidad', { required: 'Indica la cantidad' })} className={inputClass(errors.cantidad)}>
                    <option value="">Selecciona un rango...</option>
                    {cantidades.map(c => <option key={c} value={c}>{c}</option>)}
                  </select>
                  {errors.cantidad && <p className="text-red-500 text-xs mt-1 flex items-center gap-1"><AlertCircle size={11} />{errors.cantidad.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Mensaje adicional <span className="text-gray-400">(opcional)</span></label>
                  <textarea {...register('mensaje')} rows={3}
                    placeholder="Dimensiones aproximadas, plazo, tipo de ventana preferida..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E8650A]/20 focus:border-[#E8650A] transition resize-none"
                  />
                </div>

                <button type="submit" disabled={status === 'sending'}
                  className="w-full bg-[#E8650A] hover:bg-[#C4540A] disabled:bg-[#E8650A]/60 text-white font-bold text-base py-4 rounded-full transition-all flex items-center justify-center gap-2 shadow-lg shadow-orange-900/20 active:scale-[0.98]"
                >
                  {status === 'sending' ? (
                    <><Loader2 size={18} className="animate-spin" /> Enviando cotización...</>
                  ) : 'Quiero mi cotización gratis →'}
                </button>

                <p className="text-gray-400 text-xs text-center">Sin compromiso. Respondemos a la brevedad.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
