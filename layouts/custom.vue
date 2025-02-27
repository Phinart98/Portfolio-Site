<template>
  <div>
    <nav class="flex justify-center">
      <div class="flex justify-between mx-4 my-4 w-full sm:w-3/5 items-center">
        <!-- Home icon for blog page -->
        <div class="text-lg sm:text-xl">
          <NuxtLink to="/" class="logo-link">
            <i class="bi bi-house-door text-orange-500"></i>
            <span class="dark:text-white"> Home</span>
          </NuxtLink>
        </div>

        <!-- Back navigation placed on left while toggle goes at absolute right -->
        <div class="flex items-center gap-2">
          <div class="blog-back" @click="goBack()">
            <NuxtLink class="nav-link flex items-center gap-2 text-black dark:text-white">
              <i class="bi bi-arrow-left"></i>
              <span>Back to Blog Posts</span>
            </NuxtLink>
          </div>
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
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.logo-link {
  @apply hover:no-underline;
}
.logo-link.router-link-active {
  @apply bg-transparent;
  animation: none;
  transform: none;
}
.nav-link {
  @apply px-4 py-2 rounded-full transition-all duration-300 ease-in-out;
}
.nav-link:not(.router-link-active):hover {
  @apply bg-orange-100 dark:bg-orange-900/30;
}
.router-link-active,
.router-link-exact-active {
  @apply bg-orange-500 text-white scale-105;
  animation: fadeIn 0.3s ease-in-out;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
}
.blog-back:hover {
  @apply cursor-pointer;
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
