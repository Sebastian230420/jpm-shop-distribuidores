import type { CategoryId } from './types'

export const distributorBenefits: string[] = [
  'Acceso a panel con precios mayoristas.',
  'Soporte prioritario para tus ventas.',
  'Plantillas de venta para redes sociales.',
  'Reposición rápida de servicios con garantía.',
]

export const distributorActivationPrice = 'S/ 59.00'
export const productsPhone = '51974718229'
export const generalPhone = '51913847098'
export const distributorPhone = generalPhone
export const distributorMessage = 'Hola quiero ser distribuidor'

export const getSalesPhoneByCategory = (categoryId: CategoryId) =>
  categoryId === 'productos' ? productsPhone : generalPhone
