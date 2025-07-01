<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-6 animate-float">
        <i class="bi bi-lightbulb text-3xl text-white"></i>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
        Projects & Experiments
      </h1>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
        Personal projects, experiments, and innovative solutions I've built.
      </p>
    </div>

    <!-- Projects Grid - Commented out until ready -->
    <!-- 
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>2024</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>Django + Vue.js</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            Accessible Health Records System
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            A comprehensive health records management system built with accessibility-first design principles. 
            Features include ARIA compliance, keyboard navigation, and screen reader optimization.
          </p>
          <div class="flex items-center gap-2 mb-4">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Django</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Vue.js</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Accessibility</span>
          </div>
          <div class="flex gap-2">
            <a href="#" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-github mr-1"></i>Code
            </a>
            <a href="#" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-box-arrow-up-right mr-1"></i>Live Demo
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>2023</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>Nuxt 3 + TailwindCSS</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            Portfolio Website v2
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            This very website! Built with Nuxt 3, featuring dark mode, accessibility compliance, 
            and responsive design. Includes a blog system and dynamic content management.
          </p>
          <div class="flex items-center gap-2 mb-4">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Nuxt 3</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">TailwindCSS</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Responsive</span>
          </div>
          <div class="flex gap-2">
            <a href="https://github.com/Phinart98/Portfolio-Site" target="_blank" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-github mr-1"></i>Code
            </a>
            <a href="#" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-box-arrow-up-right mr-1"></i>Live Demo
            </a>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>2023</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>Django REST + React</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            Django Accessibility Toolkit
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            Open-source toolkit to help Django developers build more accessible applications. 
            Includes templates, utilities, and automated accessibility testing tools.
          </p>
          <div class="flex items-center gap-2 mb-4">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Django</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Open Source</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Testing</span>
          </div>
          <div class="flex gap-2">
            <a href="#" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-github mr-1"></i>Code
            </a>
            <a href="#" class="text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 text-sm font-medium">
              <i class="bi bi-book mr-1"></i>Documentation
            </a>
          </div>
        </div>
      </div>
    </div>
    -->

    <!-- Placeholder content while projects are being prepared -->
    <div class="text-center py-20">
      <div class="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-12 border border-orange-200/30 dark:border-dark-700/30">
        <div class="mb-8">
          <i class="bi bi-gear text-6xl text-orange-500 animate-spin" style="animation-duration: 3s;"></i>
        </div>
        <h2 class="text-3xl font-bold text-dark-900 dark:text-white mb-4">
          Projects in Development
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
          I'm currently working on several exciting projects and experiments. 
          This section will feature my coding adventures, open-source contributions, 
          and innovative solutions to interesting problems.
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <i class="bi bi-code-slash text-2xl text-orange-600 dark:text-orange-400 mb-2 block"></i>
            <h3 class="font-semibold text-dark-900 dark:text-white">Open Source</h3>
            <p class="text-sm text-dark-600 dark:text-dark-300">Contributing to the community</p>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <i class="bi bi-puzzle text-2xl text-orange-600 dark:text-orange-400 mb-2 block"></i>
            <h3 class="font-semibold text-dark-900 dark:text-white">Experiments</h3>
            <p class="text-sm text-dark-600 dark:text-dark-300">Testing new technologies</p>
          </div>
          <div class="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
            <i class="bi bi-rocket text-2xl text-orange-600 dark:text-orange-400 mb-2 block"></i>
            <h3 class="font-semibold text-dark-900 dark:text-white">Innovations</h3>
            <p class="text-sm text-dark-600 dark:text-dark-300">Solving real-world problems</p>
          </div>
        </div>
        <div class="flex justify-center">
          <NuxtLink 
            to="/blog" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <i class="bi bi-journal-text mr-2"></i>
            Read My Blog
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Projects - Philip Narteh',
  meta: [
    { name: 'description', content: 'Personal projects and experiments by Philip Narteh showcasing innovation and creativity in software development.' }
  ]
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
</style>
