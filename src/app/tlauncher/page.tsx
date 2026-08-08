import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function TLauncherPage() {
  return (
    <main className="min-h-screen bg-night text-slate-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-12">
        
        {/* Sección TLauncher */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="font-pixel text-[10px] text-enchant tracking-wider">INSTALACIÓN</span>
            <h1 className="font-display text-4xl font-bold text-slate-100">Cómo Instalar TLauncher</h1>
            <p className="text-slate-400 text-lg">
              Sigue estos pasos rápidos para tener el cliente listo para jugar con mods en la versión 1.21.1.
            </p>
          </div>

          <div className="bg-night-panel border border-night-line rounded-2xl p-6 space-y-5">
            <h2 className="font-display font-bold text-enchant">Pasos iniciales</h2>
            <ol className="space-y-4">
              <Step n={1}>
                Entra a la página oficial de{' '}
                <a href="https://tlauncher.org" target="_blank" rel="noopener noreferrer" className="text-enchant underline underline-offset-2 hover:text-enchant-soft">
                  TLauncher
                </a>{' '}
                y descarga la versión para tu sistema operativo.
              </Step>
              <Step n={2}>Instala y abre el launcher.</Step>
              <Step n={3}>Agrega tu cuenta de TLauncher.</Step>
            </ol>
          </div>
        </div>

        {/* Sección NeoForge */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="font-pixel text-[10px] text-enchant tracking-wider">VERSIONES</span>
            <h1 className="font-display text-4xl font-bold text-slate-100">Cómo Instalar La Versión NeoForge</h1>
            <p className="text-slate-400 text-lg">
              Para jugar con los mods en la versión 1.21.1.
            </p>
          </div>

          <div className="bg-night-panel border border-night-line rounded-2xl p-6 space-y-5">
            <h2 className="font-display font-bold text-enchant">Instalación del cargador</h2>
            <ol className="space-y-4">
              <Step n={1}>
                Entra a la página oficial de{' '}
                <a href="https://neoforged.net" target="_blank" rel="noopener noreferrer" className="text-enchant underline underline-offset-2 hover:text-enchant-soft">
                  NeoForge
                </a>.
              </Step>
              <Step n={2}>
                En minecraft version selecciona la versión 1.21.1.
                <StepImage src="/assets/img/verss.png" alt="Versión de NeoForge" />
              </Step>
              <Step n={3}>
                Dale al botón de descargar.
                <StepImage src="/assets/img/image.png" alt="Botón de descarga" />
              </Step>
              <Step n={4}>
                Abre el instalador.
                <StepImage src="/assets/img/image copy.png" alt="Instalador abierto" />
              </Step>
              <Step n={5}>
                Selecciona <strong className="text-slate-100 font-semibold">Install client</strong>.
                <StepImage src="/assets/img/image copy 2.png" alt="Seleccionar Install Client" />
              </Step>
              <Step n={6}>
                Esta ruta es por defecto donde se instaló Minecraft (<strong className="text-ember-soft">si lo tienes en otra carpeta selecciona esa carpeta</strong>) y le das a proceed.
                <StepImage src="/assets/img/image copy 3.png" alt="Ruta de instalación" />
              </Step>
              <Step n={7}>Espera que se instale y lo cierras.</Step>
              <Step n={8}>
                Regresas a TLauncher y buscas la versión <code className="font-stat text-ember-soft bg-black/30 px-1.5 py-0.5 rounded">neoforge-21.1.248</code>.
                <StepImage src="/assets/img/version.png" alt="Versión NeoForge en TLauncher" />
              </Step>
            </ol>
          </div>
        </div>

        {/* Sección Mods */}
        <div className="space-y-6">
          <div className="space-y-3">
            <span className="font-pixel text-[10px] text-enchant tracking-wider">PERSONALIZACIÓN</span>
            <h1 className="font-display text-4xl font-bold text-slate-100">Cómo agregar los mods</h1>
            <p className="text-slate-400 text-lg">
              Añade los archivos necesarios para entrar al servidor.
            </p>
          </div>

          <div className="bg-night-panel border border-night-line rounded-2xl p-6 space-y-5">
            <h2 className="font-display font-bold text-enchant">Pasos finales</h2>
            <ol className="space-y-4">
              <Step n={1}>
                En la parte inferior derecha, haz clic en el icono de la carpeta.
              </Step>
              <Step n={2}>
                Se abrirá el explorador de archivos; busca la carpeta <code className="font-stat text-ember-soft bg-black/30 px-1.5 py-0.5 rounded">mods</code> y ahí meterás los mods.
                <StepImage src="/assets/img/mods.png" alt="Carpeta de mods" />
              </Step>
              <Step n={3}>
                Cierras el explorador de archivos y le das a jugar.
              </Step>
            </ol>
          </div>
        </div>

      </div>
    </main>
  )
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-slate-300">
      <span className="shrink-0 w-7 h-7 rounded-md bg-enchant/10 border border-enchant/30 text-enchant font-stat text-sm font-bold flex items-center justify-center">
        {n}
      </span>
      <div className="leading-relaxed pt-0.5 flex-1">{children}</div>
    </li>
  )
}

function StepImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="my-4 overflow-hidden rounded-xl border border-night-line">
      <Image src={src} alt={alt} width={600} height={350} className="w-full h-auto object-cover" />
    </div>
  )
}