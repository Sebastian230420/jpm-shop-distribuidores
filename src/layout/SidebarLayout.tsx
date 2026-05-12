import { useState, type ReactNode } from 'react'
import { NavMenu } from '../components/NavMenu'
import type { NavItem, SectionId } from '../data/types'
import logoJpm from '../assets/logojpm.jpeg'

interface SidebarLayoutProps {
  activeSection: SectionId
  navItems: NavItem[]
  onNavigate: (sectionId: SectionId) => void
  children: ReactNode
}

export function SidebarLayout({
  activeSection,
  navItems,
  onNavigate,
  children,
}: SidebarLayoutProps) {
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleMobileNavigate = (sectionId: SectionId) => {
    onNavigate(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="font-['Space_Grotesk'] relative min-h-screen overflow-x-clip bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-emerald-400/10 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-sky-500/10 blur-[120px]" />
      </div>
      <button
        aria-expanded={isDesktopMenuOpen}
        className="fixed left-4 top-4 z-[65] hidden h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/40 bg-slate-900/80 text-xl text-cyan-100 backdrop-blur-lg transition hover:bg-cyan-300/20 lg:inline-flex"
        onClick={() => setIsDesktopMenuOpen((prev) => !prev)}
        type="button"
      >
        <span aria-hidden>{isDesktopMenuOpen ? '✕' : '☰'}</span>
      </button>

      {isDesktopMenuOpen && (
        <button
          aria-label="Cerrar menú lateral"
          className="fixed inset-0 z-30 hidden bg-slate-950/40 lg:block"
          onClick={() => setIsDesktopMenuOpen(false)}
          type="button"
        />
      )}

      <aside
        className={[
          'fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-slate-950 px-6 pb-8 pt-20 backdrop-blur-xl transition-transform duration-300 lg:flex lg:flex-col',
          isDesktopMenuOpen
            ? 'lg:pointer-events-auto lg:translate-x-0'
            : 'lg:pointer-events-none lg:-translate-x-full',
        ].join(' ')}
      >
        <div className="flex items-center gap-3">
          <img
            alt="JPM Shop logo"
            className="h-11 w-11 rounded-xl border border-cyan-300/30 object-cover shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            src={logoJpm}
          />
          <p className="text-sm font-medium tracking-[0.4em] text-cyan-300/90">JPM SHOP</p>
        </div>
        <p className="font-['Sora'] mt-4 text-2xl font-semibold text-white">Servicios Premium</p>
        <p className="mt-2 text-sm text-slate-300/80">
          Catálogo digital con activación rápida.
        </p>

        <div className="mt-8">
          <NavMenu
            activeId={activeSection}
            items={navItems}
            onNavigate={onNavigate}
            orientation="vertical"
          />
        </div>
      </aside>

      <button
        aria-controls="mobile-menu"
        aria-expanded={isMobileMenuOpen}
        className="fixed left-4 top-4 z-[65] inline-flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/40 bg-slate-900/80 text-xl text-cyan-100 backdrop-blur-lg transition hover:bg-cyan-300/20 lg:hidden"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        type="button"
      >
        <span aria-hidden>{isMobileMenuOpen ? '✕' : '☰'}</span>
      </button>

      <div
        className={[
          'fixed inset-0 z-[70] lg:hidden',
          isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none',
        ].join(' ')}
      >
        <button
          aria-label="Cerrar menú"
          className={[
            'absolute inset-0 bg-slate-950/70 backdrop-blur-sm transition-opacity duration-300',
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0',
          ].join(' ')}
          onClick={() => setIsMobileMenuOpen(false)}
          type="button"
        />

        <aside
          className={[
            'absolute inset-y-0 left-0 w-[85vw] max-w-xs border-r border-white/10 bg-slate-950/95 px-5 pb-5 pt-20 backdrop-blur-xl transition-transform duration-300',
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full',
          ].join(' ')}
          id="mobile-menu"
        >
          <div className="mb-5 flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              <img
                alt="JPM Shop logo"
                className="h-10 w-10 rounded-xl border border-cyan-300/30 object-cover"
                src={logoJpm}
              />
              <div>
                <p className="text-xs font-medium tracking-[0.3em] text-cyan-300/90">JPM SHOP</p>
                <p className="mt-1 text-sm text-slate-300/85">Explora categorías</p>
              </div>
            </div>
            <button
              className="rounded-lg border border-white/15 px-2 py-1 text-xs text-slate-300"
              onClick={() => setIsMobileMenuOpen(false)}
              type="button"
            >
              Cerrar
            </button>
          </div>

          <NavMenu
            activeId={activeSection}
            items={navItems}
            onNavigate={handleMobileNavigate}
            orientation="vertical"
          />
        </aside>
      </div>

      <main
        className={[
          'relative z-10 px-4 pb-20 pt-24 sm:px-8 sm:pt-28 lg:px-12 lg:pt-20',
          isDesktopMenuOpen ? 'lg:ml-72' : 'lg:ml-0',
        ].join(' ')}
      >
        {children}
      </main>
    </div>
  )
}
