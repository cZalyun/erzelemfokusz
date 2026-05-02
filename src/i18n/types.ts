export interface Translations {
  readonly meta: {
    readonly siteTitle: string;
    readonly siteDescription: string;
    readonly ogTitle: string;
    readonly ogDescription: string;
  };
  readonly nav: {
    readonly home: string;
    readonly about: string;
    readonly more: string;
    readonly safeBeginnings: string;
    readonly consultation: string;
    readonly efPastoralCare: string;
    readonly holdMeTight: string;
    readonly news: string;
    readonly groups: string;
    readonly contact: string;
    readonly pricing: string;
  };
  readonly theme: {
    readonly light: string;
    readonly dark: string;
    readonly system: string;
  };
  readonly home: {
    readonly title: string;
    readonly subtitle: string;
    readonly emotionsTitle: string;
    readonly testimonials: readonly string[];
    readonly consultationTitle: string;
    readonly consultationFocusTitle: string;
    readonly consultationFocusTags: readonly string[];
    readonly consultationCharTitle: string;
    readonly consultationCharTags: readonly string[];
    readonly specializationsTitle: string;
    readonly specializations: readonly string[];
    readonly contactTitle: string;
    readonly contactFormName: string;
    readonly contactFormEmail: string;
    readonly contactFormPhone: string;
    readonly contactFormLocation: string;
    readonly contactFormLocationPlaceholder: string;
    readonly contactFormLocationOptions: readonly string[];
    readonly contactFormServices: string;
    readonly contactFormServicesPlaceholder: string;
    readonly contactFormServicesOptions: readonly string[];
    readonly contactFormMessage: string;
    readonly contactFormSend: string;
    readonly contactFormSuccess: string;
    readonly quote: string;
    readonly quoteAuthor: string;
  };
  readonly about: {
    readonly pageTitle: string;
    readonly name: string;
    readonly subtitle: string;
    readonly introText: readonly string[];
    readonly contactText: string;
    readonly timelineTitle: string;
    readonly timeline: readonly {
      readonly period: string;
      readonly description: string;
    }[];
    readonly closingQuote: string;
    readonly closingQuoteAuthor: string;
  };
  readonly safeBeginnings: {
    readonly pageTitle: string;
    readonly content: string;
    readonly contactEmail: string;
    readonly contactPhone: string;
  };
  readonly efPastoralCare: {
    readonly pageTitle: string;
    readonly recommendTitle: string;
    readonly whyTitle: string;
    readonly whyText: string;
    readonly whenIntro: string;
    readonly whenItems: readonly string[];
  };
  readonly holdMeTight: {
    readonly pageTitle: string;
    readonly subtitle: string;
    readonly heroQuote: string;
    readonly quoteText: string;
    readonly quoteAuthor: string;
    readonly mainText: string;
    readonly helpTitle: string;
    readonly helpItems: readonly string[];
    readonly highlights: readonly string[];
    readonly priceText: string;
    readonly scheduleText: string;
    readonly ctaText: string;
  };
  readonly newsPage: {
    readonly pageTitle: string;
    readonly scheduleIntro: string;
    readonly phone: string;
    readonly email: string;
    readonly locations: readonly {
      readonly city: string;
      readonly address: string;
      readonly days: string;
    }[];
  };
  readonly groupsPage: {
    readonly pageTitle: string;
    readonly listIntro: string;
    readonly groups: readonly string[];
    readonly joinInfo: string;
    readonly contactLabel: string;
    readonly contactEmail: string;
    readonly contactPhone: string;
  };
  readonly pricingPage: {
    readonly pageTitle: string;
    readonly individualTitle: string;
    readonly individualPrice: string;
    readonly individualDuration: string;
    readonly couplesTitle: string;
    readonly couplesPrice: string;
    readonly couplesDuration: string;
    readonly description: string;
    readonly cancellationPolicy: string;
    readonly disclaimer: string;
  };
  readonly footer: {
    readonly rights: string;
  };
}
