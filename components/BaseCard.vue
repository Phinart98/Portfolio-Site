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
  }
})

const cardClasses = computed(() => {
  return [
    // Base card styling
    'bg-white/50 dark:bg-dark-800/50',
    'backdrop-blur-sm',
    'rounded-2xl',
    'border border-orange-300/60 dark:border-dark-700/60',
    'transition-all duration-300',

    // Padding
    props.padded && 'p-6',

    // Interactive states
    props.interactive && [
      'cursor-pointer',
      'hover:shadow-lg hover:shadow-orange-500/10',
      'hover:-translate-y-1',
      'hover:border-orange-400/70 dark:hover:border-orange-500/40',
      'hover:ring-2 hover:ring-orange-400/20 dark:hover:ring-orange-500/20'
    ],

    // Elevated state
    props.elevated && [
      'shadow-xl shadow-orange-500/10',
      '-translate-y-2',
      'border-orange-400/70 dark:border-orange-500/40'
    ]
  ]
})
</script>
