import { FaqSection } from '../sections/FaqSection'
import { HeroCatalogSection } from '../sections/HeroCatalogSection'
import { serviceCategories } from '../data/catalog'
import type { CategoryId } from '../data/types'

interface HomePageProps {
  onCategorySelect: (categoryId: CategoryId) => void
}

export function HomePage({ onCategorySelect }: HomePageProps) {
  return (
    <div>
      <HeroCatalogSection categories={serviceCategories} onCardClick={onCategorySelect} />
      <FaqSection />
    </div>
  )
}
