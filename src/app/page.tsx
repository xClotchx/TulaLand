import Navbar from '@/components/Navbar'
import Skyline from '@/components/Skyline'
import Link from 'next/link'
import { VillagerIcon, RingIcon, MapIcon, ShieldIcon, SwordIcon, GaugeIcon } from '@/components/icons'

export default function Home() {
  return (
    <main className="min-h-screen bg-night text-slate-100 flex flex-col">
      <Navbar />

      {/* Hero — degradado dia/noche + skyline por "chunks" como elemento propio */}
      <header className="relative overflow-hidden bg-sky-gradient animate-drift">
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[12%] top-[22%] w-1.5 h-1.5 rounded-full bg-ember shadow-[0_0_12px_4px_rgba(245,165,36,0.55)] animate-float" style={{ animationDelay: '0s' }} />
          <span className="absolute left-[78%] top-[16%] w-1 h-1 rounded-full bg-enchant-soft shadow-[0_0_10px_3px_rgba(143,243,214,0.5)] animate-float" style={{ animationDelay: '1.4s' }} />
          <span className="absolute left-[55%] top-[30%] w-1 h-1 rounded-full bg-ember-soft shadow-[0_0_10px_3px_rgba(255,206,124,0.5)] animate-float" style={{ animationDelay: '2.6s' }} />
          <span className="absolute left-[30%] top-[12%] w-1 h-1 rounded-full bg-enchant shadow-[0_0_10px_3px_rgba(47,216,166,0.5)] animate-float" style={{ animationDelay: '3.8s' }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 pt-20 pb-56 md:pt-28 md:pb-72 text-center space-y-8">
          <div className="inline-block px-4 py-1.5 rounded-full bg-black/30 border border-ember/30 backdrop-blur-sm">
            <a
              href="https://www.tiktok.com/@by.clotch?_r=1&_t=98i5fo09cVx"
              className="font-pixel text-[10px] leading-none text-ember-soft hover:text-parchment transition-colors"
            >
              BY.CLOTCH
            </a>
          </div>

          <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-ember-soft via-parchment to-enchant-soft">
            TULA LAND
          </h1>

          <p className="text-lg md:text-2xl text-slate-200/90 max-w-3xl mx-auto leading-relaxed font-light">
            El servidor definitivo de Minecraft con mods pesados, exploración extrema,
            dimensiones ocultas y combates dinámicos entre amigos.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="/mods"
              className="pixel-btn bg-ember hover:bg-ember-soft text-night font-bold px-8 py-4 rounded-lg text-lg"
            >
              Ver catálogo de mods
            </Link>
            <Link
              href="/conexion"
              className="pixel-btn bg-black/30 hover:bg-black/40 text-slate-100 font-bold px-8 py-4 rounded-lg border border-white/10 text-lg backdrop-blur-sm"
            >
              Cómo conectarse
            </Link>
          </div>
        </div>

        <Skyline />
      </header>

      {/* HUD de estado - datos reales, sin cifras inventadas */}
      <div className="relative -mt-px bg-night-soft border-y border-night-line">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-center gap-x-10 gap-y-2 font-stat text-xs text-slate-400 uppercase tracking-wider">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-enchant animate-flicker" />
            Servidor en línea
          </span>
          <span>Versión: NeoForge 1.21.1</span>
          <span>Conexión: Tailscale</span>
        </div>
      </div>

      {/* Sección Lo Nuevo: Nuevos Mods Agregados */}
      <section className="max-w-6xl mx-auto px-4 pt-20 pb-10 space-y-8">
        <div className="text-center space-y-3 animate-rise">
          <span className="font-pixel text-[10px] text-ember tracking-wider">ACTUALIZACIÓN RECIENTE</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
            Lo nuevo en el servidor
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Hemos integrado mejoras esenciales para potenciar la jugabilidad, el almacenamiento y la comodidad de todos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-night-panel border border-ember/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
              NUEVO
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Collective</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Librería y núcleo optimizado que asegura la compatibilidad y estabilidad general de los sistemas del servidor.
            </p>
          </div>

          <div className="bg-night-panel border border-ember/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
              NUEVO
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Infinito Trading</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Evita que los aldeanos se queden sin stock o bloqueen sus ofertas, permitiendo un comercio fluido e ilimitado.
            </p>
          </div>

          <div className="bg-night-panel border border-ember/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
              NUEVO
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Curios API</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Añade ranuras de inventario especializadas para accesorios y mochilas, liberando tu armadura principal.
            </p>
          </div>

          <div className="bg-night-panel border border-ember/30 p-6 rounded-2xl space-y-3 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
              NUEVO
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Carry On</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Permite levantar, transportar y reubicar cofres con objetos y ciertas entidades directamente con las manos.
            </p>
          </div>

          <div className="bg-night-panel border border-ember/30 p-6 rounded-2xl space-y-3 relative overflow-hidden sm:col-span-2 lg:col-span-2">
            <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
              NUEVO
            </div>
            <h3 className="font-display text-lg font-bold text-slate-100">Corail Tombstone</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Crea una tumba segura al morir que guarda automáticamente tu inventario completo y experiencia, evitando perder tu progreso.
            </p>
          </div>
        </div>
      </section>

      {/* Mecánicas */}
      <section className="max-w-6xl mx-auto px-4 py-20 space-y-14">
        <div className="text-center space-y-4 animate-rise">
          <span className="font-pixel text-[10px] text-enchant tracking-wider">MECÁNICAS</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
            Supervivencia con más profundidad
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Diseñado para que cada decisión importe y la compañía de otros jugadores cambie
            totalmente la partida.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<VillagerIcon className="w-6 h-6" />}
            title="Aldeanos interactivos"
            text="Contrátalos, dales órdenes y haz que formen parte activa de la economía y defensa de tu asentamiento."
          />
          <FeatureCard
            icon={<RingIcon className="w-6 h-6" />}
            title="Sistema de matrimonio"
            text="Consigue esposa o esposo dentro del servidor, comparte hogar y teletranspórtate hacia tu pareja."
          />
          <FeatureCard
            icon={<MapIcon className="w-6 h-6" />}
            title="Exploración y peligro"
            text="Calabozos procedurales, biomas desafiantes y dimensiones ocultas con jefes personalizados."
          />
        </div>
      </section>

      {/* Jefes y botines */}
      <section className="border-t border-night-line">
        <div className="max-w-6xl mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="font-pixel text-[10px] text-ember tracking-wider">DESAFÍO NOCTURNO</span>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-slate-100">
              Jefes legendarios, botines épicos
            </h3>
            <p className="text-slate-400 leading-relaxed text-lg">
              Prepárate para las noches más oscuras. El mundo de Tula Land esconde criaturas
              colosales que requieren estrategia, pociones avanzadas y la ayuda de tu clan o
              pareja para ser derrotadas. Consigue armaduras y armas míticas exclusivas que no
              existen en el juego base.
            </p>
            <ul className="space-y-3 text-slate-300">
              <ListItem icon={<SwordIcon className="w-5 h-5 text-ember" />}>
                Armamento y herramientas forjadas con materiales de mods avanzados.
              </ListItem>
              <ListItem icon={<ShieldIcon className="w-5 h-5 text-ember" />}>
                Sistemas de combate mejorados con animaciones y combos dinámicos.
              </ListItem>
              <ListItem icon={<MapIcon className="w-5 h-5 text-ember" />}>
                Zonas protegidas para construir tu base sin miedo a los grieferos.
              </ListItem>
            </ul>
          </div>

          <div className="relative bg-night-panel p-8 rounded-2xl border border-night-line space-y-6 overflow-hidden">
            <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-enchant/10 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="w-10 h-10 rounded-lg bg-enchant/10 border border-enchant/30 flex items-center justify-center">
                <GaugeIcon className="w-5 h-5 text-enchant" />
              </span>
              <h4 className="font-display text-xl font-bold text-slate-100">Rendimiento y estabilidad</h4>
            </div>
            <p className="relative text-slate-400 leading-relaxed">
              A pesar de tener mods pesados, el servidor está optimizado al máximo para
              garantizar una experiencia fluida sin lag, permitiéndote disfrutar de
              construcciones masivas y exploración simultánea con todos tus amigos.
            </p>
            <div className="relative pt-4 border-t border-night-line flex justify-between font-stat text-xs text-slate-500 uppercase tracking-wider">
              <span>Versión: NeoForge 1.21.1</span>
              <span className="text-enchant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-enchant animate-flicker" />
                En línea
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode
  title: string
  text: string
}) {
  return (
    <div className="group bg-night-panel p-8 rounded-2xl border border-night-line space-y-4 hover:border-enchant/40 transition-colors">
      <div className="w-12 h-12 rounded-xl bg-enchant/10 border border-enchant/20 flex items-center justify-center text-enchant group-hover:bg-enchant/15 transition-colors">
        {icon}
      </div>
      <h3 className="font-display text-xl font-bold text-slate-100">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{text}</p>
    </div>
  )
}

function ListItem({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 shrink-0">{icon}</span>
      <span>{children}</span>
    </li>
  )
}