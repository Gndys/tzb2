export const serviceCatalog = [
  {
    key: 'waterSports',
    slug: 'water-sports',
    icon: 'waves',
    accentClassName: 'from-sky-500/20 via-cyan-500/10 to-transparent',
    badgeClassName: 'border-sky-500/30 bg-sky-500/10 text-sky-700 dark:text-sky-300',
  },
  {
    key: 'festivalCustom',
    slug: 'festival-custom',
    icon: 'sparkles',
    accentClassName: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeClassName: 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300',
  },
  {
    key: 'educationCourses',
    slug: 'education-courses',
    icon: 'graduation-cap',
    accentClassName: 'from-emerald-500/20 via-lime-500/10 to-transparent',
    badgeClassName: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300',
  },
  {
    key: 'businessExhibition',
    slug: 'business-exhibition',
    icon: 'briefcase',
    accentClassName: 'from-slate-500/20 via-zinc-500/10 to-transparent',
    badgeClassName: 'border-slate-500/30 bg-slate-500/10 text-slate-700 dark:text-slate-300',
  },
  {
    key: 'culturalRetail',
    slug: 'cultural-retail',
    icon: 'shopping-bag',
    accentClassName: 'from-rose-500/20 via-fuchsia-500/10 to-transparent',
    badgeClassName: 'border-rose-500/30 bg-rose-500/10 text-rose-700 dark:text-rose-300',
  },
] as const

export type ServiceCatalogItem = (typeof serviceCatalog)[number]
export type ServiceKey = ServiceCatalogItem['key']
export type ServiceSlug = ServiceCatalogItem['slug']
export type ServiceIconName = ServiceCatalogItem['icon']

export function getServiceBySlug(slug: string) {
  return serviceCatalog.find((service) => service.slug === slug)
}
