import type { ServiceCategory } from '../data/types'

interface CategoryHeroCardProps {
  category: ServiceCategory
  onClick: (id: ServiceCategory['id']) => void
}

export function CategoryHeroCard({ category, onClick }: CategoryHeroCardProps) {
  return (
    <button
      className="group relative min-h-60 overflow-hidden rounded-3xl border border-white/10 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200/50 hover:shadow-[0_0_45px_rgba(34,211,238,0.22)]"
      onClick={() => onClick(category.id)}
      type="button"
    >
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: category.backgroundImage }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/55 to-slate-900/90" />

      <div className="relative flex h-full flex-col justify-end p-6">
        <span className="mb-3 inline-flex w-fit rounded-full border border-cyan-200/40 bg-cyan-300/20 px-3 py-1 text-sm text-cyan-50">
          {category.icon} {category.navLabel}
        </span>
        <h3 className="font-['Sora'] text-3xl font-semibold text-white">{category.title}</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-200/90">{category.subtitle}</p>
      </div>
    </button>
  )
}
