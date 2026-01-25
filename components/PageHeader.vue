<template>
  <div class="text-center mb-16 animate-fade-in relative">
    <!-- Decorative radial gradient background -->
    <div
      v-if="showGradient"
      class="absolute inset-0 -z-10 bg-gradient-radial from-accent-500/5 via-transparent to-transparent blur-3xl"
    ></div>

    <!-- Floating icon -->
    <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-accent-500 to-accent-600 rounded-2xl mb-6 animate-float">
      <i :class="`bi bi-${icon} text-3xl text-white`"></i>
    </div>

    <!-- Title -->
    <h1 v-if="title" class="text-4xl sm:text-5xl font-bold mb-4 text-surface-900 dark:text-white">
      {{ title }}
    </h1>

    <!-- Subtitle -->
    <p v-if="subtitle" class="text-xl text-surface-600 dark:text-surface-300 max-w-3xl mx-auto italic">
      {{ subtitle }}
    </p>

    <!-- Slot for custom content -->
    <slot />
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  showGradient: {
    type: Boolean,
    default: false
  }
})
</script>
