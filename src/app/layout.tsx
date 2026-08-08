import type { Metadata } from 'next'
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
      <body>{children}</body>
    </html>
  )
}
