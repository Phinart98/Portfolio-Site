<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-6 animate-float">
        <i class="bi bi-mic text-3xl text-white"></i>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
        Talks & Speaking
      </h1>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
        Sharing knowledge and insights about software engineering, accessibility, and technology trends.
      </p>
    </div>

    <!-- Talks Grid - Commented out until ready -->
    <!-- 
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>March 15, 2024</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>TechConf 2024</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            Building Accessible Web Applications with Django
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            A deep dive into creating inclusive web applications using Django, covering ARIA implementation, 
            semantic HTML, and accessibility testing strategies.
          </p>
          <div class="flex items-center gap-2">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Django</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Accessibility</span>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>January 20, 2024</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>PyGhana Meetup</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            From Student to Professional: My Django Journey
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            Sharing lessons learned during my transition from computer engineering student to 
            professional Django developer, including tips for new developers.
          </p>
          <div class="flex items-center gap-2">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Career</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Django</span>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="mb-4">
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>November 10, 2023</span>
            <span class="text-dark-400 dark:text-dark-500">•</span>
            <span>Ashesi University</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            Health Tech Innovation in Ghana
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            Exploring opportunities and challenges in Ghana's health tech ecosystem, 
            discussing how technology can improve healthcare accessibility.
          </p>
          <div class="flex items-center gap-2">
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">HealthTech</span>
            <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded">Innovation</span>
          </div>
        </div>
      </div>
    </div>
    -->

    <!-- Placeholder content while talks are being prepared -->
    <div class="text-center py-20">
      <div class="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-12 border border-orange-200/30 dark:border-dark-700/30">
        <div class="mb-8">
          <i class="bi bi-hourglass-split text-6xl text-orange-500 animate-pulse"></i>
        </div>
        <h2 class="text-3xl font-bold text-dark-900 dark:text-white mb-4">
          Coming Soon
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
          I'm currently preparing exciting content about my speaking engagements, 
          conference talks, and technical presentations. This section will showcase 
          my journey sharing knowledge with the developer community.
        </p>
        <div class="flex justify-center">
          <NuxtLink 
            to="/blog" 
            class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <i class="bi bi-journal-text mr-2"></i>
            Read My Blog Instead
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Talks & Speaking - Philip Narteh',
  meta: [
    { name: 'description', content: 'Conference talks and speaking engagements by Philip Narteh on software engineering and accessibility.' }
  ]
})
</script>
