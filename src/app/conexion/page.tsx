import Navbar from '@/components/Navbar'

export default function ConexionPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-6">
        <h1 className="text-3xl font-extrabold text-emerald-400">Conexión mediante Tailscale</h1>
        <p className="text-slate-400">Como el servidor estara abierto 24/7 utilizaremos Tailscale para conectarnos de forma segura.</p>
        
        <div className="space-y-4 bg-slate-900 p-6 rounded-2xl border border-slate-800 text-slate-300">
          <h2 className="text-xl font-bold text-emerald-300">Pasos para unirse:</h2>
          <ol className="space-y-3 list-decimal list-inside">
            <li className="pl-2">Crea una cuenta en <a href="https://tailscale.com" target="_blank" className="text-emerald-400 underline">Tailscale</a>.</li>
            <li className="pl-2">Sal de la cuenta que creaste y toca la  <a href="https://login.tailscale.com/admin/invite/3oPug65ou68dqrjwcM6X11" target="_blank" className="text-emerald-400 underline">Invitacion</a>.</li>
            <li className="pl-2">Descarga e instala <a href="https://tailscale.com" target="_blank" className="text-emerald-400 underline">Tailscale</a> en tu PC.</li>
            <li className="pl-2">Inicia sesión con tu cuenta.</li>
            <li className="pl-2">Copia la IP de **macboock-pro-de-clotch** (ej. `100.x.x.x`).</li>
            <li className="pl-2">Abre Minecraft.</li>
            <li className="pl-2">Ve a multijugador.</li>
            <li className="pl-2">Añadir Servidor.</li>
            <li className="pl-2">Agregale un Nombre (Tula Land).</li>
            <li className="pl-2">Introduce esa IP en el puerto.</li>
            <li className="pl-2">Conéctate a Tula Land.</li>
          </ol>
          <center> <h3 style={{ color: 'red' }}>" Siempre que quieras Jugar debes tener abierto el Tailscale en tu computadora "</h3></center>
        </div>
      </div>
    </main>
  )
}