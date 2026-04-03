<template>
  <div class="bg-background text-foreground">
    <section class="relative overflow-hidden border-b border-border/70">
      <div class="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,237,0.95),rgba(255,255,255,0.75))] dark:bg-[linear-gradient(180deg,rgba(69,39,23,0.38),rgba(24,24,27,0.18))]" />
      <div class="absolute -left-12 top-0 h-56 w-56 rounded-full bg-amber-200/55 blur-3xl dark:bg-amber-900/30" />
      <div class="absolute right-0 top-24 h-52 w-52 rounded-full bg-orange-100/60 blur-3xl dark:bg-orange-950/30" />

      <div class="container relative px-4 py-16 md:px-6 md:py-20 lg:py-24">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div class="space-y-6 md:space-y-7">
            <div class="inline-flex items-center rounded-full border border-amber-300/70 bg-background/85 px-4 py-1.5 text-sm font-medium text-amber-900 shadow-sm dark:border-amber-800/70 dark:bg-background/80 dark:text-amber-200">
              {{ t('home.hero.eyebrow') }}
            </div>

            <div class="space-y-4">
              <h1 class="max-w-4xl text-4xl font-semibold tracking-tight md:text-5xl lg:text-6xl">
                {{ t('home.hero.titlePrefix') }}
                <span class="text-amber-700 dark:text-amber-300">
                  {{ t('home.hero.titleHighlight') }}
                </span>
                {{ t('home.hero.titleSuffix') }}
              </h1>
              <p class="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {{ t('home.hero.subtitle') }}
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row">
              <Button as-child size="lg" class="rounded-full px-7">
                <NuxtLink :to="`${localePath('/')}#services`">
                  {{ t('home.hero.buttons.primary') }}
                  <ArrowRight class="h-4 w-4" />
                </NuxtLink>
              </Button>
              <Button
                as-child
                size="lg"
                variant="outline"
                class="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
              >
                <NuxtLink :to="localePath(`/services/${serviceCatalog[3].slug}`)">
                  {{ t('home.hero.buttons.secondary') }}
                </NuxtLink>
              </Button>
            </div>

            <div class="flex flex-wrap gap-2.5">
              <span
                v-for="tag in heroTags.slice(0, 3)"
                :key="tag"
                class="rounded-full border border-amber-200/70 bg-background/88 px-3.5 py-1.5 text-xs text-muted-foreground shadow-sm dark:border-amber-900/60"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in overviewItems"
              :key="item.title"
              class="rounded-[28px] border border-amber-200/70 bg-card/95 p-5 shadow-[0_18px_40px_-32px_rgba(120,53,15,0.45)] dark:border-amber-950/60"
            >
              <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-200">
                <CalendarRange class="h-5 w-5" />
              </div>
              <h2 class="text-lg font-semibold md:text-xl">{{ item.title }}</h2>
              <p class="mt-3 text-sm leading-6 text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-14 md:py-18 lg:py-20">
      <div class="container px-4 md:px-6">
        <div class="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
            {{ t('home.servicesSection.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
            {{ t('home.servicesSection.title') }}
          </h2>
          <p class="mt-4 text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
            {{ t('home.servicesSection.subtitle') }}
          </p>
        </div>

        <div class="grid gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="service in serviceCards"
            :key="service.slug"
            :to="localePath(`/services/${service.slug}`)"
            :data-testid="`service-card-${service.slug}`"
            class="group rounded-[28px] border border-amber-200/80 bg-card p-5 shadow-[0_18px_40px_-34px_rgba(120,53,15,0.4)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 dark:border-amber-950/60 dark:hover:border-amber-800/70 md:p-6"
          >
            <div class="space-y-4">
              <div class="flex items-start justify-between gap-4">
                <div class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-800 dark:bg-amber-950/55 dark:text-amber-200">
                  <component :is="iconMap[service.icon]" class="h-5 w-5" />
                </div>
                <span class="rounded-full border border-amber-300/80 bg-amber-50 px-3 py-1 text-[11px] font-medium text-amber-900 dark:border-amber-800/70 dark:bg-amber-950/40 dark:text-amber-200">
                  {{ service.content.tagline }}
                </span>
              </div>

              <div class="space-y-2.5">
                <h3 class="text-xl font-semibold md:text-2xl">{{ service.content.name }}</h3>
                <p class="line-clamp-2 text-sm leading-6 text-muted-foreground">
                  {{ service.content.cardDescription }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="audience in service.content.audiences.slice(0, 2)"
                  :key="audience"
                  class="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                >
                  {{ audience }}
                </span>
              </div>

              <div class="space-y-2">
                <div
                  v-for="highlight in service.content.highlights.slice(0, 2)"
                  :key="highlight"
                  class="flex items-start gap-2.5 text-sm text-foreground"
                >
                  <span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-600 dark:bg-amber-400" />
                  <span class="leading-6">{{ highlight }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between border-t border-border/70 pt-4 text-sm font-medium text-amber-900 dark:text-amber-100">
                <span>{{ t('home.common.viewDetails') }}</span>
                <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="border-y border-border/70 bg-muted/25 py-14 md:py-18">
      <div class="container px-4 md:px-6">
        <div class="grid gap-4 md:gap-5 lg:grid-cols-3">
          <div
            v-for="(item, index) in bookingItems"
            :key="item.title"
            class="rounded-[28px] border border-amber-200/70 bg-background p-5 shadow-[0_14px_30px_-28px_rgba(120,53,15,0.35)] dark:border-amber-950/60 md:p-6"
          >
            <div class="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-amber-700 text-sm font-semibold text-amber-50 dark:bg-amber-300 dark:text-amber-950">
              {{ index + 1 }}
            </div>
            <h3 class="text-xl font-semibold md:text-2xl">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-6 text-muted-foreground">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-14 md:py-18 lg:py-20">
      <div class="container px-4 md:px-6">
        <div class="rounded-[28px] border border-amber-200/80 bg-[linear-gradient(135deg,rgba(255,247,237,0.95),rgba(255,255,255,1),rgba(255,237,213,0.65))] px-5 py-8 shadow-[0_24px_50px_-40px_rgba(120,53,15,0.45)] dark:border-amber-950/60 dark:bg-[linear-gradient(135deg,rgba(69,39,23,0.4),rgba(24,24,27,0.95),rgba(87,38,11,0.18))] md:px-8 md:py-10 lg:px-10 lg:py-12">
          <div class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl space-y-4">
              <p class="text-sm font-medium uppercase tracking-[0.24em] text-amber-700 dark:text-amber-300">
                {{ t('home.finalCta.eyebrow') }}
              </p>
              <h2 class="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
                {{ t('home.finalCta.title') }}
              </h2>
              <p class="text-base leading-7 text-muted-foreground md:text-lg md:leading-8">
                {{ t('home.finalCta.subtitle') }}
              </p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <Button as-child size="lg" class="rounded-full px-7">
                <NuxtLink :to="localePath(`/services/${serviceCatalog[0].slug}`)">
                  {{ t('home.finalCta.buttons.primary') }}
                </NuxtLink>
              </Button>
              <Button
                as-child
                size="lg"
                variant="outline"
                class="rounded-full border-amber-300/80 bg-background/80 px-7 hover:bg-amber-50 dark:border-amber-800/80 dark:hover:bg-amber-950/30"
              >
                <NuxtLink :to="localePath(`/services/${serviceCatalog[4].slug}`)">
                  {{ t('home.finalCta.buttons.secondary') }}
                </NuxtLink>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  ArrowRight,
  Briefcase,
  CalendarRange,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  Waves,
} from 'lucide-vue-next'

import { serviceCatalog } from '@libs/content/services'

const { t, tm } = useI18n()
const localePath = useLocalePath()

const iconMap = {
  waves: Waves,
  sparkles: Sparkles,
  'graduation-cap': GraduationCap,
  briefcase: Briefcase,
  'shopping-bag': ShoppingBag,
} as const

const catalogContent = computed(() => tm('services.catalog') as Record<string, any>)
const heroTags = computed(() => tm('home.hero.tags') as string[])
const overviewItems = computed(() => tm('home.overview.items') as Array<{ title: string; description: string }>)
const bookingItems = computed(() => tm('home.bookingSteps.items') as Array<{ title: string; description: string }>)

const serviceCards = computed(() =>
  serviceCatalog.map((service) => ({
    ...service,
    content: catalogContent.value[service.key],
  })),
)

useSeoMeta({
  title: () => t('home.metadata.title'),
  description: () => t('home.metadata.description'),
  keywords: () => t('home.metadata.keywords'),
})
</script>
