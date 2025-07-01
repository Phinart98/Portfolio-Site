<template>
  <button 
    @click="handleToggle" 
    class="toggle-btn group" 
    aria-label="Toggle dark mode"
    type="button"
  >
    <i 
      v-show="!isDark" 
      class="bi bi-sun-fill icon"
    ></i>
    <i 
      v-show="isDark" 
      class="bi bi-moon-fill icon"
    ></i>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const handleToggle = () => {
  console.log('Toggle clicked, current mode:', colorMode.value)
  try {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    console.log('New preference set to:', colorMode.preference)
  } catch (error) {
    console.error('Error toggling theme:', error)
  }
}
</script>

<style scoped>
.toggle-btn {
  @apply relative p-3 rounded-xl transition-all duration-300;
  @apply bg-gradient-to-br from-orange-100 to-orange-200/80;
  @apply dark:from-orange-900/40 dark:to-orange-800/60;
  @apply border border-orange-300/50 dark:border-orange-700/50;
  @apply hover:border-orange-500 dark:hover:border-orange-500;
  @apply hover:shadow-lg hover:shadow-orange-500/25;
  @apply hover:-translate-y-1 active:translate-y-0;
  @apply group-hover:scale-110;
}

.toggle-btn:hover {
  box-shadow: 0 8px 25px -8px rgba(249, 115, 22, 0.4);
}

.icon {
  @apply text-lg text-orange-700 dark:text-orange-400;
  @apply transition-all duration-300;
  @apply group-hover:scale-110;
}

.toggle-btn:hover .icon {
  @apply text-orange-800 dark:text-orange-300;
}

/* Spin animation for toggling state */
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.animate-spin {
  animation: spin 0.3s ease-in-out;
}
</style>

