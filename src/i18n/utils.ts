import { hu } from './hu';
import { en } from './en';
import type { Translations } from './types';
import { DEFAULT_LOCALE, type Locale } from '@config/site';

const translations: Record<Locale, Translations> = { hu, en };

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return DEFAULT_LOCALE;
}

export function useTranslations(lang: Locale): Translations {
  return translations[lang];
}

export function getLocalePath(path: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return path;
  return `/en${path === '/' ? '' : path}`;
}
