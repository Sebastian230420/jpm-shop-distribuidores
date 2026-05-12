export type CategoryId =
  | 'streaming'
  | 'ia'
  | 'servicios-descuento'
  | 'licencias'
  | 'productos'

export type SectionId = 'home' | CategoryId | 'distributor' | 'faq'
export type PriceMode = 'cliente' | 'colaborador'

export interface NavItem {
  id: SectionId
  label: string
  icon: string
}

export interface ServiceOffer {
  name: string
  description?: string
  price: string
  collaboratorPrice?: string
  badge?: string
  duration?: string
  stock?: number
  image?: string
}

export interface ServiceCategory {
  id: CategoryId
  navLabel: string
  icon: string
  title: string
  subtitle: string
  description: string
  spotlight: string
  backgroundImage: string
  offers: ServiceOffer[]
}

export interface FaqItem {
  question: string
  answer: string
}
