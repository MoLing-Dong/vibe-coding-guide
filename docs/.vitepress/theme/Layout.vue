<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import SponsorSection from './components/SponsorSection.vue'

const { frontmatter } = useData()
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-bottom>
      <SponsorSection v-if="frontmatter.layout !== 'page'" mode="aside" />
    </template>
  </DefaultTheme.Layout>
</template>
