<template>
  <div>
    <nav class="flex justify-center">
      <div class="flex justify-between mx-4 my-4 w-full sm:w-3/5 items-center">

        <div class="text-xl sm:text-2xl">
          <NuxtLink to="/" class="logo-link">
            <span class="text-black dark:text-white">philipnarteh.</span>
            <span class="text-orange-500">me</span>
          </NuxtLink>
        </div>


        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="nav-link text-black dark:text-white">
            <i class="bi bi-person me-1"></i>About
          </NuxtLink>
          <NuxtLink to="/blog" class="nav-link text-black dark:text-white">
            <i class="bi bi-journal-text me-1"></i>Blog
          </NuxtLink>
          <!-- Theme Toggle placed at the very end with a left margin -->
          <div class="ml-4">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/* Logo styling - ensure no active background */
.logo-link {
  @apply hover:no-underline;
}
.logo-link.router-link-active {
  @apply bg-transparent;
  animation: none;
  transform: none;
}

/* Navigation link styling */
.nav-link {
  @apply px-4 py-2 rounded-full transition-all duration-300 ease-in-out;
}

.nav-link:not(.router-link-active):hover {
  @apply bg-orange-100 dark:bg-orange-900/30;
}

/* Active state styling with animation */
.router-link-active,
.router-link-exact-active {
  @apply bg-orange-500 text-white scale-105;
  animation: fadeIn 0.3s ease-in-out;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0.6;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1.05);
  }
}
</style>
