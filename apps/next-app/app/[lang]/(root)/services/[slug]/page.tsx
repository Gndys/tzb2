import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  getServiceBySlug,
  serviceCatalog,
  type ServiceCatalogItem,
} from "@libs/content/services";
import { translations } from "@libs/i18n";

type Props = {
  params: Promise<{ lang: string; slug: string }>;
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  const t = translations[lang as keyof typeof translations];
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: t.services.common.notFoundTitle,
    };
  }

  const content = getServiceContent(t, service);

  return {
    title: `${content.name} - ${t.services.common.metadataTitleSuffix}`,
    description: content.detailIntro,
    keywords: content.highlights.join(", "),
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { lang, slug } = await params;
  const t = translations[lang as keyof typeof translations];
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const content = getServiceContent(t, service);
  const Icon = iconMap[service.icon];
  const relatedServices = serviceCatalog.filter((item) => item.slug !== service.slug);

  return (
    <div className="bg-background text-foreground">
      <section
        data-testid={`service-detail-${service.slug}`}
        className="relative overflow-hidden border-b border-border/70"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,0.8))] dark:bg-[linear-gradient(180deg,rgba(69,39,23,0.35),rgba(24,24,27,0.2))]" />
        <div className="absolute -left-10 top-0 h-56 w-56 rounded-full bg-amber-200/55 blur-3xl dark:bg-amber-900/28" />
        <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-950/25" />

        <div className="container relative px-4 py-12 md:px-6 md:py-16 lg:py-20">
          <div className="mb-6 md:mb-8">
            <Link
              href={`/${lang}#services`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.services.common.backToHome}
            </Link>
          </div>

          <div className="max-w-3xl space-y-5">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
              <Icon className="h-6 w-6" />
            </div>

            <div className="space-y-4">
              <p className="inline-flex rounded-full border border-amber-300/80 bg-background/85 px-3 py-1 text-xs font-medium text-amber-900 dark:border-amber-800/70 dark:text-amber-200">
                {content.tagline}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                {content.name}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {content.detailIntro}
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {t.services.common.audienceTitle}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {content.audiences.slice(0, 4).map((audience: string) => (
                  <span
                    key={audience}
                    className="rounded-full bg-background/90 px-3.5 py-1.5 text-sm text-muted-foreground shadow-sm ring-1 ring-border"
                  >
                    {audience}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full px-7">
                <Link href={`/${lang}/services/${service.slug}#offers`}>
                  {t.services.common.primaryCta}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
              >
                <Link href={`/${lang}/services/${relatedServices[0].slug}`}>
                  {t.services.common.secondaryCta}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {content.quickFacts.map((fact: any) => (
              <div
                key={fact.label}
                className="rounded-[24px] border border-amber-200/70 bg-card p-4 shadow-[0_14px_30px_-30px_rgba(120,53,15,0.35)] dark:border-amber-950/60 md:p-5"
              >
                <p className="text-xs leading-5 text-muted-foreground md:text-sm">
                  {fact.label}
                </p>
                <p className="mt-2 text-base font-semibold leading-6 md:text-xl md:leading-tight">
                  {fact.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="container px-4 md:px-6">
          <div className="rounded-[28px] border border-amber-200/70 bg-muted/30 p-5 dark:border-amber-950/60 md:p-7">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t.services.common.highlightTitle}
            </p>
            <div className="mt-4 grid gap-2.5 md:grid-cols-2 md:gap-3">
              {content.highlights.map((highlight: string) => (
                <div
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl bg-background px-4 py-3 text-sm shadow-sm ring-1 ring-border/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                  <span className="leading-6">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="border-y border-border/70 bg-muted/20 py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="space-y-10 md:space-y-12">
            {content.sections.map((section: any) => (
              <div
                key={section.title}
                data-testid={`service-section-${section.slug}`}
                className="space-y-5"
              >
                <div className="max-w-3xl space-y-3">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {t.services.common.sectionLabel}
                  </p>
                  <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                    {section.description}
                  </p>
                </div>

                <div className="grid gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item: any) => (
                    <div
                      key={`${section.slug}-${item.name}`}
                      className="rounded-[26px] border border-amber-200/75 bg-background p-4 shadow-[0_16px_35px_-32px_rgba(120,53,15,0.4)] dark:border-amber-950/60 md:p-5"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-lg font-semibold leading-6 md:text-xl">
                          {item.name}
                        </h3>
                        <span className="shrink-0 rounded-full border border-amber-300/80 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-900 dark:border-amber-800/70 dark:bg-amber-950/40 dark:text-amber-200">
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-amber-800 dark:text-amber-300">
                        {item.duration}
                      </p>
                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t.services.common.relatedTitle}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {t.services.common.relatedSubtitle}
            </h2>
          </div>

          <div className="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((item) => {
              const relatedContent = getServiceContent(t, item);
              const RelatedIcon = iconMap[item.icon];

              return (
                <Link
                  key={item.slug}
                  href={`/${lang}/services/${item.slug}`}
                  className="group rounded-[26px] border border-amber-200/75 bg-card p-5 shadow-[0_16px_35px_-34px_rgba(120,53,15,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 dark:border-amber-950/60 dark:hover:border-amber-800/70"
                >
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold">{relatedContent.name}</h3>
                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
                    {relatedContent.cardDescription}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-900 dark:text-amber-100">
                    {t.home.common.viewDetails}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
