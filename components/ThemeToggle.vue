<template>
  <button @click="toggleColorMode" class="toggle-btn" aria-label="Toggle dark mode">
    <i v-if="colorMode.value === 'light'" class="bi bi-sun-fill"></i>
    <i v-else class="bi bi-moon-fill"></i>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.toggle-btn {
  @apply p-0.5 sm:p-1 rounded-lg transition-all duration-300;
  @apply bg-orange-100/40 dark:bg-orange-900/40;
  @apply border border-orange-500/40 hover:border-orange-700;
}

.toggle-btn i {
  @apply text-lg sm:text-xl text-orange-700 dark:text-orange-600;
}
</style>

