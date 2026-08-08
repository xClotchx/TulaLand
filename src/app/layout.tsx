import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tula Land',
  description: 'El servidor definitivo de Minecraft con mods pesados, exploración extrema, dimensiones ocultas y combates dinámicos entre amigos.',
  other: {
    'google-adsense-account': 'ca-pub-5659039143781049',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* Carga del script de AdSense */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5659039143781049"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}