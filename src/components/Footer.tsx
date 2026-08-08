import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-night-line bg-night-soft">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left space-y-1">
          <span className="font-display font-bold text-slate-100">TULA LAND</span>
          <p className="text-sm text-slate-500 max-w-xs">
            Servidor de Minecraft entre amigos. Mods pesados, mundo persistente, cero prisa.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-400">
          <Link href="/mods" className="hover:text-enchant transition-colors">Mods</Link>
          <Link href="/tlauncher" className="hover:text-enchant transition-colors">TLauncher</Link>
          <Link href="/conexion" className="hover:text-enchant transition-colors">Conexión</Link>
        </div>

        <div className="text-center md:text-right space-y-1">
          <a
            href="https://www.tiktok.com/@by.clotch?_r=1&_t=98i5fo09cVx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-ember hover:text-ember-soft transition-colors font-medium"
          >
            By.Clotch
          </a>
          <p className="text-xs text-slate-600 font-stat">© 2026 Tula Land</p>
        </div>
      </div>
    </footer>
  )
}
