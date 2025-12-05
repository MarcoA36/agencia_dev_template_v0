// import type React from "react"
// import type { Metadata } from "next"
// import { Inter } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Agencia de Desarrollo Web | Soluciones Digitales Innovadoras",
//   description:
//     "Creamos experiencias digitales que impulsan tu negocio. Desarrollo web, aplicaciones móviles y sistemas a medida.",
//   generator: "v0.app",
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="es">
//       <body className={`${inter.className} font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zonaweb.site"), // ← Cambiar a tu dominio real

  title: {
    default: "Agencia de Desarrollo Web | Soluciones Digitales Profesionales",
    template: "%s | Agencia de Desarrollo Web",
  },

  description:
    "Desarrollo web profesional, aplicaciones móviles y sistemas a medida. Impulsa tu negocio con soluciones digitales modernas, rápidas y optimizadas para convertir.",

  keywords: [
    "desarrollo web",
    "sitios web",
    "sistemas a medida",
    "aplicaciones móviles",
    "agencia digital",
    "diseño web profesional",
    "software para empresas",
  ],

  authors: [{ name: "Tu Nombre" }],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://zonaweb.site",
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://zonaweb.site",
    siteName: "Agencia de Desarrollo Web",
    title: "Soluciones Digitales Profesionales",
    description:
      "Creamos sitios web, sistemas a medida y apps móviles para negocios que buscan crecer.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Agencia de Desarrollo Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Agencia de Desarrollo Web | Soluciones Digitales",
    description:
      "Sitios web, sistemas y apps móviles para tu negocio. Rápido. Escalable. Profesional.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180" }
    ],
  },
  
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${inter.className} font-sans antialiased`}>
        {children}

        {/* Schema JSON-LD para SEO local */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Agencia de Desarrollo Web",
              url: "https://zonaweb.site",
              description:
                "Agencia especializada en desarrollo web, sistemas y aplicaciones móviles.",
              image: "https://zonaweb.site/og-image.jpg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Argentina",
                addressCountry: "AR",
              },
            }),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}
