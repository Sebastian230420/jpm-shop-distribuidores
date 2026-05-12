export const buildWhatsAppUrl = (phone: string, message: string) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

export const buildPurchaseMessage = (
  categoryLabel: string,
  productName: string,
  price: string,
  priceModeLabel: string,
) =>
  `Hola, quiero comprar ${productName} de la categoría ${categoryLabel}. Precio (${priceModeLabel}): ${price}. ¿Está disponible?`
