<template>
  <div class="bg-background text-foreground">
    <section class="relative overflow-hidden border-b border-border">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,197,94,0.15),_transparent_38%),radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_34%),linear-gradient(180deg,_rgba(15,23,42,0.04),_transparent_55%)]" />
      <div class="container relative px-4 py-20 md:px-6 md:py-28">
        <div class="grid gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div class="space-y-8">
            <div class="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-300">
              {{ t('home.hero.eyebrow') }}
            </div>
            <div class="space-y-5">
              <h1 class="max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">
                {{ t('home.hero.titlePrefix') }}
                <span class="bg-gradient-to-r from-sky-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  {{ t('home.hero.titleHighlight') }}
                </span>
                {{ t('home.hero.titleSuffix') }}
              </h1>
              <p class="max-w-2xl text-lg leading-8 text-muted-foreground md:text-xl">
                {{ t('home.hero.subtitle') }}
              </p>
            </div>

            <div class="flex flex-col gap-4 sm:flex-row">
              <Button as-child size="lg" class="rounded-full px-8">
                <NuxtLink :to="`${localePath('/')}#services`">
                  {{ t('home.hero.buttons.primary') }}
                  <ArrowRight class="h-4 w-4" />
                </NuxtLink>
              </Button>
              <Button as-child size="lg" variant="outline" class="rounded-full px-8">
                <NuxtLink :to="localePath(`/services/${serviceCatalog[3].slug}`)">
                  {{ t('home.hero.buttons.secondary') }}
                </NuxtLink>
              </Button>
            </div>

            <div class="flex flex-wrap gap-3">
              <span
                v-for="tag in heroTags"
                :key="tag"
                class="rounded-full border border-border bg-background/80 px-4 py-2 text-sm text-muted-foreground shadow-sm backdrop-blur"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="item in overviewItems"
              :key="item.title"
              class="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur"
            >
              <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500/20 to-emerald-500/20 text-sky-700 dark:text-sky-300">
                <CalendarRange class="h-5 w-5" />
              </div>
              <h2 class="text-xl font-semibold">{{ item.title }}</h2>
              <p class="mt-3 text-sm leading-7 text-muted-foreground">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="services" class="py-20 md:py-24">
      <div class="container px-4 md:px-6">
        <div class="mx-auto mb-12 max-w-3xl text-center">
          <p class="text-sm font-medium uppercase tracking-[0.25em] text-sky-600 dark:text-sky-300">
            {{ t('home.servicesSection.eyebrow') }}
          </p>
          <h2 class="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            {{ t('home.servicesSection.title') }}
          </h2>
          <p class="mt-4 text-lg leading-8 text-muted-foreground">
            {{ t('home.servicesSection.subtitle') }}
          </p>
        </div>

        <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          <NuxtLink
            v-for="service in serviceCards"
            :key="service.slug"
            :to="localePath(`/services/${service.slug}`)"
            :data-testid="`service-card-${service.slug}`"
            class="group relative overflow-hidden rounded-[28px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div :class="`absolute inset-0 bg-gradient-to-br ${service.accentClassName} opacity-80`" />
            <div class="relative space-y-5">
              <div class="flex items-start justify-between gap-4">
                <div :class="`inline-flex h-12 w-12 items-center justify-center rounded-2xl border ${service.badgeClassName}`">
                  <component :is="iconMap[service.icon]" class="h-5 w-5" />
                </div>
                <span :class="`rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`">
                  {{ service.content.tagline }}
                </span>
              </div>

              <div>
                <h3 class="text-2xl font-semibold">{{ service.content.name }}</h3>
                <p class="mt-3 line-clamp-3 text-sm leading-7 text-muted-foreground">
                  {{ service.content.cardDescription }}
                </p>
              </div>

              <div class="flex flex-wrap gap-2">
                <span
                  v-for="audience in service.content.audiences.slice(0, 3)"
                  :key="audience"
                  class="rounded-full border border-border bg-background/80 px-3 py-1 text-xs text-muted-foreground"
                >
                  {{ audience }}
                </span>
              </div>

              <div class="space-y-2">
                <div
                  v-for="highlight in service.content.highlights.slice(0, 3)"
                  :key="highlight"
                  class="flex items-center gap-2 text-sm text-foreground"
                >
                  <span class="h-2 w-2 rounded-full bg-sky-500" />
                  <span>{{ highlight }}</span>
                </div>
              </div>

              <div class="flex items-center justify-between border-t border-border/70 pt-4 text-sm font-medium">
                <span>{{ t('home.common.viewDetails') }}</span>
                <ArrowRight class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="border-y border-border bg-muted/30 py-20 md:py-24">
      <div class="container px-4 md:px-6">
        <div class="grid gap-8 lg:grid-cols-3">
          <div
            v-for="(item, index) in bookingItems"
            :key="item.title"
            class="rounded-3xl border border-border bg-background p-6 shadow-sm"
          >
            <div class="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white dark:bg-slate-100 dark:text-slate-900">
              {{ index + 1 }}
            </div>
            <h3 class="text-2xl font-semibold">{{ item.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-muted-foreground">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-24">
      <div class="container px-4 md:px-6">
        <div class="rounded-[32px] border border-border bg-gradient-to-br from-slate-950 to-slate-800 px-6 py-10 text-slate-50 shadow-xl md:px-10 md:py-14">
          <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div class="max-w-2xl space-y-4">
              <p class="text-sm font-medium uppercase tracking-[0.25em] text-sky-200">
                {{ t('home.finalCta.eyebrow') }}
              </p>
              <h2 class="text-3xl font-semibold tracking-tight md:text-5xl">
                {{ t('home.finalCta.title') }}
              </h2>
              <p class="text-base leading-8 text-slate-300 md:text-lg">
                {{ t('home.finalCta.subtitle') }}
              </p>
            </div>
            <div class="flex flex-col gap-4 sm:flex-row">
              <Button as-child size="lg" class="rounded-full bg-sky-500 px-8 text-white hover:bg-sky-400">
                <NuxtLink :to="localePath(`/services/${serviceCatalog[0].slug}`)">
                  {{ t('home.finalCta.buttons.primary') }}
                </NuxtLink>
              </Button>
              <Button as-child size="lg" variant="outline" class="rounded-full border-slate-600 bg-transparent px-8 text-slate-50 hover:bg-slate-50 hover:text-slate-900">
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
