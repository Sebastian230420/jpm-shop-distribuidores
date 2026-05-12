import { useState } from 'react'
import { FaqAccordionItem } from '../components/FaqAccordionItem'
import { faqItems } from '../data/faq'

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-24 mt-16 rounded-3xl border border-white/10 bg-slate-900/35 p-6 backdrop-blur-xl sm:p-8 lg:mt-20">
      <div className="max-w-4xl">
        <p className="text-sm font-medium tracking-[0.3em] text-cyan-300/90">FAQ</p>
        <h2 className="font-['Sora'] mt-3 text-3xl font-semibold text-white sm:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="mt-3 text-sm text-slate-300/90 sm:text-base">
          Respuestas rápidas para que compres con total claridad.
        </p>
      </div>

      <div className="mt-7 space-y-3">
        {faqItems.map((item, index) => (
          <FaqAccordionItem
            key={item.question}
            isOpen={openIndex === index}
            item={item}
            onToggle={() => setOpenIndex((previous) => (previous === index ? null : index))}
          />
        ))}
      </div>
    </section>
  )
}
