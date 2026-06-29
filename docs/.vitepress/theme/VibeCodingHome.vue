<template>
  <main class="vibe-home">
    <section class="vibe-hero" :aria-label="content.heroLabel">
      <div class="vibe-hero__ambient" aria-hidden="true">
        <span class="vibe-light vibe-light--one"></span>
        <span class="vibe-light vibe-light--two"></span>
        <span class="vibe-light vibe-light--three"></span>
        <span class="vibe-lattice"></span>
      </div>

      <div class="vibe-shell">
        <div class="vibe-hero__copy vibe-reveal">
          <p class="vibe-kicker">{{ content.eyebrow }}</p>
          <h1 class="vibe-title" v-html="content.title"></h1>
          <p class="vibe-lead">{{ content.lead }}</p>

          <div class="vibe-actions" :aria-label="content.actionsLabel">
            <a class="vibe-button vibe-button--primary" :href="content.primaryHref">
              <span>{{ content.primaryCta }}</span>
              <span class="vibe-button__icon" aria-hidden="true">-&gt;</span>
            </a>
            <a class="vibe-button vibe-button--glass" :href="content.secondaryHref">
              <span>{{ content.secondaryCta }}</span>
            </a>
          </div>

          <div class="vibe-metrics" :aria-label="content.metricsLabel">
            <div v-for="metric in content.metrics" :key="metric.value" class="vibe-metric">
              <strong>{{ metric.value }}</strong>
              <span>{{ metric.label }}</span>
            </div>
          </div>
        </div>

        <div class="vibe-stage vibe-reveal vibe-reveal--late" :aria-label="content.stageLabel">
          <div class="vibe-stage__halo" aria-hidden="true"></div>

          <div class="vibe-glass vibe-command">
            <div class="vibe-command__bar">
              <span></span>
              <span></span>
              <span></span>
              <strong>{{ content.commandTitle }}</strong>
            </div>
            <div class="vibe-command__body">
              <div
                v-for="(line, i) in commandLines"
                :key="line.text"
                class="vibe-command__line"
                :class="{ 'is-visible': visibleLines > i }"
              >
                <span>{{ line.badge }}</span>
                <code>{{ line.text }}</code>
              </div>
            </div>
          </div>

          <div class="vibe-glass vibe-agent">
            <div class="vibe-agent__top">
              <span class="vibe-agent__status"></span>
              <strong>{{ content.agentTitle }}</strong>
              <em>{{ content.agentMeta }}</em>
            </div>
            <div class="vibe-agent__wave" aria-hidden="true">
              <span v-for="item in 18" :key="item"></span>
            </div>
            <div class="vibe-agent__tasks">
              <span v-for="task in content.agentTasks" :key="task">{{ task }}</span>
            </div>
          </div>

          <div class="vibe-glass vibe-plan">
            <p>{{ content.planLabel }}</p>
            <ol>
              <li v-for="step in content.planSteps" :key="step">{{ step }}</li>
            </ol>
          </div>
        </div>
      </div>
    </section>

    <section class="vibe-section vibe-section--tools" :aria-label="content.toolsLabel">
      <div class="vibe-section__head">
        <p class="vibe-section__eyebrow">{{ content.toolsEyebrow }}</p>
        <h2>{{ content.toolsTitle }}</h2>
      </div>
      <div class="vibe-tool-grid">
        <a
          v-for="tool in tools"
          :key="tool.title"
          class="vibe-tool"
          :href="tool.href"
          :style="{ '--tool-hue': tool.hue }"
        >
          <span class="vibe-tool__mark" aria-hidden="true">{{ tool.mark }}</span>
          <strong>{{ tool.title }}</strong>
          <p>{{ tool.desc }}</p>
          <em>{{ tool.cta }}</em>
        </a>
      </div>
    </section>

    <section class="vibe-section vibe-section--path" :aria-label="content.pathLabel">
      <div class="vibe-path-panel">
        <div class="vibe-section__head">
          <p class="vibe-section__eyebrow">{{ content.pathEyebrow }}</p>
          <h2>{{ content.pathTitle }}</h2>
        </div>

        <div class="vibe-path">
          <a
            v-for="(card, index) in cards"
            :key="card.title"
            class="vibe-path-card"
            :href="card.href"
          >
            <span class="vibe-path-card__num">{{ String(index + 1).padStart(2, '0') }}</span>
            <strong>{{ card.title }}</strong>
            <p>{{ card.desc }}</p>
          </a>
        </div>
      </div>
    </section>

    <section class="vibe-section vibe-section--flow" :aria-label="content.flowLabel">
      <div class="vibe-flow">
        <div class="vibe-flow__copy">
          <p class="vibe-section__eyebrow">{{ content.flowEyebrow }}</p>
          <h2>{{ content.flowTitle }}</h2>
          <p>{{ content.flowBody }}</p>
        </div>
        <div class="vibe-flow__steps">
          <div v-for="step in content.flowSteps" :key="step.title" class="vibe-flow-step">
            <span>{{ step.num }}</span>
            <div>
              <strong>{{ step.title }}</strong>
              <p>{{ step.body }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { withBase } from 'vitepress'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  locale: {
    type: String,
    default: 'zh'
  }
})

