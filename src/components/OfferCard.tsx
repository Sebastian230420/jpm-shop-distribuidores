import type { CategoryId, PriceMode, ServiceOffer } from '../data/types'
import { getSalesPhoneByCategory } from '../data/distributor'
import { buildPurchaseMessage, buildWhatsAppUrl } from '../utils/whatsapp'

interface OfferCardProps {
  offer: ServiceOffer
  categoryLabel: string
  categoryId: CategoryId
  priceMode: PriceMode
}

export function OfferCard({ offer, categoryLabel, categoryId, priceMode }: OfferCardProps) {
  const displayedPrice =
    priceMode === 'colaborador' ? offer.collaboratorPrice ?? offer.price : offer.price
  const badgeLabel =
    offer.badge ?? (typeof offer.stock === 'number' ? `Stock ${offer.stock}` : 'Disponible')
  const description = offer.description ?? 'Activa tu cuenta al instante.'
  const priceModeLabel = priceMode === 'colaborador' ? 'colaborador' : 'cliente'
  const purchaseMessage = buildPurchaseMessage(
    categoryLabel,
    offer.name,
    displayedPrice,
    priceModeLabel,
  )
  const purchasePhone = getSalesPhoneByCategory(categoryId)
  const purchaseLink = buildWhatsAppUrl(purchasePhone, purchaseMessage)

  return (
    <article className="rounded-2xl border border-white/10 bg-slate-900/45 p-5 backdrop-blur-xl transition duration-300 hover:border-cyan-200/45 hover:bg-slate-900/65">
      {offer.image && (
        <div className="mb-4 aspect-square w-full overflow-hidden rounded-xl bg-slate-950/60">
          <img
            alt={`Imagen de ${offer.name}`}
            className="h-full w-full object-cover object-center"
            loading="lazy"
            src={offer.image}
          />
        </div>
      )}
      <div className="mb-4 flex items-center justify-between gap-4">
        <h4 className="text-lg font-semibold text-white">{offer.name}</h4>
        <span className="rounded-full border border-cyan-300/45 bg-cyan-300/20 px-3 py-1 text-xs font-medium text-cyan-100">
          {badgeLabel}
        </span>
      </div>
      <p className="text-sm text-slate-300/90">{description}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {offer.duration && (
          <span className="rounded-full border border-white/15 bg-slate-800/80 px-2 py-1 text-xs text-slate-200">
            {offer.duration}
          </span>
        )}
        {typeof offer.stock === 'number' && (
          <span className="rounded-full border border-white/15 bg-slate-800/80 px-2 py-1 text-xs text-slate-200">
            Stock: {offer.stock}
          </span>
        )}
      </div>
      <p className="mt-5 text-xl font-semibold text-emerald-300">{displayedPrice}</p>
      <p className="mt-1 text-xs text-slate-400">
        Precio para {priceMode === 'colaborador' ? 'colaborador' : 'cliente'}
      </p>
      <a
        className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-emerald-300/45 bg-emerald-400/20 px-4 py-2.5 text-sm font-semibold text-emerald-100 transition hover:bg-emerald-400/30"
        href={purchaseLink}
        rel="noreferrer"
        target="_blank"
      >
        Comprar por WhatsApp
      </a>
    </article>
  )
}
