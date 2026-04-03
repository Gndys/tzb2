<template>
  <div class="bg-background text-foreground">
    <section :data-testid="`service-detail-${service.slug}`" class="relative overflow-hidden border-b border-border">
      <div :class="`absolute inset-0 bg-gradient-to-br ${service.accentClassName}`" />
      <div class="container relative px-4 py-14 md:px-6 md:py-20">
        <div class="mb-8">
          <NuxtLink
            :to="`${localePath('/')}#services`"
            class="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft class="h-4 w-4" />
            {{ t('services.common.backToHome') }}
          </NuxtLink>
        </div>

        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div class="space-y-6">
            <div :class="`inline-flex h-14 w-14 items-center justify-center rounded-2xl border ${service.badgeClassName}`">
              <component :is="iconMap[service.icon]" class="h-6 w-6" />
            </div>
            <div class="space-y-4">
              <p :class="`inline-flex rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`">
                {{ content.tagline }}
              </p>
              <h1 class="text-4xl font-semibold tracking-tight md:text-6xl">{{ content.name }}</h1>
              <p class="max-w-3xl text-lg leading-8 text-muted-foreground">
                {{ content.detailIntro }}
              </p>
            </div>

            <div>
              <p class="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {{ t('services.common.audienceTitle') }}
              </p>
              <div class="flex flex-wrap gap-3">
                <span
                  v-for="audience in content.audiences"
                  :key="audience"
                  class="rounded-full border border-border bg-background/85 px-4 py-2 text-sm text-muted-foreground"
                >
                  {{ audience }}
                </span>
              </div>
            </div>

            <div class="flex flex-col gap-4 sm:flex-row">
              <Button as-child size="lg" class="rounded-full px-8">
                <NuxtLink :to="localePath(`/services/${service.slug}`) + '#offers'">
                  {{ t('services.common.primaryCta') }}
                </NuxtLink>
              </Button>
              <Button as-child size="lg" variant="outline" class="rounded-full px-8">
                <NuxtLink :to="localePath(`/services/${relatedServices[0].slug}`)">
                  {{ t('services.common.secondaryCta') }}
                </NuxtLink>
              </Button>
            </div>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div
              v-for="fact in content.quickFacts"
              :key="fact.label"
              class="rounded-3xl border border-border bg-card/90 p-6 shadow-sm backdrop-blur"
            >
              <p class="text-sm text-muted-foreground">{{ fact.label }}</p>
              <p class="mt-3 text-2xl font-semibold leading-tight">{{ fact.value }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="container px-4 md:px-6">
        <div class="rounded-[28px] border border-border bg-muted/40 p-6 md:p-8">
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {{ t('services.common.highlightTitle') }}
          </p>
          <div class="mt-5 grid gap-3 lg:grid-cols-2">
            <div
              v-for="highlight in content.highlights"
              :key="highlight"
              class="flex items-center gap-3 rounded-2xl border border-border bg-background px-4 py-3 text-sm"
            >
              <span class="h-2.5 w-2.5 rounded-full bg-sky-500" />
              <span>{{ highlight }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="offers" class="border-y border-border bg-muted/20 py-16 md:py-20">
      <div class="container px-4 md:px-6">
        <div class="space-y-10">
          <div
            v-for="section in content.sections"
            :key="section.title"
            :data-testid="`service-section-${section.slug}`"
            class="space-y-5"
          >
            <div class="max-w-3xl">
              <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {{ t('services.common.sectionLabel') }}
              </p>
              <h2 class="mt-3 text-3xl font-semibold tracking-tight">{{ section.title }}</h2>
              <p class="mt-3 text-base leading-8 text-muted-foreground">{{ section.description }}</p>
            </div>

            <div class="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
              <div
                v-for="item in section.items"
                :key="`${section.slug}-${item.name}`"
                class="rounded-[26px] border border-border bg-background p-6 shadow-sm"
              >
                <div class="flex items-start justify-between gap-4">
                  <h3 class="text-xl font-semibold">{{ item.name }}</h3>
                  <span :class="`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${service.badgeClassName}`">
                    {{ item.price }}
                  </span>
                </div>
                <p class="mt-2 text-sm font-medium text-sky-700 dark:text-sky-300">
                  {{ item.duration }}
                </p>
                <p class="mt-4 text-sm leading-7 text-muted-foreground">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-20">
      <div class="container px-4 md:px-6">
        <div>
          <p class="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {{ t('services.common.relatedTitle') }}
          </p>
          <h2 class="mt-3 text-3xl font-semibold tracking-tight">
            {{ t('services.common.relatedSubtitle') }}
          </h2>
        </div>

        <div class="mt-8 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          <NuxtLink
            v-for="related in relatedCards"
            :key="related.slug"
            :to="localePath(`/services/${related.slug}`)"
            class="group rounded-[26px] border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div :class="`inline-flex h-11 w-11 items-center justify-center rounded-2xl border ${related.badgeClassName}`">
              <component :is="iconMap[related.icon]" class="h-5 w-5" />
            </div>
            <h3 class="mt-5 text-xl font-semibold">{{ related.content.name }}</h3>
            <p class="mt-3 text-sm leading-7 text-muted-foreground">
              {{ related.content.cardDescription }}
            </p>
            <div class="mt-5 inline-flex items-center gap-2 text-sm font-medium">
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