const basePath = (path) => withBase(path)

const homeContent = {
  zh: {
    heroLabel: 'Vibe Coding 首页',
    eyebrow: 'AI 编程协作手册',
    title: '把想法、上下文和验收标准<br><em>熔进一条可交付的工作流</em>',
    lead: '从安装 Claude Code 与 Codex CLI，到写提示词、喂项目上下文、拆任务、审查 diff、跑验证，帮你把 AI 编程从灵感实验变成稳定交付。',
    actionsLabel: '首页主操作',
    primaryCta: '开始快速上手',
    secondaryCta: '安装工具',
    primaryHref: basePath('/zh/guides/quick-start'),
    secondaryHref: basePath('/zh/guides/claude-code-install'),
    metricsLabel: '文档覆盖范围',
    metrics: [
      { value: '02', label: '安装指南' },
      { value: '04', label: '协作阶段' },
      { value: '12+', label: '实战章节' }
    ],
    stageLabel: 'AI 协作工作台动画',
    commandTitle: 'vibe-session.md',
    commandLines: [
      { badge: 'goal', text: '把文章发布流程改成可回滚的小步任务' },
      { badge: 'ctx', text: '读取路由、构建脚本、当前侧边栏结构' },
      { badge: 'rule', text: '先计划，再改动，每步都验证' },
      { badge: 'ship', text: '构建通过后给出变更摘要' }
    ],
    agentTitle: 'AI pair is composing',
    agentMeta: 'live plan',
    agentTasks: ['scan repo', 'edit docs', 'run build'],
    planLabel: '交付路径',
    planSteps: ['读上下文', '拆小步', '改代码', '跑验证'],
    toolsLabel: '工具安装入口',
    toolsEyebrow: 'Toolchain',
    toolsTitle: '先把趁手的 AI 编程工具装好',
    pathLabel: '学习路径',
    pathEyebrow: 'Learning Path',
    pathTitle: '按真实开发阶段进入指南',
    flowLabel: '推荐工作流',
    flowEyebrow: 'Workflow',
    flowTitle: '好看的首页只是入口，真正重要的是节奏',
    flowBody: '每次让 AI 改代码，都把目标、上下文、约束和验收标准放在同一个闭环里。你负责判断方向，AI 负责把可验证的小步推进下去。',
    flowSteps: [
      { num: '01', title: '讲清楚目标', body: '把要完成的功能、相关文件和不能碰的边界一次说明白。' },
      { num: '02', title: '先读代码再计划', body: '让 AI 先总结现有模式，再给出可审核的执行步骤。' },
      { num: '03', title: '小步修改并验证', body: '每一步都能看 diff、跑检查、确认没有偏离目标。' }
    ],
    tools: [
      {
        mark: 'CC',
        hue: '#0ea5a4',
        title: 'Claude Code',
        desc: '终端原生的 AI 编程助手，适合深度理解仓库与多文件修改。',
        cta: '查看安装指南',
        href: basePath('/zh/guides/claude-code-install')
      },
      {
        mark: 'OX',
        hue: '#2563eb',
        title: 'Codex CLI',
        desc: 'OpenAI 的本地编程代理，强调沙箱、审批流和可控执行。',
        cta: '查看安装指南',
        href: basePath('/zh/guides/codex-cli-install')
      },
      {
        mark: 'AI',
        hue: '#d97706',
        title: '快速开始',
        desc: '用一个低风险任务跑通目标描述、代码修改和最终验证。',
        cta: '开始练习',
        href: basePath('/zh/guides/quick-start')
      }
    ],
    cards: [
      {
        title: '快速开始',
        desc: '从一个小功能练习 AI 协作的完整闭环。',
        href: basePath('/zh/guides/quick-start')
      },
      {
        title: '提示与上下文',
        desc: '写出让 AI 真正理解任务和项目的提示词。',
        href: basePath('/zh/api/chat')
      },
      {
        title: '协作管理',
        desc: '把需求、验收、边界和人机分工整理清楚。',
        href: basePath('/zh/admin/keys')
      },
      {
        title: '交付排障',
        desc: '处理跑偏、测试失败、质量下滑和上线检查。',
        href: basePath('/zh/ops/troubleshooting')
      }
    ]
  },
  en: {
    heroLabel: 'Vibe Coding home',
    eyebrow: 'AI coding collaboration manual',
    title: 'Turn ideas, context, and acceptance criteria<br><em>into a shippable workflow</em>',
    lead: 'Install Claude Code and Codex CLI, write better prompts, feed project context, split tasks, review diffs, run verification, and move AI coding from experiments into repeatable delivery.',
    actionsLabel: 'Primary home actions',
    primaryCta: 'Start quick start',
    secondaryCta: 'Install tools',
    primaryHref: basePath('/en/guides/quick-start'),
    secondaryHref: basePath('/en/guides/quick-start'),
    metricsLabel: 'Documentation coverage',
    metrics: [
      { value: '02', label: 'tool guides' },
      { value: '04', label: 'work stages' },
      { value: '12+', label: 'chapters' }
    ],
    stageLabel: 'AI collaboration workspace animation',
    commandTitle: 'vibe-session.md',
    commandLines: [
      { badge: 'goal', text: 'turn the publishing flow into reversible small tasks' },
      { badge: 'ctx', text: 'read routes, build scripts, and sidebar structure' },
      { badge: 'rule', text: 'plan first, edit second, verify every step' },
      { badge: 'ship', text: 'summarize the change after the build passes' }
    ],
    agentTitle: 'AI pair is composing',
    agentMeta: 'live plan',
    agentTasks: ['scan repo', 'edit docs', 'run build'],
    planLabel: 'Delivery path',
    planSteps: ['read context', 'split tasks', 'edit code', 'verify'],
    toolsLabel: 'Tool installation entry points',
    toolsEyebrow: 'Toolchain',
    toolsTitle: 'Install the AI coding tools first',
    pathLabel: 'Learning path',
    pathEyebrow: 'Learning Path',
    pathTitle: 'Jump in by real development stage',
    flowLabel: 'Recommended workflow',
    flowEyebrow: 'Workflow',
    flowTitle: 'The page is the doorway. The rhythm is the product.',
    flowBody: 'Every AI coding task works better when goal, context, constraints, and acceptance criteria live in one loop. You steer the direction; AI advances the verifiable steps.',
    flowSteps: [
      { num: '01', title: 'State the goal', body: 'Name the feature, relevant files, and boundaries that must stay intact.' },
      { num: '02', title: 'Read before planning', body: 'Ask AI to summarize the existing pattern before proposing implementation steps.' },
      { num: '03', title: 'Edit and verify in small steps', body: 'Review diffs, run checks, and keep the work aligned with the goal.' }
    ],
    tools: [
      {
        mark: 'CC',
        hue: '#0ea5a4',
        title: 'Claude Code',
        desc: 'A terminal-native AI coding assistant for understanding repos and editing across files.',
        cta: 'Open guide',
        href: basePath('/en/guides/quick-start')
      },
      {
        mark: 'OX',
        hue: '#2563eb',
        title: 'Codex CLI',
        desc: 'OpenAI local coding agent with sandboxing, approval flow, and controlled execution.',
        cta: 'Open guide',
        href: basePath('/en/guides/quick-start')
      },
      {
        mark: 'AI',
        hue: '#d97706',
        title: 'Quick start',
        desc: 'Run one low-risk task through prompting, implementation, and verification.',
        cta: 'Start practice',
        href: basePath('/en/guides/quick-start')
      }
    ],
    cards: [
      {
        title: 'Quick start',
        desc: 'Practice the full AI collaboration loop with one small feature.',
        href: basePath('/en/guides/quick-start')
      },
      {
        title: 'Prompting and context',
        desc: 'Write prompts that help AI understand the task and the project.',
        href: basePath('/en/api/chat')
      },
      {
        title: 'Collaboration management',
        desc: 'Clarify requirements, acceptance, boundaries, and human roles.',
        href: basePath('/en/admin/keys')
      },
      {
        title: 'Delivery troubleshooting',
        desc: 'Handle drift, failing tests, quality regressions, and launch checks.',
        href: basePath('/en/ops/troubleshooting')
      }
    ]
  }
}

const content = computed(() => homeContent[props.locale] ?? homeContent.zh)
const commandLines = computed(() => content.value.commandLines)
const tools = computed(() => content.value.tools)
const cards = computed(() => content.value.cards)

const visibleLines = ref(0)
let timers = []

onMounted(() => {
  timers = [240, 620, 1020, 1460].map((delay, index) => (
    window.setTimeout(() => {
      visibleLines.value = index + 1
    }, delay)
  ))
})

onBeforeUnmount(() => {
  timers.forEach((timer) => window.clearTimeout(timer))
})
</script>
