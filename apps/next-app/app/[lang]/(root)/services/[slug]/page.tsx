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
import { getServiceBySlug, serviceCatalog, type ServiceCatalogItem } from "@libs/content/services";
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
        className="relative overflow-hidden border-b border-border"
      >
        <div className={`absolute inset-0 bg-gradient-to-br ${service.accentClassName}`} />
        <div className="container relative px-4 py-14 md:px-6 md:py-20">
          <div className="mb-8">
            <Link
              href={`/${lang}#services`}
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              {t.services.common.backToHome}
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div className="space-y-6">
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${service.badgeClassName}`}>
                <Icon className="h-6 w-6" />
              </div>
              <div className="space-y-4">
                <p className={`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`}>
                  {content.tagline}
                </p>
                <h1 className="text-4xl font-semibold tracking-tight md:text-6xl">{content.name}</h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                  {content.detailIntro}
                </p>
              </div>

              <div>
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {t.services.common.audienceTitle}
                </p>
                <div className="flex flex-wrap gap-3">
                  {content.audiences.map((audience: string) => (
                    <span
                      key={audience}
                      className="rounded-full border border-border bg-background/85 px-4 py-2 text-sm text-muted-foreground"
                    >
                      {audience}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="rounded-full px-8">
                  <Link href={`/${lang}/services/${service.slug}#offers`}>
                    {t.services.common.primaryCta}
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full px-8">
                  <Link href={`/${lang}/services/${relatedServices[0].slug}`}>
                    {t.services.common.secondaryCta}
                  </Link>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {content.quickFacts.map((fact: any) => (
                <div key={fact.label} className="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur">
                  <p className="text-sm text-muted-foreground">{fact.label}</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight">{fact.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="rounded-[28px] border border-border bg-muted/40 p-6 md:p-8">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t.services.common.highlightTitle}
            </p>
            <div className="mt-5 grid gap-3 lg:grid-cols-2">
              {content.highlights.map((highlight: string) => (
                <div key={highlight} className="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm">
                  <span className="h-2.5 w-2.5 rounded-full bg-sky-500" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="offers" className="border-y border-border bg-muted/20 py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="space-y-10">
            {content.sections.map((section: any) => (
              <div key={section.title} data-testid={`service-section-${section.slug}`} className="space-y-5">
                <div className="max-w-3xl">
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {t.services.common.sectionLabel}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight">{section.title}</h2>
                  <p className="mt-3 text-base leading-8 text-muted-foreground">{section.description}</p>
                </div>

                <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                  {section.items.map((item: any) => (
                    <div
                      key={`${section.slug}-${item.name}`}
                      className="rounded-[26px] border border-border bg-background p-6 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`}>
                          {item.price}
                        </span>
                      </div>
                      <p className="mt-2 text-sm font-medium text-sky-700 dark:text-sky-300">
                        {item.duration}
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex items-center justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t.services.common.relatedTitle}
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight">
                {t.services.common.relatedSubtitle}
              </h2>
            </div>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {relatedServices.map((item) => {
              const relatedContent = getServiceContent(t, item);
              const RelatedIcon = iconMap[item.icon];

              return (
                <Link
                  key={item.slug}
                  href={`/${lang}/services/${item.slug}`}
                  className="group rounded-[26px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${item.badgeClassName}`}>
                    <RelatedIcon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{relatedContent.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {relatedContent.cardDescription}
                  </p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium">
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
