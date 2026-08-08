import Navbar from '@/components/Navbar'
import Image from 'next/image'

export default function ConexionPage() {
  return (
    <main className="min-h-screen bg-night text-slate-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-16 space-y-8">
        <div className="space-y-3">
          <span className="font-pixel text-[10px] text-enchant tracking-wider">RED PRIVADA</span>
          <h1 className="font-display text-4xl font-bold text-slate-100">Conexión mediante Tailscale</h1>
          <p className="text-slate-400 text-lg">
            Como el servidor estará abierto 24/7 utilizaremos Tailscale para conectarnos de forma segura.
          </p>
        </div>

        <div className="bg-night-panel border border-night-line rounded-2xl p-6 space-y-5">
          <h2 className="font-display font-bold text-enchant">Pasos para unirse</h2>
          <ol className="space-y-4">
            <Step n={1}>
              Crea una cuenta en{' '}
              <a href="https://tailscale.com" target="_blank" rel="noopener noreferrer" className="text-enchant underline underline-offset-2 hover:text-enchant-soft">
                Tailscale
              </a>.
            </Step>
            <Step n={2}>
              Sal de la cuenta que creaste y toca la{' '}
              <a href="https://login.tailscale.com/admin/invite/3oPug65ou68dqrjwcM6X11" target="_blank" rel="noopener noreferrer" className="text-enchant underline underline-offset-2 hover:text-enchant-soft">
                Invitación
              </a>.
            </Step>
            <Step n={3}>
              Descarga e instala{' '}
              <a href="https://tailscale.com" target="_blank" rel="noopener noreferrer" className="text-enchant underline underline-offset-2 hover:text-enchant-soft">
                Tailscale
              </a>{' '}
              en tu PC.
            </Step>
            <Step n={4}>Inicia sesión con tu cuenta.</Step>
            <Step n={5}>
              Copia la IP de <strong className="text-slate-100 font-semibold">macboock-pro-de-clotch</strong>{' '}
              (ej. <code className="font-stat text-ember-soft bg-black/30 px-1.5 py-0.5 rounded">100.x.x.x</code>).
            </Step>
            <Step n={6}>Abre Minecraft.</Step>
            <Step n={7}>Ve a multijugador.</Step>
            <Step n={8}>Añadir Servidor.</Step>
            <Step n={9}>
              Agrégale un nombre (Tula Land).
              <StepImage src="/assets/img/nomserpng.png" alt="Nombre del servidor" />
            </Step>
            <Step n={10}>
              Introduce esa IP en el puerto.
              <StepImage src="/assets/img/ip.png" alt="IP y puerto" />
            </Step>
            <Step n={11}>Dale a guardar.</Step>
            <Step n={12}>Conéctate a Tula Land.</Step>
          </ol>

          <div className="pt-2 border-t border-night-line">
            <p className="text-center text-danger font-semibold pt-4">
              "Siempre que quieras jugar debes tener abierto el Tailscale en tu computadora"
            </p>
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
