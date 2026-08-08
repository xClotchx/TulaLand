import Navbar from '@/components/Navbar'
import Script from 'next/script'

export default function ConexionPage() {
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
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-emerald-400">Conexión mediante Tailscale</h1>
        <p className="text-slate-400">Como el servidor corre localmente, usamos Tailscale para conectarnos de forma segura como si estuviéramos en la misma red local.</p>
        
        <div className="space-y-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-slate-300">
          <h2 className="text-xl font-bold text-emerald-300">Pasos para unirse:</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="pl-2">Descarga e instala <a href="https://tailscale.com" target="_blank" className="text-emerald-400 underline">Tailscale</a> en tu PC y en la del host del servidor.</li>
            <li className="pl-2">Inicia sesión con la misma cuenta (Google o Microsoft) en ambas computadoras.</li>
            <li className="pl-2">Copia la **IP de Tailscale** asignada a la PC que hospeda el servidor (ej. `100.x.x.x`).</li>
            <li className="pl-2">Abre Minecraft, ve multijugador, introduce esa IP y conéctate a Tula Land 2k26.</li>
          </ol>
        </div>
      </div>
    </main>
  )
}