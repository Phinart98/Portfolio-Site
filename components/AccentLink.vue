<template>
  <component
    :is="external ? 'a' : 'NuxtLink'"
    :to="external ? undefined : to"
    :href="external ? to : undefined"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    class="accent-link"
  >
    <slot />
  </component>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    required: true
  },
  external: {
    type: Boolean,
    default: false
  }
})
</script>

<style scoped>
.accent-link {
  @apply text-accent-700 dark:text-accent-400;
  @apply transition-colors duration-300;
  @apply relative inline-block;
}

.accent-link::after {
  content: '';
  @apply absolute bottom-0 left-0;
  @apply w-full h-0.5;
  @apply bg-accent-600 dark:bg-accent-400;
  @apply origin-left;
  @apply transition-transform duration-300;
  @apply scale-x-100;
}

.accent-link:hover {
  @apply text-accent-600 dark:text-accent-300;
}

.accent-link:hover::after {
  @apply scale-x-110;
}
</style>
