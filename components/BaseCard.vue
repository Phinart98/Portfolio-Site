<template>
  <component
    :is="as"
    :class="cardClasses"
  >
    <slot />
  </component>
</template>

<script setup>
const props = defineProps({
  as: {
    type: String,
    default: 'div',
    validator: (value) => ['div', 'article', 'a', 'NuxtLink'].includes(value)
  },
  interactive: {
    type: Boolean,
    default: false
  },
  elevated: {
    type: Boolean,
    default: false
  },
  padded: {
    type: Boolean,
    default: true
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'featured', 'bento', 'glass'].includes(value)
  },
  glow: {
    type: Boolean,
    default: false
  }
})

const cardClasses = computed(() => {
  const baseClasses = [
    'rounded-2xl',
    'transition-all duration-300',
    props.padded && 'p-6'
  ]

  // Variant-specific base styling
  const variantClasses = {
    default: [
      'bg-white/50 dark:bg-surface-800/50',
      'backdrop-blur-sm',
      'border border-accent-300/60 dark:border-surface-700/60'
    ],
    featured: [
      'bg-gradient-to-br from-white/60 via-accent-50/40 to-white/60',
      'dark:from-surface-800/60 dark:via-surface-800/60 dark:to-surface-800/60',
      'backdrop-blur-md',
      'border border-accent-400/70 dark:border-surface-700/60',
      'shadow-lg shadow-accent-500/10 dark:shadow-surface-900/20'
    ],
    bento: [
      'bg-white/70 dark:bg-surface-800/70',
      'backdrop-blur-lg',
      'border-2 border-accent-300/50 dark:border-surface-700/50'
    ],
    glass: [
      'bg-white/30 dark:bg-surface-800/30',
      'backdrop-blur-xl',
      'border border-white/40 dark:border-surface-700/40',
      'shadow-2xl shadow-accent-500/5 dark:shadow-surface-900/10'
    ]
  }

  // Interactive states
  const interactiveClasses = props.interactive ? [
    'cursor-pointer',
    'hover:shadow-lg hover:shadow-accent-500/10',
    'hover:-translate-y-1',
    'hover:border-accent-400/70 dark:hover:border-accent-500/40',
    'hover:ring-2 hover:ring-accent-400/20 dark:hover:ring-accent-500/20'
  ] : []

  // Elevated state
  const elevatedClasses = props.elevated ? [
    'shadow-xl shadow-accent-500/10',
    '-translate-y-2',
    'border-accent-400/70 dark:border-accent-500/40'
  ] : []

  // Glow effect
  const glowClasses = props.glow ? [
    'hover:shadow-2xl hover:shadow-accent-500/20',
    'hover:border-accent-400 dark:hover:border-accent-400'
  ] : []

  return [
    ...baseClasses,
    ...variantClasses[props.variant],
    ...interactiveClasses,
    ...elevatedClasses,
    ...glowClasses
  ]
})
</script>
