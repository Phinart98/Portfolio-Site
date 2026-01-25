<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :class="buttonClasses"
    :aria-busy="loading"
  >
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>

    <span :class="{ 'invisible': loading }" class="flex items-center justify-center gap-2">
      <span v-if="icon && iconPosition === 'left'" :class="`bi bi-${icon}`" />
      <slot />
      <span v-if="icon && iconPosition === 'right'" :class="`bi bi-${icon}`" />
    </span>
  </NuxtLink>
  <button
    v-else
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClasses"
    :aria-busy="loading"
  >
    <span v-if="loading" class="absolute inset-0 flex items-center justify-center">
      <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>

    <span :class="{ 'invisible': loading }" class="flex items-center justify-center gap-2">
      <span v-if="icon && iconPosition === 'left'" :class="`bi bi-${icon}`" />
      <slot />
      <span v-if="icon && iconPosition === 'right'" :class="`bi bi-${icon}`" />
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost', 'outline'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  icon: {
    type: String,
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  loading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  to: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  }
})

const buttonClasses = computed(() => {
  const baseClasses = [
    'relative',
    'inline-flex',
    'items-center',
    'justify-center',
    'font-medium',
    'rounded-lg',
    'transition-all',
    'duration-200',
    'focus-visible:outline-none',
    'focus-visible:ring-2',
    'focus-visible:ring-offset-2',
    'focus-visible:ring-orange-500',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none'
  ]

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  // Variant classes
  const variantClasses = {
    primary: [
      'bg-gradient-to-r from-orange-500 to-orange-600',
      'text-white',
      'shadow-md shadow-orange-500/25',
      'hover:shadow-lg hover:shadow-orange-500/30',
      'hover:scale-105',
      'active:scale-95'
    ],
    secondary: [
      'bg-dark-100 dark:bg-dark-700',
      'text-dark-900 dark:text-dark-100',
      'border border-dark-300 dark:border-dark-600',
      'hover:bg-dark-200 dark:hover:bg-dark-600',
      'hover:border-orange-400 dark:hover:border-orange-500',
      'active:scale-95'
    ],
    ghost: [
      'text-dark-700 dark:text-dark-300',
      'hover:bg-orange-50 dark:hover:bg-orange-900/20',
      'hover:text-orange-600 dark:hover:text-orange-400',
      'active:scale-95'
    ],
    outline: [
      'border-2 border-orange-500',
      'text-orange-600 dark:text-orange-400',
      'hover:bg-orange-500',
      'hover:text-white',
      'active:scale-95'
    ]
  }

  return [
    ...baseClasses,
    sizeClasses[props.size],
    ...variantClasses[props.variant]
  ]
})
</script>
