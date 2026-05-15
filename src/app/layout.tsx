import type { Metadata, Viewport } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-cinzel",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rivolia | Cafe Premium - Cafe Real, Sin Maquina, Sin Complicaciones",
  description:
    "Rivolia es la forma mas simple de tomar buen cafe en cualquier lugar. Cafe filtrado real, en un formato practico. Solo anade agua caliente y listo.",
  keywords: [
    "cafe premium",
    "cafe filtrado",
    "drip coffee",
    "cafe peruano",
    "cafe sin maquina",
    "cafe instantaneo premium",
  ],
  openGraph: {
    title: "Rivolia | Cafe Premium",
    description: "Cafe real. Sin maquina. Sin complicaciones.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#A61E22",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cinzel.variable} ${montserrat.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-cream">
        {children}
      </body>
    </html>
  );
}
