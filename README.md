# CDC SPA — Landing Page

Landing page de conversión para CDC SPA - Cierres de Cristal (cdcspa.cl)  
Stack: **Vite + React + Tailwind CSS + Framer Motion + React Hook Form**

---

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:5173
```

## Build producción

```bash
npm run build
# output en /dist
```

---

## Deploy en Vercel (recomendado)

### Opción A — Automático desde GitHub (más simple)

1. Ir a [vercel.com](https://vercel.com) → **New Project**
2. Importar el repositorio `cdcspa-landing` desde GitHub
3. Vercel detecta Vite automáticamente — dejar configuración por defecto
4. Click **Deploy**
5. Cada push a `main` despliega automáticamente

### Opción B — Via GitHub Actions (con secrets)

Requiere 3 secrets en el repositorio (`Settings > Secrets > Actions`):
- `VERCEL_TOKEN` — desde vercel.com → Account Settings → Tokens
- `VERCEL_ORG_ID` — desde `.vercel/project.json` después del primer deploy
- `VERCEL_PROJECT_ID` — desde `.vercel/project.json` después del primer deploy

---

## Personalización necesaria antes de producción

| Archivo | Qué cambiar |
|---------|-------------|
| `Navbar.jsx` | Número de teléfono real |
| `Hero.jsx` | Número de teléfono real en link WhatsApp |
| `FormSection.jsx` | Reemplazar `setTimeout` simulado por endpoint real (EmailJS, Formspree, API propia) |
| `Footer.jsx` | Teléfono, email, redes sociales reales |
| `FAQ.jsx` | Link WhatsApp real |
| `index.html` | URL og:image con imagen real |
| `tailwind.config.js` | Ajustar colores si es necesario |

---

## Estructura

```
src/
├── App.jsx                 ← Ensamblador
└── components/
    ├── Navbar.jsx          ← Transparente con scroll
    ├── Hero.jsx            ← Hero con imagen fondo + CTAs
    ├── Benefits.jsx        ← 6 cards de beneficios
    ├── Products.jsx        ← Grid 6 tipos de ventanas
    ├── WhyUs.jsx           ← Stats + trust signals dark section
    ├── FormSection.jsx     ← Formulario con React Hook Form
    ├── Testimonials.jsx    ← 4 testimonios con rating
    ├── Gallery.jsx         ← Grid proyectos con hover
    ├── FAQ.jsx             ← Acordeón animado
    └── Footer.jsx          ← Footer + WhatsApp flotante
```
