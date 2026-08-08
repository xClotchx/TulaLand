import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tula Land 2K26',
  description: 'El servidor definitivo de Minecraft con mods pesados, exploración extrema, dimensiones ocultas y combates dinámicos entre amigos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        {/* AdSense inyectado directamente antes de la interactividad del cliente */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5659039143781049"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}