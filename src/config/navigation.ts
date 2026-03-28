import type { Locale } from './site';
import { FEATURES } from './features';

export interface NavItem {
  readonly labelKey: string;
  readonly href: string;
  readonly children?: readonly NavItem[];
  readonly enabled: boolean;
  readonly isSection?: boolean;
}

interface NavConfig {
  readonly hu: readonly NavItem[];
  readonly en: readonly NavItem[];
}

const HU_NAV: readonly NavItem[] = [
  { labelKey: 'nav.home', href: '/', enabled: FEATURES.pages.home },
  { labelKey: 'nav.about', href: '/bemutatkozas', enabled: FEATURES.pages.about },
  {
    labelKey: 'nav.more',
    href: '#',
    enabled: true,
    children: [
      { labelKey: 'nav.safeBeginnings', href: '/biztonsagos-kezdetek', enabled: FEATURES.pages.safeBeginnings },
      { labelKey: 'nav.consultation', href: '/#konzultacio', enabled: FEATURES.pages.home, isSection: true },
      { labelKey: 'nav.efPastoralCare', href: '/ef-lelkigondozas', enabled: FEATURES.pages.efPastoralCare },
      { labelKey: 'nav.holdMeTight', href: '/olelj-at', enabled: FEATURES.pages.holdMeTight },
      { labelKey: 'nav.news', href: '/aktualitasok', enabled: FEATURES.pages.news },
      { labelKey: 'nav.groups', href: '/csoportok', enabled: FEATURES.pages.groups },
      { labelKey: 'nav.contact', href: '/#kapcsolat', enabled: FEATURES.pages.home, isSection: true },
      { labelKey: 'nav.pricing', href: '/arak-es-keretek', enabled: FEATURES.pages.pricing },
    ],
  },
] as const;

const EN_NAV: readonly NavItem[] = [
  { labelKey: 'nav.home', href: '/en', enabled: FEATURES.pages.home },
  { labelKey: 'nav.about', href: '/en/about', enabled: FEATURES.pages.about },
  {
    labelKey: 'nav.more',
    href: '#',
    enabled: true,
    children: [
      { labelKey: 'nav.safeBeginnings', href: '/en/safe-beginnings', enabled: FEATURES.pages.safeBeginnings },
      { labelKey: 'nav.consultation', href: '/en/#consultation', enabled: FEATURES.pages.home, isSection: true },
      { labelKey: 'nav.efPastoralCare', href: '/en/ef-pastoral-care', enabled: FEATURES.pages.efPastoralCare },
      { labelKey: 'nav.holdMeTight', href: '/en/hold-me-tight', enabled: FEATURES.pages.holdMeTight },
      { labelKey: 'nav.news', href: '/en/news', enabled: FEATURES.pages.news },
      { labelKey: 'nav.groups', href: '/en/groups', enabled: FEATURES.pages.groups },
      { labelKey: 'nav.contact', href: '/en/#contact', enabled: FEATURES.pages.home, isSection: true },
      { labelKey: 'nav.pricing', href: '/en/pricing', enabled: FEATURES.pages.pricing },
    ],
  },
] as const;

export const NAV_CONFIG: NavConfig = {
  hu: HU_NAV,
  en: EN_NAV,
} as const;

export function getNavItems(locale: Locale): readonly NavItem[] {
  return NAV_CONFIG[locale].filter((item) => item.enabled);
}

export function getFilteredChildren(item: NavItem): readonly NavItem[] {
  if (!item.children) return [];
  return item.children.filter((child) => child.enabled);
}

export interface LocaleRoute {
  readonly hu: string;
  readonly en: string;
}

export const PAGE_ROUTES: readonly LocaleRoute[] = [
  { hu: '/', en: '/en' },
  { hu: '/bemutatkozas', en: '/en/about' },
  { hu: '/biztonsagos-kezdetek', en: '/en/safe-beginnings' },
  { hu: '/ef-lelkigondozas', en: '/en/ef-pastoral-care' },
  { hu: '/olelj-at', en: '/en/hold-me-tight' },
  { hu: '/aktualitasok', en: '/en/news' },
  { hu: '/csoportok', en: '/en/groups' },
  { hu: '/arak-es-keretek', en: '/en/pricing' },
] as const;

export function getAlternateLocaleHref(currentPath: string, targetLocale: Locale): string {
  const route = PAGE_ROUTES.find(
    (r) => r.hu === currentPath || r.en === currentPath,
  );
  if (!route) return targetLocale === 'hu' ? '/' : '/en';
  return route[targetLocale];
}
