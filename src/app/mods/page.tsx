'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Navbar from '@/components/Navbar'

type Mod = {
  id: number
  name: string
  description: string
  download_url: string
  category: string
  created_at?: string
}

export default function ModsPage() {
  const [mods, setMods] = useState<Mod[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchMods() {
      const { data, error } = await supabase.from('mods').select('*')
      if (error) console.error('Error fetching mods:', error)
      else setMods(data || [])
      setLoading(false)
    }
    fetchMods()
  }, [])

  // Tomamos los últimos 13 mods agregados (asumiendo que un ID mayor o un campo created_at define los más recientes)
  const recentMods = [...mods]
    .sort((a, b) => (b.id ?? 0) - (a.id ?? 0))
    .slice(0, 13)

  return (
    <main className="min-h-screen bg-night text-slate-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-12">
        <div className="space-y-3">
          <span className="font-pixel text-[10px] text-enchant tracking-wider">CATÁLOGO</span>
          <h1 className="font-display text-4xl font-bold text-slate-100">Lista de mods oficiales</h1>
          <p className="text-slate-400 text-lg">
            Aquí tienes todos los mods y complementos necesarios para jugar en Tula Land.
          </p>
        </div>

        {loading ? (
          <div className="space-y-6">
            <div className="bg-night-panel border border-night-line p-6 rounded-2xl h-32 animate-pulse" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="bg-night-panel border border-night-line p-6 rounded-2xl h-40 animate-pulse" />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Sección de Nuevos Ingresos (Últimos 5 mods) */}
            {recentMods.length > 0 && (
              <section className="space-y-4">
                <div className="flex items-center gap-3">
                  <h2 className="font-display text-2xl font-bold text-slate-100">🔥 Agregados recientemente</h2>
                  <span className="font-stat text-[10px] uppercase tracking-wider bg-ember/20 text-ember border border-ember/30 px-2.5 py-0.5 rounded-full font-semibold animate-pulse">
                    Nuevo
                  </span>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {recentMods.map((mod) => (
                    <div key={`recent-${mod.id}`} className="bg-night-panel border border-ember/30 p-4 rounded-2xl flex flex-col justify-between space-y-3 relative overflow-hidden hover:border-ember transition-colors">
                      <div className="absolute top-0 right-0 bg-ember text-night font-pixel text-[8px] px-2 py-0.5 rounded-bl font-bold">
                        NUEVO
                      </div>
                      <div className="space-y-1">
                        <span className="font-stat text-[10px] uppercase tracking-wider text-enchant">
                          {mod.category}
                        </span>
                        <h3 className="font-display text-base font-bold text-slate-100 line-clamp-1">{mod.name}</h3>
                      </div>
                      <a
                        href={mod.download_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-center bg-ember/10 hover:bg-ember/20 text-ember border border-ember/30 py-1.5 rounded-xl text-xs font-semibold transition-colors"
                      >
                        Descargar ↗
                      </a>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Catálogo Completo */}
            <section className="space-y-6 pt-6 border-t border-night-line">
              <h2 className="font-display text-2xl font-bold text-slate-100">Todos los Mods</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {mods.map((mod) => (
                  <div key={mod.id} className="bg-night-panel border border-night-line p-6 rounded-2xl flex flex-col justify-between space-y-4 hover:border-enchant/40 transition-colors">
                    <div>
                      <span className="font-stat text-[11px] uppercase tracking-wider bg-black/30 text-enchant px-2 py-1 rounded">
                        {mod.category}
                      </span>
                      <h3 className="font-display text-xl font-bold text-slate-100 mt-2">{mod.name}</h3>
                      <p className="text-slate-400 text-sm mt-1">{mod.description}</p>
                    </div>
                    <a
                      href={mod.download_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-center bg-ember/10 hover:bg-ember/20 text-ember border border-ember/30 py-2 rounded-xl text-sm font-semibold transition-colors"
                    >
                      Descargar mod ↗
                    </a>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  )
}