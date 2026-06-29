import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import VibeCodingHome from './VibeCodingHome.vue'
import SponsorLanding from './components/SponsorLanding.vue'
import './liquid-glass.css'
import './home.css'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('VibeCodingHome', VibeCodingHome)
    app.component('SponsorLanding', SponsorLanding)
  }
} satisfies Theme
