import type { NavItem, SectionId } from '../data/types'

interface NavMenuProps {
  items: NavItem[]
  activeId: SectionId
  orientation: 'vertical' | 'horizontal'
  onNavigate: (id: SectionId) => void
}

export function NavMenu({
  items,
  activeId,
  orientation,
  onNavigate,
}: NavMenuProps) {
  const isVertical = orientation === 'vertical'

  return (
    <nav
      className={
        isVertical
          ? 'flex flex-col gap-2'
          : 'flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
      }
    >
      {items.map((item) => {
        const isActive = item.id === activeId

        return (
          <button
            key={item.id}
            className={[
              'group flex items-center gap-3 rounded-xl border px-3 py-2 text-sm transition-all duration-300',
              isVertical ? 'justify-start' : 'shrink-0',
              'whitespace-nowrap',
              isActive
                ? 'border-cyan-300/60 bg-cyan-400/20 text-cyan-100 shadow-[0_0_28px_rgba(34,211,238,0.25)]'
                : 'border-white/10 bg-white/5 text-slate-300 hover:border-cyan-200/40 hover:bg-cyan-300/10 hover:text-cyan-100',
            ].join(' ')}
            onClick={() => onNavigate(item.id)}
            type="button"
          >
            <span className="text-base">{item.icon}</span>
            <span className="font-medium">{item.label}</span>
          </button>
        )
      })}
    </nav>
  )
}
