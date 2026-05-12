import { OfferCard } from '../components/OfferCard'
import type { PriceMode, ServiceCategory } from '../data/types'

interface ServiceCategorySectionProps {
  category: ServiceCategory
  priceMode: PriceMode
}

export function ServiceCategorySection({ category, priceMode }: ServiceCategorySectionProps) {
  return (
    <section
      id={category.id}
      className="scroll-mt-24 rounded-3xl border border-white/10 bg-slate-900/35 p-6 backdrop-blur-xl sm:p-8"
    >
      <div className="mb-7 flex flex-col gap-3">
        <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-200/40 bg-cyan-300/20 px-3 py-1 text-sm text-cyan-50">
          {category.icon} {category.navLabel}
        </span>
        <h2 className="font-['Sora'] text-3xl font-semibold text-white">{category.subtitle}</h2>
        <p className="max-w-3xl text-sm text-slate-300/90 sm:text-base">{category.description}</p>
        <p className="max-w-3xl text-sm text-emerald-300/90">{category.spotlight}</p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {category.offers.map((offer) => (
          <OfferCard
            key={offer.name}
            categoryId={category.id}
            categoryLabel={category.navLabel}
            offer={offer}
            priceMode={priceMode}
          />
        ))}
      </div>
    </section>
  )
}
