import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { images } from '../../../public/assets/img'

export default function TLauncherPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-emerald-400">Cómo Instalar TLauncher</h1>
        <p className="text-slate-400">Sigue estos pasos rápidos para tener el cliente listo para jugar con mods en la versión 1.21.1.</p>
        
        <ol className="space-y-4 text-slate-300 list-decimal list-inside bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <li className="pl-2">Entra a la página oficial de <a href="https://tlauncher.org" target="_blank" className="text-emerald-400 underline">TLauncher</a> y descarga la versión para tu sistema operativo.</li>
          <li className="pl-2">Instala y abre el launcher.</li>
          <li className="pl-2">Agrega tu cuenta de Tlauncher.</li>
        </ol>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-emerald-400">Cómo Instalar La Version NeoForge</h1>
        <p className="text-slate-400">Para jugar con mods en la versión 1.21.1.</p>
        
        <ol className="space-y-4 text-slate-300 list-decimal list-inside bg-slate-900 p-6 rounded-2xl border border-slate-800">
          <li className="pl-2">Entra a la página oficial de <a href="https://neoforged.net" target="_blank" className="text-emerald-400 underline">NeoForge</a>.</li>
          <li className="pl-2">
            En minecraft version selecciona la version 1.21.1.
            {/* El div y la imagen están correctamente dentro de este li */}
            <div className="my-4 overflow-hidden rounded-xl border border-slate-700">
              <Image 
                src="/assets/img/verss.png" 
                alt="Version" 
                width={600} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </li>
          <li className="pl-2">
            Dale al boton de descargar.
            {/* El div y la imagen están correctamente dentro de este li */}
            <div className="my-4 overflow-hidden rounded-xl border border-slate-700">
              <Image 
                src="/assets/img/image.png" 
                alt="Version" 
                width={600} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </li>
          <li className="pl-2">
            Abre el instalador.
            {/* El div y la imagen están correctamente dentro de este li */}
            <div className="my-4 overflow-hidden rounded-xl border border-slate-700">
              <Image 
                src="/assets/img/image copy.png" 
                alt="Version" 
                width={600} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </li>
          <li className="pl-2">
            Selecciona install client.
            {/* El div y la imagen están correctamente dentro de este li */}
            <div className="my-4 overflow-hidden rounded-xl border border-slate-700">
              <Image 
                src="/assets/img/image copy 2.png" 
                alt="Version" 
                width={600} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </li>
          <li className="pl-2">
            Esta ruta es por defecto donde se instalo minecraft (SI LO TIENES EN OTRA CARPETA SELECCIONA ESA CARPETA) le das a proceed.
            {/* El div y la imagen están correctamente dentro de este li */}
            <div className="my-4 overflow-hidden rounded-xl border border-slate-700">
              <Image 
                src="/assets/img/image copy 3.png" 
                alt="Version" 
                width={600} 
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </li>
           <li className="pl-2">Espera que se instale y lo cierras.</li>
           <li className="pl-2">Regresas a TLauncher y buscas la version neoforge 1.21.1 .</li>
        </ol>
      </div>
    </main>
  )
}