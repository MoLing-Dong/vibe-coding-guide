---
title: Vibe Coding 指南
layout: page
sidebar: false
outline: false
---

<script setup>
import { inBrowser, withBase } from 'vitepress'

const zhUrl = withBase('/zh/')

if (inBrowser) {
  window.location.href = zhUrl
}
</script>

# Vibe Coding 指南

<a :href="zhUrl">进入中文文档</a>
