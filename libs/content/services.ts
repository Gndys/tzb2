export const serviceCatalog = [
  {
    key: 'waterSports',
    slug: 'water-sports',
    icon: 'waves',
    accentClassName: 'from-amber-200/60 via-orange-100/40 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent',
    badgeClassName: 'border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  },
  {
    key: 'festivalCustom',
    slug: 'festival-custom',
    icon: 'sparkles',
    accentClassName: 'from-amber-200/60 via-orange-100/40 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent',
    badgeClassName: 'border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  },
  {
    key: 'educationCourses',
    slug: 'education-courses',
    icon: 'graduation-cap',
    accentClassName: 'from-amber-200/60 via-orange-100/40 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent',
    badgeClassName: 'border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  },
  {
    key: 'businessExhibition',
    slug: 'business-exhibition',
    icon: 'briefcase',
    accentClassName: 'from-amber-200/60 via-orange-100/40 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent',
    badgeClassName: 'border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  },
  {
    key: 'culturalRetail',
    slug: 'cultural-retail',
    icon: 'shopping-bag',
    accentClassName: 'from-amber-200/60 via-orange-100/40 to-transparent dark:from-amber-950/40 dark:via-orange-950/20 dark:to-transparent',
    badgeClassName: 'border-amber-500/25 bg-amber-500/10 text-amber-900 dark:text-amber-200',
  },
] as const

export type ServiceCatalogItem = (typeof serviceCatalog)[number]
export type ServiceKey = ServiceCatalogItem['key']
export type ServiceSlug = ServiceCatalogItem['slug']
export type ServiceIconName = ServiceCatalogItem['icon']

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug)
}
