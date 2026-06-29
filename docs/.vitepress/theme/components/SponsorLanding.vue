<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'
import { getSponsorGroups } from '../sponsors'
import { useLiquidGlassPointer } from '../use-liquid-glass-pointer'

const { localeIndex } = useData()

const isZh = computed(() => !(localeIndex.value?.startsWith('en') ?? false))
const groups = computed(() => getSponsorGroups(localeIndex.value, 'home'))

const heroTitle = computed(() => (isZh.value ? '赞助商' : 'Sponsors'))
const heroLead = computed(() =>
    isZh.value
        ? '独立展示赞助支持者，按铂金、黄金、白银分层。'
        : 'Sponsors are shown on a dedicated page, grouped by platinum, gold, and silver.'
)

const sections = computed(() => groups.value)

const tierLabel = (tier: string) => {
  const labels = isZh.value
    ? { platinum: '铂金', gold: '黄金', silver: '白银' }
    : { platinum: 'Platinum', gold: 'Gold', silver: 'Silver' }
  return labels[tier as 'platinum' | 'gold' | 'silver']
}

useLiquidGlassPointer()
</script>

<template>
    <main class="sponsor-landing">
        <section class="sponsor-hero lg" aria-label="Sponsors hero">
            <div class="sponsor-hero__glass" aria-hidden="true"></div>
            <div class="sponsor-hero__copy">
                <p class="sponsor-hero__eyebrow">{{ isZh ? '合作支持' : 'Support' }}</p>
                <h1>{{ heroTitle }}</h1>
                <p>{{ heroLead }}</p>
            </div>
            <div class="sponsor-hero__stats">
                <div class="sponsor-hero__stat lg" v-for="group in sections" :key="group.tier">
                    <strong>{{ tierLabel(group.tier) }}</strong>
                    <span>{{ group.items.length }}</span>
                </div>
            </div>
        </section>

        <section v-for="section in sections" :key="section.tier" class="sponsor-group lg">
            <div class="sponsor-group__head">
                <div>
                    <p class="sponsor-group__eyebrow">{{ tierLabel(section.tier) }}</p>
                    <h2>{{ isZh ? '赞助支持者' : 'Sponsors' }}</h2>
                </div>
                <span>{{ section.items.length }}</span>
            </div>

            <div class="sponsor-group__cards">
                <a v-for="item in section.items" :key="item.name" class="sponsor-tile lg" :href="item.href"
                    target="_blank" rel="sponsored noopener noreferrer">
                    <div class="sponsor-tile__glow" aria-hidden="true"></div>
                    <div class="sponsor-tile__body">
                        <span class="sponsor-tile__badge">{{ tierLabel(section.tier) }}</span>
                        <strong>{{ item.name }}</strong>
                        <p>{{ item.description }}</p>
                    </div>
                    <div class="sponsor-tile__footer">
                        <span>{{ isZh ? '访问官网' : 'Visit site' }}</span>
                        <span class="sponsor-tile__arrow" aria-hidden="true">↗</span>
                    </div>
                </a>
            </div>
        </section>
    </main>
</template>
