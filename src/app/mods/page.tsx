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

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-8">
        <h1 className="text-3xl font-extrabold text-emerald-400">Lista de Mods Oficiales</h1>
        <p className="text-slate-400">Aquí tienes todos los complementos necesarios para jugar en Tula Land 2k26.</p>

        {loading ? (
          <p className="text-slate-500">Cargando mods desde Supabase...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mods.map((mod) => (
              <div key={mod.id} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl flex flex-col justify-between space-y-4 shadow-lg">
                <div>
                  <span className="text-xs uppercase tracking-wider bg-slate-800 text-emerald-400 px-2 py-1 rounded font-semibold">
                    {mod.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-100 mt-2">{mod.name}</h3>
                  <p className="text-slate-400 text-sm mt-1">{mod.description}</p>
                </div>
                <a 
                  href={mod.download_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-block text-center bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 py-2 rounded-xl text-sm font-semibold transition"
                >
                  Descargar Mod ↗
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}