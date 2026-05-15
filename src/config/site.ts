export const SITE_DOMAIN = 'erzelemfokusz.peterbenceczaun.me' as const;
export const SITE_URL = `https://${SITE_DOMAIN}` as const;

export type Locale = (typeof LOCALES)[number];
export const LOCALES = ['hu', 'en'] as const;
export const DEFAULT_LOCALE: Locale = 'hu';

export interface ContactInfo {
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly phoneDisplay: string;
  readonly facebook: string;
}

export interface Location {
  readonly city: string;
  readonly address: string;
  readonly days: readonly string[];
}

export const CONTACT: ContactInfo = {
  name: 'Kőrösi Edina',
  email: 'erzelemfokusz@gmail.com',
  phone: '+36308724413',
  phoneDisplay: '+36 (30) 872 4413',
  facebook: 'https://www.facebook.com/erzelemfokusz/',
} as const;

export const LOCATIONS: readonly Location[] = [
  {
    city: 'Veszprém',
    address: 'Stadion u. 1.',
    days: ['Hétfő', 'Kedd', 'Szerda'],
  },
  {
    city: 'Budapest',
    address: 'Mester Mentál Tér, Mester u. 83.',
    days: ['Péntek', 'Szombat'],
  },
] as const;

export const LOCATIONS_EN: readonly Location[] = [
  {
    city: 'Veszprém',
    address: 'Stadion u. 1.',
    days: ['Monday', 'Tuesday', 'Wednesday'],
  },
  {
    city: 'Budapest',
    address: 'Mester Mentál Tér, Mester u. 83.',
    days: ['Friday', 'Saturday'],
  },
] as const;

export type ServiceId = 'individual' | 'couples';

export interface ServiceFee {
  readonly city: string;
  readonly amount: string;
}

export interface ServicePricing {
  readonly id: ServiceId;
  readonly fees: readonly ServiceFee[];
}

export const PRICING: readonly ServicePricing[] = [
  {
    id: 'individual',
    fees: [
      { city: 'Budapest', amount: '20.000 Ft' },
      { city: 'Veszprém', amount: '15.000 Ft' },
    ],
  },
  {
    id: 'couples',
    fees: [
      { city: 'Budapest', amount: '35.000 Ft' },
      { city: 'Veszprém', amount: '25.000 Ft' },
    ],
  },
] as const;

export function getFeesById(id: ServiceId): readonly ServiceFee[] {
  return PRICING.find((p) => p.id === id)?.fees ?? [];
}
