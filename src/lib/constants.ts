// Design tokens and constants for Rivolia brand
export const colors = {
  primary: "#A61E22",
  secondary: "#4E2F2B",
  
  buy: "#AF8846",
  buyHover: "#651410",
  active: "#AF8846",
  buyNow:"#4E2F2B",
  buyNowHover:"#271110",
  beige: "#CFC3B5",
  white: "#FFFFFF",
} as const;

export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
} as const;

export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 },
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  },
  slideInLeft: {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  slideInRight: {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
} as const;

export const products = [
  {
    id: "sachet-individual",
    name: "Sachet Individual",
    description: "Ideal para probar. Una ocasion.",
    image: "/image/Sección 3 Cards 1 1_063655.png",
  },
  {
    id: "sachet-especialidad",
    name: "Sachet Rivolia Especialidad",
    description: "Perfil premium. Notas especiales.",
    image: "/image/Sección 3 Cards 2 1_070305.png",
  },
  {
    id: "pack-10",
    name: "Pack 10 Sachets",
    description: "Uso frecuente. Mas practico.",
    image: "/image/Sección 3 Cards 3 1_065835.png",
  },
  {
    id: "pack-20",
    name: "Pack 20 Sachets",
    description: "Mas elegido. Mejor por taza. Ideal para uso diario.",
    image: "/image/Sección 3 Cards 4 1_071918.png",
    featured: true,
  },
] as const;

export const preparationSteps = [
  {
    step: 1,
    title: "Abre el sachet",
    image: "/image/Sección 3 Cards 1 1_063655.png",
  },
  {
    step: 2,
    title: "Colocalo en tu taza",
    image: "/image/Sección 3 Cards 2 1_070305.png",
  },
  {
    step: 3,
    title: "Vierte agua caliente",
    image: "/image/Hero de Desktop 1_054349.png",
  },
] as const;

export const comparisonData = {
  rivolia: {
    title: "Rivolia",
    subtitle: "Cafe filtrado",
    features: [
      { text: "No es polvo soluble, es cafe para pasar" },
      { text: "Sabor limpio y natural" },
      { text: "Sin ese gusto artificial tipico del instantaneo" },
      { text: "Aroma fresco" },
      { text: "Se siente como cafe recien hecho" },
      { text: "Listo en 3 minutos" },
      { text: "Rapidez sin sacrificar calidad" },
    ],
  },
  instantaneo: {
    title: "Cafe Instantaneo",
    features: [
      { text: "Polvo ultraprocesado" },
      { text: "Pierde gran parte del perfil original" },
      { text: "Sabor plano artificial" },
      { text: "No hay complejidad ni textura" },
      { text: "Aroma debil a quimico" },
      { text: "No genera expectativas" },
      { text: "Menor percepcion de calidad" },
      { text: "Rapido y basico" },
    ],
  },
} as const;

export const testimonials = [
  {
    quote: "Lo llevo a la oficina, ya no pierdo tiempo saliendo por cafe.",
    author: "Cliente",
  },
  {
    quote: "Viajo con esto y siempre tengo buen cafe.",
    author: "Cliente",
  },
] as const;
