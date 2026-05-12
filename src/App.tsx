import { useEffect, useMemo } from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { serviceCategories, sidebarItems } from './data/catalog'
import type { PriceMode, SectionId } from './data/types'
import { SidebarLayout } from './layout/SidebarLayout'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'

const routeBySection: Record<SectionId, string> = {
  home: '/',
  streaming: '/streaming',
  ia: '/ia',
  'servicios-descuento': '/servicios-descuento',
  licencias: '/licencias',
  productos: '/productos',
  distributor: '/',
  faq: '/',
}

const getActiveSectionFromPath = (pathname: string): SectionId => {
  if (pathname === '/') {
    return 'home'
  }

  const categoryMatch = serviceCategories.find((category) => `/${category.id}` === pathname)
  return categoryMatch?.id ?? 'home'
}

function App() {
  const navItems = useMemo(() => sidebarItems, [])
  const navigate = useNavigate()
  const location = useLocation()
  const priceMode: PriceMode = 'cliente'

  const activeSection = getActiveSectionFromPath(location.pathname)

  const goToSection = (sectionId: SectionId) => {
    const destination = routeBySection[sectionId]
    navigate(destination)
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <SidebarLayout
      activeSection={activeSection}
      navItems={navItems}
      onNavigate={goToSection}
    >
      <Routes>
        <Route path="/" element={<HomePage onCategorySelect={goToSection} />} />
        {serviceCategories.map((category) => (
          <Route
            key={category.id}
            element={<CategoryPage category={category} priceMode={priceMode} />}
            path={`/${category.id}`}
          />
        ))}
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
    </SidebarLayout>
  )
}

export default App
