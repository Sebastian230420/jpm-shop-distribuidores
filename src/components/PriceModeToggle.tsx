import type { PriceMode } from '../data/types'

interface PriceModeToggleProps {
  mode: PriceMode
  onChange: (mode: PriceMode) => void
}

export function PriceModeToggle({ mode, onChange }: PriceModeToggleProps) {
  return (
    <div className="fixed right-4 top-4 z-[65] inline-flex rounded-xl border border-cyan-300/35 bg-slate-900/85 p-1 backdrop-blur-lg">
      <button
        className={[
          'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition',
          mode === 'cliente'
            ? 'bg-cyan-300/25 text-cyan-100'
            : 'text-slate-300 hover:bg-white/10 hover:text-cyan-100',
        ].join(' ')}
        onClick={() => onChange('cliente')}
        type="button"
      >
        <span aria-hidden>🛒</span>
        Cliente
      </button>
      <button
        className={[
          'inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition',
          mode === 'colaborador'
            ? 'bg-emerald-300/25 text-emerald-100'
            : 'text-slate-300 hover:bg-white/10 hover:text-emerald-100',
        ].join(' ')}
        onClick={() => onChange('colaborador')}
        type="button"
      >
        <span aria-hidden>🤝</span>
        Colaborador
      </button>
    </div>
  )
}
