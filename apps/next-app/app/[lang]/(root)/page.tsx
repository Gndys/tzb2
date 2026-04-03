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
import { serviceCatalog, type ServiceCatalogItem } from "@libs/content/services";
import { translations } from "@libs/i18n";

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
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,0.75))] dark:bg-[linear-gradient(180deg,rgba(69,39,23,0.38),rgba(24,24,27,0.18))]" />
        <div className="absolute -left-12 top-0 h-56 w-56 rounded-full bg-amber-200/55 blur-3xl dark:bg-amber-900/30" />
        <div className="absolute right-0 top-24 h-52 w-52 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-950/30" />

        <div className="container relative px-4 py-16 md:px-6 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6 md:space-y-7">
              <div className="inline-flex items-center rounded-full border border-amber-300/70 bg-background/85 px-4 py-1.5 text-sm font-medium text-amber-900 shadow-sm dark:border-amber-800/70 dark:bg-background/80 dark:text-amber-200">
                {t.home.hero.eyebrow}
              </div>

              <div className="space-y-4">
                <h1 className="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                  {t.home.hero.titlePrefix}
                  <span className="text-amber-700 dark:text-amber-300">
                    {t.home.hero.titleHighlight}
                  </span>
                  {t.home.hero.titleSuffix}
                </h1>
                <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                  {t.home.hero.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href={`/${lang}#services`}>
                    {t.home.hero.buttons.primary}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
                >
                  <Link href={`/${lang}/services/${serviceCatalog[3].slug}`}>
                    {t.home.hero.buttons.secondary}
                  </Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {t.home.hero.tags.slice(0, 3).map((tag: string) => (
                  <span
                    key={tag}
                    className="rounded-full border border-amber-200/70 bg-background/88 px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm dark:border-amber-900/60"
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
                  className="rounded-[28px] border border-amber-200/70 bg-card/95 p-5 shadow-[0_18px_40px_-32px_rgba(120,53,15,0.45)] dark:border-amber-950/60"
                >
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200">
                    <CalendarRange className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold md:text-xl">{item.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-14 md:py-18 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
            <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
              {t.home.servicesSection.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
              {t.home.servicesSection.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {t.home.servicesSection.subtitle}
            </p>
          </div>

          <div className="grid gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {serviceCatalog.map((service) => {
              const content = getServiceContent(t, service);
              const Icon = iconMap[service.icon];

              return (
                <Link
                  key={service.slug}
                  href={`/${lang}/services/${service.slug}`}
                  data-testid={`service-card-${service.slug}`}
                  className="group rounded-[28px] border border-amber-200/80 bg-card p-5 shadow-[0_18px_40px_-34px_rgba(120,53,15,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 dark:border-amber-950/60 dark:hover:border-amber-800/70 md:p-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="rounded-full border border-amber-300/80 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-900 dark:border-amber-800/70 dark:bg-amber-950/40 dark:text-amber-200">
                        {content.tagline}
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <h3 className="text-xl font-semibold md:text-2xl">{content.name}</h3>
                      <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
                        {content.cardDescription}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {content.audiences.slice(0, 2).map((audience: string) => (
                        <span
                          key={audience}
                          className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                        >
                          {audience}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {content.highlights.slice(0, 2).map((highlight: string) => (
                        <div key={highlight} className="flex items-start gap-2.5 text-sm text-foreground">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                          <span className="leading-6">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between border-t border-border/70 pt-4 text-sm font-medium text-amber-900 dark:text-amber-100">
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

      <section className="border-y border-border/70 bg-muted/25 py-14 md:py-18">
        <div className="container px-4 md:px-6">
          <div className="grid gap-4 md:gap-5 lg:grid-cols-3">
            {t.home.bookingSteps.items.map((item: any, index: number) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-amber-200/70 bg-background p-5 shadow-[0_14px_30px_-28px_rgba(120,53,15,0.35)] dark:border-amber-950/60 md:p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-amber-50 dark:bg-amber-300 dark:text-amber-950">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold md:text-2xl">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 md:py-18 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="rounded-[28px] border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.95),rgba(255,255,255,1),rgba(255,237,213,0.65))] px-5 py-8 shadow-[0_24px_50px_-40px_rgba(120,53,15,0.45)] dark:border-amber-950/60 dark:bg-[linear-gradient(135deg,rgba(69,39,23,0.4),rgba(24,24,27,0.95),rgba(87,38,11,0.18))] md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl space-y-4">
                <p className="text-sm font-medium uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                  {t.home.finalCta.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                  {t.home.finalCta.title}
                </h2>
                <p className="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                  {t.home.finalCta.subtitle}
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-7">
                  <Link href={`/${lang}/services/${serviceCatalog[0].slug}`}>
                    {t.home.finalCta.buttons.primary}
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
                >
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
