import { Link } from 'react-router-dom'
import { ServiceCategorySection } from '../sections/ServiceCategorySection'
import type { PriceMode, ServiceCategory } from '../data/types'

interface CategoryPageProps {
  category: ServiceCategory
  priceMode: PriceMode
}

export function CategoryPage({ category, priceMode }: CategoryPageProps) {
  return (
    <div className="space-y-6 pt-4 sm:pt-6 lg:pt-8">
      <Link
        className="inline-flex items-center gap-2 rounded-xl border border-cyan-300/40 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100 transition hover:bg-cyan-400/20"
        to="/"
      >
        <span aria-hidden>←</span>
        Volver al inicio
      </Link>

      <ServiceCategorySection category={category} priceMode={priceMode} />
    </div>
  )
}
