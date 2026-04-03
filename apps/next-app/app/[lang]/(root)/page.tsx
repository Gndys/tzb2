import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CalendarRange,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { translations } from "@libs/i18n";
import { serviceCatalog, type ServiceCatalogItem } from "@libs/content/services";

type Props = {
  params: Promise<{ lang: string }>;
};

const iconMap = {
  waves: Waves,
  sparkles: Sparkles,
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  "shopping-bag": ShoppingBag,
} as const;

function getServiceContent(messages: any, service: ServiceCatalogItem) {
  const catalog = messages.services.catalog as Record<string, any>;
  return catalog[service.key];
}

export default async function HomePage({ params }: Props) {
  const { lang } = await params;
  const t = translations[lang as keyof typeof translations];

  return (
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,0.04),_transparent_55%)]" />
        <div className="container relative px-4 py-20 md:px-6 md:py-28">
          <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
                {t.home.hero.eyebrow}
              </div>
              <div className="space-y-5">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                  {t.home.hero.titlePrefix}
                  <span className="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                    {t.home.hero.titleHighlight}
                  </span>
                  {t.home.hero.titleSuffix}
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                  {t.home.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href={`/${lang}#services`}>
                    {t.home.hero.buttons.primary}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link href={`/${lang}/services/${serviceCatalog[3].slug}`}>
                    {t.home.hero.buttons.secondary}
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-3">
                {t.home.hero.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {t.home.overview.items.map((item: any) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sky-700 dark:text-sky-300">
                    <CalendarRange className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
              {t.home.servicesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {t.home.servicesSection.title}
            </h2>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">
              {t.home.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCatalog.map((service) => {
              const content = getServiceContent(t, service);
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/${lang}/services/${service.slug}`}
                  data-testid={`service-card-${service.slug}`}
                  className="group relative overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.accentClassName} opacity-80`} />
                  <div className="relative space-y-5">
                    <div className="flex items-start justify-between gap-4">
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${service.badgeClassName}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className={`rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`}>
                        {content.tagline}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl font-semibold">{content.name}</h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                        {content.cardDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {content.audiences.slice(0, 3).map((audience: string) => (
                        <span
                          key={audience}
                          className="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {content.highlights.slice(0, 3).map((highlight: string) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-foreground">
                          <span className="h-2 w-2 rounded-full bg-sky-500" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-border/70 pt-4 text-sm font-medium">
                      <span>{t.home.common.viewDetails}</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-3">
            {t.home.bookingSteps.items.map((item: any, index: number) => (
              <div key={item.title} className="rounded-3xl border border-border bg-background p-6 shadow-sm">
                <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
                  {index + 1}
                </div>
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="rounded-[32px] border border-border bg-gradient-to-br from-slate-950 to-slate-800 px-6 py-10 text-slate-50 shadow-xl md:px-10 md:py-14">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.25em] text-sky-200">
                  {t.home.finalCta.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-5xl">
                  {t.home.finalCta.title}
                </h2>
                <p className="text-base leading-8 text-slate-300 md:text-lg">
                  {t.home.finalCta.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full bg-sky-500 px-8 text-white hover:bg-sky-400">
                  <Link href={`/${lang}/services/${serviceCatalog[0].slug}`}>
                    {t.home.finalCta.buttons.primary}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-slate-600 bg-transparent px-8 text-slate-50 hover:bg-slate-50 hover:text-slate-900">
                  <Link href={`/${lang}/services/${serviceCatalog[4].slug}`}>
                    {t.home.finalCta.buttons.secondary}
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
