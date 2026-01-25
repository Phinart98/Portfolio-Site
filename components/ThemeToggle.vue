<template>
  <button 
    @click="handleToggle" 
    class="toggle-btn group" 
    aria-label="Toggle dark mode"
    type="button"
  >
    <i 
      v-show="isDark" 
      class="bi bi-sun-fill icon"
    ></i>
    <i 
      v-show="!isDark" 
      class="bi bi-moon-fill icon"
    ></i>
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const handleToggle = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.toggle-btn {
  @apply relative p-3 rounded-xl transition-all duration-300;
  @apply hover:shadow-lg hover:shadow-accent-500/25;
  @apply hover:-translate-y-1 active:translate-y-0;
  @apply group-hover:scale-110;
  background: transparent;
  border: none;
}

.toggle-btn:hover {
  box-shadow: 0 8px 25px -8px rgb(var(--color-accent-500) / 0.4);
}

.icon {
  @apply text-lg text-accent-700 dark:text-accent-400;
  @apply transition-all duration-300;
  @apply group-hover:scale-110;
}

.toggle-btn:hover .icon {
  @apply text-accent-800 dark:text-accent-300;
}
</style>
