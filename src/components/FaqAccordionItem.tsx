import type { FaqItem } from '../data/types'

interface FaqAccordionItemProps {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}

export function FaqAccordionItem({ item, isOpen, onToggle }: FaqAccordionItemProps) {
  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-slate-900/45 backdrop-blur-xl">
      <button
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        onClick={onToggle}
        type="button"
      >
        <span className="text-sm font-medium text-slate-100 sm:text-base">{item.question}</span>
        <span
          aria-hidden
          className={[
            'inline-flex h-8 w-8 items-center justify-center rounded-full border text-lg transition duration-300',
            isOpen
              ? 'rotate-45 border-cyan-300/70 bg-cyan-300/20 text-cyan-100'
              : 'border-white/20 bg-white/5 text-slate-300',
          ].join(' ')}
        >
          +
        </span>
      </button>
      <div
        className={[
          'grid transition-all duration-300 ease-out',
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        ].join(' ')}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-5 pb-5 text-sm text-slate-300/90">{item.answer}</p>
        </div>
      </div>
    </article>
  )
}
