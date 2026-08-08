import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-slate-900 border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="text-xl font-black text-emerald-400 tracking-wider">TULA LAND 2K26</span>
        <div className="flex gap-6 text-sm font-medium text-slate-300">
          <Link href="/" className="hover:text-emerald-400 transition">Inicio</Link>
          <Link href="/mods" className="hover:text-emerald-400 transition">Mods</Link>
          <Link href="/tlauncher" className="hover:text-emerald-400 transition">TLauncher</Link>
          <Link href="/conexion" className="hover:text-emerald-400 transition">Conexión (Tailscale)</Link>
        </div>
      </div>
    </nav>
  )
}