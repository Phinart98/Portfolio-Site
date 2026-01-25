<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-accent-50/30 to-accent-100/50 dark:from-surface-950 dark:via-surface-900 dark:to-surface-800 transition-all duration-300">
    <!-- Skip to main content link for accessibility -->
    <a href="#main-content" class="skip-link">
      Skip to main content
    </a>

    <nav class="backdrop-blur-md bg-white/80 dark:bg-surface-800/90 border-b border-accent-300/70 dark:border-surface-600/70 sticky top-0 z-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 sm:h-18">
          <div class="flex-shrink-0">
            <NuxtLink to="/" class="logo-link">
              <span class="text-2xl sm:text-3xl font-bold">
                <span class="text-surface-900 dark:text-white">philipnarteh.</span>
                <span class="text-accent-600 dark:text-accent-400">me</span>
              </span>
            </NuxtLink>
          </div>

          <div class="hidden md:flex items-center space-x-1">
            <NuxtLink to="/" class="nav-link" :aria-current="route.path === '/' ? 'page' : undefined">
              <i class="bi bi-person mr-2"></i>About
            </NuxtLink>
            <NuxtLink to="/blog" class="nav-link" :aria-current="route.path.startsWith('/blog') ? 'page' : undefined">
              <i class="bi bi-journal-text mr-2"></i>Blog
            </NuxtLink>
            <NuxtLink to="/talks" class="nav-link" :aria-current="route.path.startsWith('/talks') ? 'page' : undefined">
              <i class="bi bi-mic mr-2"></i>Talks
            </NuxtLink>
            <NuxtLink to="/certifications" class="nav-link" :aria-current="route.path === '/certifications' ? 'page' : undefined">
              <i class="bi bi-award mr-2"></i>Certifications
            </NuxtLink>

            <ThemeToggle />
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              @click="toggleMobileMenu"
              class="mobile-menu-btn"
              type="button"
              :aria-expanded="mobileMenuOpen"
              aria-label="Toggle navigation menu"
            >
              <i :class="mobileMenuOpen ? 'bi bi-x-lg' : 'bi bi-list'" class="text-xl"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>

    <!-- Mobile menu overlay -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0 transform -translate-y-4"
      enter-to-class="opacity-100 transform translate-y-0"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100 transform translate-y-0"
      leave-to-class="opacity-0 transform -translate-y-4"
    >
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden fixed top-16 left-0 right-0 z-40 mobile-menu-overlay"
      >
        <div class="mobile-menu-content">
          <div class="flex flex-col space-y-2 items-end p-4">
            <NuxtLink to="/" class="mobile-nav-link text-right" @click="mobileMenuOpen = false">
              <i class="bi bi-person mr-3"></i>About
            </NuxtLink>
            <NuxtLink to="/blog" class="mobile-nav-link text-right" @click="mobileMenuOpen = false">
              <i class="bi bi-journal-text mr-3"></i>Blog
            </NuxtLink>
            <NuxtLink to="/talks" class="mobile-nav-link text-right" @click="mobileMenuOpen = false">
              <i class="bi bi-mic mr-3"></i>Talks
            </NuxtLink>
            <NuxtLink to="/certifications" class="mobile-nav-link text-right" @click="mobileMenuOpen = false">
              <i class="bi bi-award mr-3"></i>Certifications
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>

    <!-- Backdrop overlay -->
    <transition
      enter-active-class="transition ease-out duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-200"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-show="mobileMenuOpen" 
        class="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
        @click="mobileMenuOpen = false"
      ></div>
    </transition>

    <main id="main-content" class="animate-fade-in">
      <slot />
    </main>

    <!-- Footer -->
    <footer class="mt-20 py-8 border-t border-accent-300/60 dark:border-surface-700/60">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-surface-600 dark:text-surface-300 text-sm">
          © {{ new Date().getFullYear() }} Philip Narteh
        </p>
      </div>
    </footer>
  </div>
</template>


<script setup>
const mobileMenuOpen = ref(false)
const route = useRoute()

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

// Close mobile menu when route changes
watch(() => route.path, () => {
  mobileMenuOpen.value = false
})

// Ensure mobile menu closes on outside click or escape
onMounted(() => {
  if (process.client) {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        mobileMenuOpen.value = false
      }
    })
  }
})
</script>

<style scoped>
/* Logo styling */
.logo-link {
  @apply hover:no-underline transition-all duration-300;
}

.logo-link:hover {
  transform: translateY(-2px);
}

.logo-link.router-link-active {
  @apply bg-transparent;
}

/* Desktop navigation links */
.nav-link {
  @apply px-4 py-2 rounded-xl text-surface-700 dark:text-surface-200 transition-all duration-300 ease-in-out;
  @apply hover:bg-accent-100/80 dark:hover:bg-accent-900/30;
  @apply hover:text-accent-700 dark:hover:text-accent-400;
  @apply hover:shadow-sm hover:-translate-y-0.5;
}

.nav-link.router-link-active,
.nav-link.router-link-exact-active {
  @apply bg-gradient-to-r from-accent-500 to-accent-600;
  @apply text-white shadow-lg transform scale-105;
  @apply shadow-accent-500/25;
}

/* Mobile menu button */
.mobile-menu-btn {
  @apply p-2 rounded-lg text-surface-700 dark:text-surface-200;
  @apply hover:bg-accent-100 dark:hover:bg-accent-900/30;
  @apply transition-all duration-300;
  background: transparent;
  border: none;
}

/* Accessible focus state for mobile menu button */
.mobile-menu-btn:focus-visible {
  outline: 2px solid rgb(var(--color-accent-600));
  outline-offset: 2px;
  background: rgb(var(--color-accent-500) / 0.1);
}

/* Mobile menu overlay */
.mobile-menu-overlay {
  max-height: 50vh;
  box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

.mobile-menu-content {
  @apply backdrop-blur-md bg-white/95 dark:bg-surface-800/95;
  @apply border-b border-accent-300/70 dark:border-surface-600/70;
  max-height: 50vh;
  overflow-y: auto;
  /* Custom scrollbar styling */
  scrollbar-width: thin;
  scrollbar-color: rgb(var(--color-accent-500) / 0.5) transparent;
}

/* Webkit scrollbar styling for Chrome/Safari */
.mobile-menu-content::-webkit-scrollbar {
  width: 4px;
}

.mobile-menu-content::-webkit-scrollbar-track {
  background: transparent;
}

.mobile-menu-content::-webkit-scrollbar-thumb {
  background: rgb(var(--color-accent-500) / 0.5);
  border-radius: 2px;
}

.mobile-menu-content::-webkit-scrollbar-thumb:hover {
  background: rgb(var(--color-accent-500) / 0.7);
}

/* Mobile navigation links */
.mobile-nav-link {
  @apply flex items-center justify-end px-4 py-3 text-surface-700 dark:text-surface-200;
  @apply hover:bg-accent-100/80 dark:hover:bg-accent-900/30;
  @apply hover:text-accent-700 dark:hover:text-accent-400;
  @apply transition-all duration-300 rounded-lg mx-2;
}

.mobile-nav-link.router-link-active,
.mobile-nav-link.router-link-exact-active {
  @apply bg-gradient-to-r from-accent-500 to-accent-600 text-white;
}
</style>
