import { defineConfig } from 'vitepress'

const zhSidebar = [
  {
    text: '入门路径',
    items: [
      { text: '快速开始', link: '/zh/guides/quick-start' },
      { text: '安装 Claude Code', link: '/zh/guides/claude-code-install' },
      { text: '安装 Codex CLI', link: '/zh/guides/codex-cli-install' },
      { text: 'AI 编程切换工具分析', link: '/zh/guides/ai-coding-switch-tools' },
      { text: '选择助手', link: '/zh/guides/models' },
      { text: '控制成本与上下文', link: '/zh/guides/billing' }
    ]
  },
  {
    text: '提示与上下文',
    items: [
      { text: '任务提示词', link: '/zh/api/chat' },
      { text: '视觉资料', link: '/zh/api/images' },
      { text: '项目上下文', link: '/zh/api/embeddings' }
    ]
  },
  {
    text: '协作管理',
    items: [
      { text: '需求与验收', link: '/zh/admin/keys' },
      { text: '工作流拆解', link: '/zh/admin/channels' },
      { text: '人机分工', link: '/zh/admin/users' }
    ]
  },
  {
    text: '进阶玩法',
    items: [
      { text: '完整 AI 编程会话', link: '/zh/advanced/session-workflow' },
      { text: '上下文工程', link: '/zh/advanced/context-engineering' },
      { text: 'AI Debug 工作流', link: '/zh/advanced/debugging-workflow' },
      { text: 'AI 代码审查', link: '/zh/advanced/code-review' },
      { text: '安全重构', link: '/zh/advanced/refactoring' },
      { text: '多角色协作', link: '/zh/advanced/multi-agent' },
      { text: '项目级 AGENTS.md', link: '/zh/advanced/agents-md' }
    ]
  },
  {
    text: '交付排障',
    items: [
      { text: '常见问题排查', link: '/zh/ops/troubleshooting' },
      { text: '交付上线', link: '/zh/ops/deployment' }
    ]
  }
]

const enSidebar = [
  {
    text: 'Getting Started',
    items: [
      { text: 'Quick Start', link: '/en/guides/quick-start' },
      { text: 'Choose an Assistant', link: '/en/guides/models' },
      { text: 'Control Cost and Context', link: '/en/guides/billing' }
    ]
  },
  {
    text: 'Prompting and Context',
    items: [
      { text: 'Task Prompts', link: '/en/api/chat' },
      { text: 'Visual Inputs', link: '/en/api/images' },
      { text: 'Project Context', link: '/en/api/embeddings' }
    ]
  },
  {
    text: 'Collaboration Management',
    items: [
      { text: 'Requirements and Acceptance', link: '/en/admin/keys' },
      { text: 'Workflow Breakdown', link: '/en/admin/channels' },
      { text: 'Human and AI Roles', link: '/en/admin/users' }
    ]
  },
  {
    text: 'Advanced Patterns',
    items: [
      { text: 'Full AI Coding Session', link: '/en/advanced/session-workflow' },
      { text: 'Context Engineering', link: '/en/advanced/context-engineering' },
      { text: 'AI Debug Workflow', link: '/en/advanced/debugging-workflow' },
      { text: 'AI Code Review', link: '/en/advanced/code-review' },
      { text: 'Safe Refactoring', link: '/en/advanced/refactoring' },
      { text: 'Multi-Role Collaboration', link: '/en/advanced/multi-agent' },
      { text: 'Project-Level AGENTS.md', link: '/en/advanced/agents-md' }
    ]
  },
  {
    text: 'Delivery and Troubleshooting',
    items: [
      { text: 'Troubleshooting', link: '/en/ops/troubleshooting' },
      { text: 'Delivery', link: '/en/ops/deployment' }
    ]
  }
]

export default defineConfig({
  title: 'Vibe Coding Guide',
  description: 'A practical guide to building software with AI coding assistants',
  base: process.env.VITEPRESS_BASE || '/',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: undefined,
    search: {
      provider: 'local'
    },
    outline: {
      level: [2, 3]
    },
    socialLinks: [{ icon: 'github', link: 'https://example.com' }]
  },
  locales: {
    zh: {
      label: '中文',
      lang: 'zh-CN',
      title: 'Vibe Coding 指南',
      description: '用 AI 编程助手完成真实项目的实践教程',
      themeConfig: {
        nav: [],
        sidebar: zhSidebar,
        outline: { label: '本页目录', level: [2, 3] },
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        lastUpdated: {
          text: '最后更新'
        },
        langMenuLabel: '切换语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式'
      }
    },
    en: {
      label: 'English',
      lang: 'en-US',
      title: 'Vibe Coding Guide',
      description: 'A practical guide to building software with AI coding assistants',
      themeConfig: {
        nav: [],
        sidebar: enSidebar,
        outline: { label: 'On this page', level: [2, 3] },
        docFooter: {
          prev: 'Previous page',
          next: 'Next page'
        },
        lastUpdated: {
          text: 'Last updated'
        }
      }
    }
  }
})
