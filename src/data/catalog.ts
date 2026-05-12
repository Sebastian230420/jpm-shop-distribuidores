import type { NavItem, ServiceCategory } from './types'

interface SheetCatalogRow {
  categoria: string
  plataforma: string
  Duracion: string
  precio: number | string
  stock: number
  imagen: string
}

const sheetCatalogRows: SheetCatalogRow[] = [
  {
    categoria: 'Streaming',
    plataforma: 'youtube premium',
    Duracion: '1 mes',
    precio: 5,
    stock: 4,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346604/a3e10db9-23d1-419b-8169-1c08c90ee38d_bh7fuz.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Netflix Premium',
    Duracion: '1 mes',
    precio: 13,
    stock: 5,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345842/WhatsApp_Image_2026-02-28_at_22.13.54_4_qlrhkr.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Disney Premium',
    Duracion: '1 mes',
    precio: 6,
    stock: 4,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345842/WhatsApp_Image_2026-02-28_at_22.13.54_3_gdlygt.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Hbo Max',
    Duracion: '1 mes',
    precio: 4,
    stock: 6,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345843/WhatsApp_Image_2026-02-28_at_22.13.55_1_tn1ijy.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Amazon Prime Video',
    Duracion: '1 mes',
    precio: 5,
    stock: 7,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345843/WhatsApp_Image_2026-02-28_at_22.13.55_fozwdu.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Crunchyroll Mega Fan',
    Duracion: '1 mes',
    precio: 3.5,
    stock: 10,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345843/WhatsApp_Image_2026-02-28_at_22.13.57_iajb1l.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Paramount',
    Duracion: '1 mes',
    precio: 4,
    stock: 10,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346603/5f8984b6-bc4d-4b25-a626-548a899c9154_cupnob.jpg',
  },
  {
    categoria: 'Streaming',
    plataforma: 'AppleTV',
    Duracion: '1 mes',
    precio: 5,
    stock: 5,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346983/ChatGPT_Image_28_feb_2026_22_36_08_zgmmow.png',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Movistar TV',
    Duracion: '1 mes',
    precio: 15,
    stock: 4,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772347072/ChatGPT_Image_28_feb_2026_22_37_37_ftkghv.png',
  },
  {
    categoria: 'Streaming',
    plataforma: 'DGO',
    Duracion: '1 mes',
    precio: 15,
    stock: 3,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772347208/ChatGPT_Image_28_feb_2026_22_39_37_lnizfo.png',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Capcut 1 Cuenta Completa',
    Duracion: '1 mes',
    precio: 10,
    stock: 4,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346363/ChatGPT_Image_28_feb_2026_22_25_54_jo08b6.png',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Canva Pro',
    Duracion: '1 mes',
    precio: 2,
    stock: 15,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346288/ChatGPT_Image_28_feb_2026_22_24_36_yrsqgk.png',
  },
  {
    categoria: 'Streaming',
    plataforma: 'Spotify Premium',
    Duracion: '1 mes',
    precio: 9,
    stock: 8,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345843/WhatsApp_Image_2026-02-28_at_22.13.54_mm7yhp.jpg',
  },
  {
    categoria: 'IA',
    plataforma: 'Chat GPT Plus',
    Duracion: '1 mes',
    precio: 15,
    stock: 4,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772346737/ChatGPT_Image_28_feb_2026_22_32_05_franvg.png',
  },
  {
    categoria: 'IA',
    plataforma: 'Gemini Pro',
    Duracion: '1 mes',
    precio: 10,
    stock: 12,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772607533/Gemini_Generated_Image_np2p00np2p00np2p_ectu76.png',
  },
  {
    categoria: 'IA',
    plataforma: 'Chat GPT Business',
    Duracion: '1 mes',
    precio: 20,
    stock: 10,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772608306/Gemini_Generated_Image_lrml8nlrml8nlrml_hcedcz.png',
  },
  {
    categoria: 'descuentos',
    plataforma: 'cineplanet',
    Duracion: 'compra unica',
    precio: '50%',
    stock: 5,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772608462/fondo-composicion-cine-plano-dibujado-mano_98292-22570_asxrgv.avif',
  },
  {
    categoria: 'descuentos',
    plataforma: 'smartfit',
    Duracion: '1 mes',
    precio: '50%',
    stock: 8,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772608530/459158804_513988811341933_339373888218399584_n_badntk.jpg',
  },
  {
    categoria: 'descuentos',
    plataforma: 'cruz del sur',
    Duracion: 'compra unica',
    precio: '35%',
    stock: 8,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772608576/unnamed_1_kf8zld.png',
  },
  {
    categoria: 'Licencias',
    plataforma: 'CRM Whatsapp',
    Duracion: '1 mes',
    precio: 25,
    stock: 10,
    imagen:
      'https://res.cloudinary.com/dmu5rujxs/image/upload/v1772608635/Trend_7-_Bogate_mozliwosci_integracji_-_CRM_jako_centralny_wezel_ekosystemu_technologicznego-b602cf96_x1olcm.jpg',
  },
  {
    categoria: 'Licencias',
    plataforma: 'Reporte IA + Plagio',
    Duracion: '1 uso',
    precio: 7,
    stock: 12,
    imagen:
      'https://res.cloudinary.com/dyjczhxtn/image/upload/v1772345711/ChatGPT_Image_27_feb_2026_12_45_43_p.m._a64nrt.png',
  },
  {
    categoria: 'Licencias',
    plataforma: 'Microsoft 365 1 año',
    Duracion: '12 meses',
    precio: 15,
    stock: 5,
    imagen:
      'https://res.cloudinary.com/diuwktezu/image/upload/v1772345842/WhatsApp_Image_2026-02-28_at_22.13.54_2_p48wyz.jpg',
  },
]

