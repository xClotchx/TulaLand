import Navbar from '@/components/Navbar'
import Script from 'next/script'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* Carga del script de Google AdSense */}
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5659039143781049"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />

      <Navbar />
      <header className="max-w-4xl mx-auto px-4 py-20 text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">
          TULA LAND 2K26
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          El servidor definitivo de Minecraft con mods pesados, exploración extrema, dimensiones ocultas y combates dinámicos entre amigos.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <a href="/mods" className="bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-xl transition">
            Ver Mods
          </a>
          <a href="/conexion" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold px-6 py-3 rounded-xl transition border border-slate-700">
            Cómo Conectarse
          </a>
        </div>
      </header>
    </main>
  )
}