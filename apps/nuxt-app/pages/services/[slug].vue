<template>
  <div class="bg-background text-foreground">
    <section :data-testid="`service-detail-${service.slug}`" class="relative overflow-hidden border-b border-border/70">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,0.8))] dark:bg-[linear-gradient(180deg,rgba(69,39,23,0.35),rgba(24,24,27,0.2))]" />
      <div class="absolute -left-10 top-0 h-56 w-56 rounded-full bg-amber-200/55 blur-3xl dark:bg-amber-900/28" />
      <div class="absolute right-0 top-24 h-56 w-56 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-950/25" />

      <div class="container relative px-4 py-12 md:px-6 md:py-16 lg:py-20">
        <div class="mb-6 md:mb-8">
          <NuxtLink
            :to="`${localePath('/')}#services`"
            class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft class="h-4 w-4" />
            {{ t('services.common.backToHome') }}
          </NuxtLink>
        </div>

        <div class="max-w-3xl space-y-5">
          <div class="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
            <component :is="iconMap[service.icon]" class="h-6 w-6" />
          </div>

          <div class="space-y-4">
            <p class="inline-flex rounded-full border border-amber-300/80 bg-background/85 px-3 py-1 text-xs font-medium text-amber-900 dark:border-amber-800/70 dark:text-amber-200">
              {{ content.tagline }}
            </p>
            <h1 class="text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
              {{ content.name }}
            </h1>
            <p class="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
              {{ content.detailIntro }}
            </p>
          </div>

          <div>
            <p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              {{ t('services.common.audienceTitle') }}
            </p>
            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="audience in content.audiences.slice(0, 4)"
                :key="audience"
                class="rounded-full bg-background/90 px-3.5 py-1.5 text-sm text-muted-foreground shadow-sm ring-1 ring-border"
              >
                {{ audience }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row">
            <Button as-child size="lg" class="rounded-full px-7">
              <NuxtLink :to="localePath(`/services/${service.slug}`) + '#offers'">
                {{ t('services.common.primaryCta') }}
              </NuxtLink>
            </Button>
            <Button
              as-child
              size="lg"
              variant="outline"
              class="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
            >
              <NuxtLink :to="localePath(`/services/${relatedServices[0].slug}`)">
                {{ t('services.common.secondaryCta') }}
              </NuxtLink>
            </Button>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-12">
      <div class="container px-4 md:px-6">
        <div class="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          <div
            v-for="fact in content.quickFacts"
            :key="fact.label"
            class="rounded-[24px] border border-amber-200/70 bg-card p-4 shadow-[0_14px_30px_-30px_rgba(120,53,15,0.35)] dark:border-amber-950/60 md:p-5"
          >
            <p class="text-xs leading-5 text-muted-foreground md:text-sm">
              {{ fact.label }}
            </p>
            <p class="mt-2 text-base font-semibold leading-6 md:text-xl md:leading-tight">
              {{ fact.value }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-6 md:py-8">
      <div class="container px-4 md:px-6">
        <div class="rounded-[28px] border border-amber-200/70 bg-muted/30 p-5 dark:border-amber-950/60 md:p-7">
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {{ t('services.common.highlightTitle') }}
          </p>
          <div class="mt-4 grid gap-2.5 md:grid-cols-2 md:gap-3">
            <div
              v-for="highlight in content.highlights"
              :key="highlight"
              class="flex items-start gap-3 rounded-2xl bg-background px-4 py-3 text-sm shadow-sm ring-1 ring-border/70"
            >
              <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
              <span class="leading-6">{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offers" class="border-y border-border/70 bg-muted/20 py-12 md:py-16">
      <div class="container px-4 md:px-6">
        <div class="space-y-10 md:space-y-12">
          <div
            v-for="section in content.sections"
            :key="section.title"
            :data-testid="`service-section-${section.slug}`"
            class="space-y-5"
          >
            <div class="max-w-3xl space-y-3">
              <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {{ t('services.common.sectionLabel') }}
              </p>
              <h2 class="text-2xl font-semibold tracking-tight md:text-3xl">
                {{ section.title }}
              </h2>
              <p class="text-sm leading-6 text-muted-foreground md:text-base md:leading-7">
                {{ section.description }}
              </p>
            </div>

            <div class="grid gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
              <div
                v-for="item in section.items"
                :key="`${section.slug}-${item.name}`"
                class="rounded-[26px] border border-amber-200/75 bg-background p-4 shadow-[0_16px_35px_-32px_rgba(120,53,15,0.4)] dark:border-amber-950/60 md:p-5"
              >
                <div class="flex items-start justify-between gap-4">
                  <h3 class="text-lg font-semibold leading-6 md:text-xl">
                    {{ item.name }}
                  </h3>
                  <span class="shrink-0 rounded-full border border-amber-300/80 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-900 dark:border-amber-800/70 dark:bg-amber-950/40 dark:text-amber-200">
                    {{ item.price }}
                  </span>
                </div>
                <p class="mt-2 text-sm font-medium text-amber-800 dark:text-amber-300">
                  {{ item.duration }}
                </p>
                <p class="mt-3 text-sm leading-6 text-muted-foreground">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-16">
      <div class="container px-4 md:px-6">
        <div class="max-w-2xl">
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {{ t('services.common.relatedTitle') }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
            {{ t('services.common.relatedSubtitle') }}
          </h2>
        </div>

        <div class="mt-6 grid gap-4 md:mt-8 md:gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="related in relatedCards"
            :key="related.slug"
            :to="localePath(`/services/${related.slug}`)"
            class="group rounded-[26px] border border-amber-200/75 bg-card p-5 shadow-[0_16px_35px_-34px_rgba(120,53,15,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 dark:border-amber-950/60 dark:hover:border-amber-800/70"
          >
            <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
              <component :is="iconMap[related.icon]" class="h-5 w-5" />
            </div>
            <h3 class="mt-4 text-xl font-semibold">{{ related.content.name }}</h3>
            <p class="mt-3 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {{ related.content.cardDescription }}
            </p>
            <div class="mt-5 inline-flex items-center gap-2 text-sm font-medium text-amber-900 dark:text-amber-100">
              {{ t('home.common.viewDetails') }}
              <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  Waves,
} from 'lucide-vue-next'

import { getServiceBySlug, serviceCatalog } from '@libs/content/services'

const route = useRoute()
const localePath = useLocalePath()
const { t, tm } = useI18n()

const iconMap = {
  waves: Waves,
  sparkles: Sparkles,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  'shopping-bag': ShoppingBag,
} as const

const catalogContent = computed(() => tm('services.catalog') as Record<string, any>)
const slug = route.params.slug as string
const service = getServiceBySlug(slug)

if (!service) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Service not found',
  })
}

const content = computed(() => catalogContent.value[service.key])
const relatedServices = computed(() => serviceCatalog.filter((item) => item.slug !== service.slug))
const relatedCards = computed(() =>
  relatedServices.value.map((item) => ({
    ...item,
    content: catalogContent.value[item.key],
  })),
)

useSeoMeta({
  title: () => `${content.value.name} - ${t('services.common.metadataTitleSuffix')}`,
  description: () => content.value.detailIntro,
  keywords: () => content.value.highlights.join(', '),
})
</script>
