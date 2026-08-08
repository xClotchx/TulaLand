'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { MenuIcon, CloseIcon } from './icons'

const LINKS = [
  { href: '/', label: 'Inicio' },
  { href: '/mods', label: 'Mods' },
  { href: '/tlauncher', label: 'TLauncher' },
  { href: '/conexion', label: 'Conexión' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-night-line/80 bg-night/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <span className="w-2.5 h-2.5 bg-ember rounded-sm animate-flicker" />
          <span className="font-display font-bold text-lg tracking-wide text-slate-100 group-hover:text-ember transition-colors">
            TULA LAND
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 text-sm font-medium">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg transition-colors ${
                  active
                    ? 'text-ember bg-ember/10'
                    : 'text-slate-300 hover:text-enchant hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-slate-300 hover:text-ember transition-colors p-2 -mr-2"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-night-line bg-night-soft px-4 py-3 flex flex-col gap-1">
          {LINKS.map((link) => {
            const active = pathname === link.href
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active ? 'text-ember bg-ember/10' : 'text-slate-300 hover:text-enchant hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
