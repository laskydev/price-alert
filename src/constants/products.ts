//TODO Tweak this shit, is a temporal for testing and very manual

export type MarketsAvailableIds = 'walmart' | 'soriana' | 'heb';

export interface Market {
  id: MarketsAvailableIds;
  url: string;
}

export interface Product {
  id: string;
  name: string;
  historicalMaxPrice?: string;
  hitoricalMinPrice?: string;
  lastDateUpdate?: string;
  currentPrice?: number;
  markets?: Array<Market>;
}

export const allProducts: Array<Product> = [
  {
    id: 'jitomate-saladet',
    name: 'Jitomate Saladet',
    markets: [
      {
        id: 'walmart',
        url: 'https://super.walmart.com.mx/ip/jitomate-saladet-por-kilo/00000000004087',
      },
      {
        id: 'soriana',
        url: 'https://www.soriana.com/jitomate-huaje-saladette-kg/480.html',
      },
      {
        id: 'heb',
        url: 'https://www.heb.com.mx/tomate-huaje-supremo-1-kg-332209.html',
      },
    ],
  },
  {
    id: 'cebolla-blanca',
    name: 'Cebolla Blanca',
    markets: [
      {
        id: 'walmart',
        url: 'https://super.walmart.com.mx/ip/cebolla-blanca-por-kilo/00000000004663',
      },
      {
        id: 'soriana',
        url: 'https://www.soriana.com/cebolla-blanca-kg/157.html',
      },
      {
        id: 'heb',
        url: 'https://www.heb.com.mx/cebolla-blanca-limpia-1-kg-24162.html',
      },
    ],
  },
  {
    id: 'frijol-pinto',
    name: 'Frijol Pinto',
    markets: [
      {
        id: 'walmart',
        url: 'https://super.walmart.com.mx/ip/frijol-pinto-verde-valle-1-kg/00750107130144',
      },
      {
        id: 'soriana',
        url: 'https://www.soriana.com/frijol-pinto-verde-valle-900-gr/2231598.html',
      },
      {
        id: 'heb',
        url: 'https://www.heb.com.mx/pedidos-recurrentes/alimentos/basicos/verde-valle-frijol-pinto-900-gr-402615.html',
      },
    ],
  },
];
