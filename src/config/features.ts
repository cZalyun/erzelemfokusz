export interface PageFlags {
  readonly home: boolean;
  readonly about: boolean;
  readonly safeBeginnings: boolean;
  readonly efPastoralCare: boolean;
  readonly holdMeTight: boolean;
  readonly news: boolean;
  readonly groups: boolean;
  readonly pricing: boolean;
}

export interface FeatureFlags {
  readonly i18n: boolean;
  readonly darkMode: boolean;
  readonly contactForm: boolean;
  readonly testimonialCarousel: boolean;
  readonly pages: PageFlags;
}

export const FEATURES: FeatureFlags = {
  i18n: true,
  darkMode: true,
  contactForm: true,
  testimonialCarousel: true,
  pages: {
    home: true,
    about: true,
    safeBeginnings: true,
    efPastoralCare: true,
    holdMeTight: true,
    news: true,
    groups: true,
    pricing: true,
  },
} as const;
