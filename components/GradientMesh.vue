<template>
  <div class="absolute inset-0 -z-10 overflow-hidden pointer-events-none" :class="{ 'opacity-50': subtle }">
    <!-- Top-right orange blob -->
    <div
      class="absolute w-96 h-96 rounded-full blur-3xl"
      :class="[
        '-top-48 -right-48',
        'bg-gradient-radial from-orange-500/20 via-orange-400/10 to-transparent',
        animated && 'animate-float'
      ]"
      style="animation-delay: 0s;"
    ></div>

    <!-- Bottom-left teal blob -->
    <div
      class="absolute w-80 h-80 rounded-full blur-3xl"
      :class="[
        '-bottom-40 -left-40',
        'bg-gradient-radial from-teal-500/10 via-teal-400/5 to-transparent',
        animated && 'animate-float'
      ]"
      style="animation-delay: 2s;"
    ></div>

    <!-- Center accent blob (optional) -->
    <div
      v-if="includeCenter"
      class="absolute w-64 h-64 rounded-full blur-3xl"
      :class="[
        'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
        'bg-gradient-radial from-orange-400/5 via-pink-400/5 to-transparent',
        animated && 'animate-pulse-subtle'
      ]"
    ></div>

    <!-- Noise texture overlay -->
    <div
      v-if="includeNoise"
      class="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]"
      style="background-image: url('data:image/svg+xml,%3Csvg viewBox=&quot;0 0 200 200&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cfilter id=&quot;noiseFilter&quot;%3E%3CfeTurbulence type=&quot;fractalNoise&quot; baseFrequency=&quot;0.9&quot; numOctaves=&quot;3&quot; stitchTiles=&quot;stitch&quot;/%3E%3C/filter%3E%3Crect width=&quot;100%&quot; height=&quot;100%&quot; filter=&quot;url(%23noiseFilter)&quot;/%3E%3C/svg%3E');"
    ></div>
  </div>
</template>

<script setup>
defineProps({
  animated: {
    type: Boolean,
    default: true
  },
  subtle: {
    type: Boolean,
    default: false
  },
  includeCenter: {
    type: Boolean,
    default: false
  },
  includeNoise: {
    type: Boolean,
    default: true
  }
})
</script>

<style scoped>
.bg-gradient-radial {
  background-image: radial-gradient(circle, var(--tw-gradient-stops));
}
</style>
