import { onBeforeUnmount, onMounted } from 'vue'

/**
 * 鼠标追踪镜面高光 — 模拟 Apple Liquid Glass 对触控/光标位置的动态响应
 * 通过事件委托监听 pointermove，更新最近的 .lg 元素的 CSS 自定义属性
 */
export function useLiquidGlassPointer() {
  const handlePointerMove = (e: PointerEvent) => {
    const target = (e.target as HTMLElement | null)?.closest?.('.lg') as HTMLElement | null
    if (!target) return

    const rect = target.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    target.style.setProperty('--lg-mx', `${x}%`)
    target.style.setProperty('--lg-my', `${y}%`)
  }

  onMounted(() => {
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
  })

  onBeforeUnmount(() => {
    window.removeEventListener('pointermove', handlePointerMove)
  })
}
