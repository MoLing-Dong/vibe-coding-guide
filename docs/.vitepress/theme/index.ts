import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VibeCodingHome from './VibeCodingHome.vue'
import './liquid-glass.css'
import './home.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VibeCodingHome', VibeCodingHome)
  }
} satisfies Theme
