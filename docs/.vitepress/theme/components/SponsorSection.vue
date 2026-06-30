<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getSponsorGroups, type SponsorGroup, type SponsorTier } from '../sponsors'

const props = defineProps<{
  mode: 'home' | 'aside'
}>()

const { localeIndex } = useData()
const isZh = computed(() => !(localeIndex.value?.startsWith('en') ?? false))

const tierLabels: Record<SponsorTier, { zh: string; en: string }> = {
  platinum: { zh: '铂金赞助商', en: 'Platinum Sponsors' },
  gold: { zh: '黄金赞助商', en: 'Gold Sponsors' },
  silver: { zh: '白银赞助商', en: 'Silver Sponsors' }
}

const sectionMeta = computed(() => {
  return {
    eyebrow: isZh.value ? '赞助商' : 'Sponsors',
    title: isZh.value ? '支持这个项目的人和团队' : 'People and teams supporting this guide',
    body:
      props.mode === 'home'
        ? isZh.value
          ? '按赞助等级展示，空分组会自动隐藏。'
          : 'Sponsors are grouped by tier. Empty groups stay hidden.'
        : isZh.value
          ? '文档页只展示铂金赞助商，保持阅读专注。'
          : 'Documentation pages only show platinum sponsors to stay focused.'
  }
})

const groups = computed<SponsorGroup[]>(() => getSponsorGroups(localeIndex.value, props.mode))
const asideItems = computed(() => groups.value.flatMap((group) => group.items))

const labels = computed(() => {
  return {
    asideLabel: isZh.value ? '支持方' : 'Supported by',
    readMore: isZh.value ? '访问官网' : 'Visit site'
  }
})

const getSponsorBadge = (name: string) => {
  const latinWords = name.match(/[A-Za-z0-9]+/g)

  if (latinWords?.length) {
    return latinWords
      .slice(0, 2)
      .map((word) => word[0]?.toUpperCase() ?? '')
      .join('')
  }

  return name.slice(0, 2)
}
</script>

<template>
  <aside v-if="asideItems.length && mode === 'aside'" class="sponsor-section sponsor-section--aside">
    <div class="sponsor-section__head sponsor-section__head--compact">
      <p class="sponsor-section__eyebrow">{{ labels.asideLabel }}</p>
    </div>

    <div class="sponsor-card-stack">
      <a
        v-for="item in asideItems"
        :key="item.name"
        class="sponsor-card sponsor-card--compact"
        :href="item.href"
        target="_blank"
        rel="sponsored noopener noreferrer"
        :title="item.description"
      >
        <div class="sponsor-card__brand">
          <span class="sponsor-card__badge" aria-hidden="true">{{ getSponsorBadge(item.name) }}</span>
          <strong>{{ item.name }}</strong>
        </div>
        <div class="sponsor-card__footer">
          <span>{{ labels.readMore }}</span>
          <span class="sponsor-card__arrow" aria-hidden="true">↗</span>
        </div>
      </a>
    </div>
  </aside>

  <section v-else-if="groups.length" class="sponsor-section">
    <div class="sponsor-section__head">
      <p class="sponsor-section__eyebrow">{{ sectionMeta.eyebrow }}</p>
      <h2 class="sponsor-section__title">{{ sectionMeta.title }}</h2>
      <p class="sponsor-section__body">{{ sectionMeta.body }}</p>
    </div>

    <div class="sponsor-section__groups">
      <article
        v-for="group in groups"
        :key="group.tier"
        class="sponsor-tier"
        :class="[`sponsor-tier--${group.tier}`]"
      >
        <div class="sponsor-tier__head">
          <h3>{{ tierLabels[group.tier][isZh ? 'zh' : 'en'] }}</h3>
        </div>

        <a
          v-for="item in group.items"
          :key="item.name"
          class="sponsor-card"
          :href="item.href"
          target="_blank"
          rel="sponsored noopener noreferrer"
        >
          <div class="sponsor-card__meta">
            <strong>{{ item.name }}</strong>
            <p>{{ item.description }}</p>
          </div>
          <span class="sponsor-card__cta">{{ labels.readMore }}</span>
        </a>
      </article>
    </div>
  </section>
</template>