const normalizeSheetValue = (value: string) => value.trim().toLowerCase()

const buildPriceLabel = (precio: SheetCatalogRow['precio']) => {
  if (typeof precio === 'number') {
    return `S/ ${precio}`
  }

  const normalized = String(precio).trim()
  if (normalized.includes('%') || normalized.toLowerCase().startsWith('s/')) {
    return normalized
  }

  return `S/ ${normalized}`
}

const buildOffersFromSheet = (categorias: SheetCatalogRow['categoria'] | SheetCatalogRow['categoria'][]) => {
  const validCategories = (Array.isArray(categorias) ? categorias : [categorias]).map(normalizeSheetValue)

  return sheetCatalogRows
    .filter((row) => validCategories.includes(normalizeSheetValue(row.categoria)))
    .map((row) => ({
      name: row.plataforma.trim(),
      price: buildPriceLabel(row.precio),
      duration: row.Duracion.trim(),
      stock: row.stock,
      image: row.imagen.trim(),
    }))
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'streaming',
    navLabel: 'Streaming',
    icon: '📺',
    title: 'Streaming',
    subtitle: 'Entretenimiento premium para todos los días',
    description:
      'Cuentas premium de plataformas top para series, películas y música en alta calidad.',
    spotlight: 'Incluye opciones como Netflix, Spotify y más servicios populares.',
    backgroundImage:
      "linear-gradient(140deg, rgba(2,6,23,.9), rgba(12,74,110,.65)), url('https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&w=1200&q=80')",
    offers: buildOffersFromSheet('Streaming'),
  },
  {
    id: 'ia',
    navLabel: 'IA',
    icon: '🤖',
    title: 'IA',
    subtitle: 'Herramientas de inteligencia artificial premium',
    description:
      'Accesos a plataformas de IA para productividad, automatización y creación de contenido.',
    spotlight: 'Ideal para estudiantes, creadores y equipos que necesitan velocidad.',
    backgroundImage:
      "linear-gradient(140deg, rgba(2,6,23,.9), rgba(21,94,117,.65)), url('https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80')",
    offers: buildOffersFromSheet('IA'),
  },
  {
    id: 'servicios-descuento',
    navLabel: 'Descuentos',
    icon: '💸',
    title: 'Servicios con Descuento',
    subtitle: 'Ahorra en gastos recurrentes del mes',
    description:
      'Pagos y beneficios en servicios seleccionados con tarifas promocionales y soporte directo.',
    spotlight: 'Perfecto para clientes que buscan ahorro real sin complicaciones.',
    backgroundImage:
      "linear-gradient(140deg, rgba(2,6,23,.9), rgba(59,7,100,.65)), url('https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80')",
    offers: buildOffersFromSheet('descuentos'),
  },
  {
    id: 'licencias',
    navLabel: 'Licencias',
    icon: '🔑',
    title: 'Licencias',
    subtitle: 'Software original para uso personal y profesional',
    description:
      'Activaciones digitales de licencias con soporte y guía para instalación segura.',
    spotlight: 'Opciones para Windows, Office y herramientas empresariales.',
    backgroundImage:
      "linear-gradient(140deg, rgba(2,6,23,.9), rgba(22,101,52,.6)), url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80')",
    offers: buildOffersFromSheet('Licencias'),
  },
  {
    id: 'productos',
    navLabel: 'Productos',
    icon: '🛍️',
    title: 'Productos',
    subtitle: 'Productos físicos con precio competitivo',
    description:
      'Catálogo de artículos seleccionados para reventa o compra directa con entrega coordinada.',
    spotlight: 'Incluye celulares, zapatillas y productos con alta rotación.',
    backgroundImage:
      "linear-gradient(140deg, rgba(2,6,23,.9), rgba(91,33,182,.65)), url('https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80')",
    offers: [
      {
        name: 'Celulares',
        description: 'Modelos Android y iPhone sujetos a stock disponible.',
        price: 'Desde S/ 899',
        collaboratorPrice: 'Desde S/ 829',
        badge: 'Tecnologia',
      },
      {
        name: 'Zapatillas',
        description: 'Marcas urbanas y deportivas con tallas por pedido.',
        price: 'Desde S/ 179',
        collaboratorPrice: 'Desde S/ 149',
        badge: 'Moda',
      },
      {
        name: 'Accesorios',
        description: 'Complementos para celular y uso diario al por mayor y menor.',
        price: 'Desde S/ 49',
        collaboratorPrice: 'Desde S/ 39',
        badge: 'Novedad',
      },
    ],
  },
]

export const sidebarItems: NavItem[] = [
  { id: 'home', label: 'Inicio', icon: '🏠' },
  ...serviceCategories.map((category) => ({
    id: category.id,
    label: category.navLabel,
    icon: category.icon,
  })),
]
