import { CategoryHeroCard } from '../components/CategoryHeroCard'
import type { CategoryId, ServiceCategory } from '../data/types'

interface HeroCatalogSectionProps {
  categories: ServiceCategory[]
  onCardClick: (id: CategoryId) => void
}

export function HeroCatalogSection({ categories, onCardClick }: HeroCatalogSectionProps) {
  return (
    <section id="home" className="scroll-mt-24">
      <div className="rounded-3xl border border-white/10 bg-slate-900/35 p-6 backdrop-blur-xl sm:p-10">
        <p className="text-center text-sm font-medium tracking-[0.35em] text-cyan-300/90 lg:text-left">
          CATALOGO DIGITAL
        </p>
        <h1 className="font-['Sora'] mx-auto mt-4 max-w-3xl text-center text-4xl font-semibold leading-tight text-white sm:text-5xl lg:mx-0 lg:text-left">
          Servicios premium para vender o usar al instante.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-slate-300/90 sm:text-base lg:mx-0 lg:text-left">
          Elige tu categoría, revisa precios y activa en minutos. Plataforma pensada para compradores
          directos y distribuidores.
        </p>

        <div className="mx-auto mt-10 w-full grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {categories.map((category) => (
            <CategoryHeroCard key={category.id} category={category} onClick={onCardClick} />
          ))}
        </div>
      </div>
    </section>
  )
}
