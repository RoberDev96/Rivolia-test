# Rivolia - Landing Page
Landing page de Rivolia, cafe premium. Proyecto construido con Next.js, Tailwind CSS y Framer Motion.
## Caracteristicas
- Diseno responsive para todas las pantallas
- Animaciones fluidas con Framer Motion
- Tipografia personalizada (Cinzel, Montserrat)
- Paleta de colores personalizada
- Secciones: Hero, Productos, Preparacion, Calidad, Comparacion, Testimonios, CTA, Footer
- Boton flotante de WhatsApp
## Requisitos
- Node.js 18+
- npm o yarn
## Instalacion
```bash
npm install
```
## Desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000)
## Produccion
```bash
npm run build
npm start
```
## Estructura
```
src/
├── app/               # Next.js app router
│   ├── globals.css    # Estilos globales y variables
│   ├── layout.tsx     # Layout principal
│   └── page.tsx       # Pagina principal
├── components/
│   ├── atoms/         # Componentes basicos (Button, Heading, Text, Icon, Image)
│   ├── molecules/     # Componentes compuestos (ProductCard, TestimonialCard, etc.)
│   ├── organisms/     # Secciones completas (Hero, Header, Footer, etc.)
│   └── templates/     # Plantillas de paginas
└── lib/
    └── constants.ts   # Datos estaticos (productos, steps, comparaciones)
```
## Tecnologias
- **Next.js 16** - Framework React
- **Tailwind CSS 4** - Estilos
- **Framer Motion** - Animaciones
- **TypeScript** - Tipado
## Licencia
2026 Rivolia. Todos los derechos reservados.
