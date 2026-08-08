import Navbar from '@/components/Navbar'

export default function TLauncherPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-emerald-400">Cómo Instalar TLauncher</h1>
        <p className="text-slate-400">Sigue estos pasos rápidos para tener el cliente listo para jugar con mods en la versión 1.21.1.</p>
        
        <ol className="space-y-4 text-slate-300 list-decimal list-inside bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <li className="pl-2">Entra a la página oficial de <a href="https://tlauncher.org" target="_blank" className="text-emerald-400 underline">TLauncher</a> y descarga la versión para tu sistema operativo.</li>
          <li className="pl-2">Instala y abre el launcher, coloca tu nombre de usuario y selecciona la versión de **NeoForge 1.21.1**.</li>
          <li className="pl-2">Coloca los archivos de optimización y los mods del cliente dentro de la carpeta correspondiente.</li>
        </ol>
      </div>
    </main>
  )
}