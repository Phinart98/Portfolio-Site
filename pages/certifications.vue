<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-6 animate-float">
        <i class="bi bi-award text-3xl text-white"></i>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
        Certifications & Achievements
      </h1>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto leading-relaxed">
        Professional certifications and recognition in software engineering and technology.
      </p>
    </div>

    <!-- Certifications Grid - Commented out until ready -->
    <!-- 
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-shield-check text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              Django Professional Certification
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Advanced Django development and best practices certification from Django Software Foundation.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Django</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2024</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-universal-access text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              Web Accessibility Specialist (WAS)
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              International Association of Accessibility Professionals (IAAP) certification in web accessibility.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Accessibility</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2024</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-cloud text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              AWS Solutions Architect Associate
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Amazon Web Services certification for designing distributed systems on AWS platform.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">AWS</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2023</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-git text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              GitHub Actions Certified
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Professional certification in CI/CD workflows and automation using GitHub Actions.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">CI/CD</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2023</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-mortarboard text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              BSc. Computer Engineering
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Bachelor of Science in Computer Engineering from Ashesi University, Ghana.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Degree</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2022</span>
            </div>
          </div>
        </div>
      </div>

      <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/30 dark:border-dark-600/30 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
        <div class="flex items-start space-x-4">
          <div class="w-16 h-16 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <i class="bi bi-rocket text-2xl text-orange-600 dark:text-orange-400"></i>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2">
              Djangonaut Space Program Graduate
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Completed Session 4 of the intensive Django open-source contribution program.
            </p>
            <div class="flex items-center gap-2 text-xs">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Django</span>
              <span class="text-dark-500">•</span>
              <span class="text-dark-600 dark:text-dark-400">2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    -->

    <!-- Placeholder content while certifications are being prepared -->
    <div class="text-center py-20">
      <div class="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-12 border border-orange-200/30 dark:border-dark-700/30">
        <div class="mb-8">
          <i class="bi bi-trophy text-6xl text-orange-500 animate-bounce"></i>
        </div>
        <h2 class="text-3xl font-bold text-dark-900 dark:text-white mb-4">
          Certifications Coming Soon
        </h2>
        <p class="text-lg text-dark-600 dark:text-dark-300 mb-8 max-w-2xl mx-auto">
          I'm working on curating a comprehensive list of my professional certifications, 
          achievements, and credentials. This will include technical certifications, 
          awards, and recognition from various platforms and organizations.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink 
            to="/" 
            class="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
          >
            <i class="bi bi-person mr-2"></i>
            Learn About Me
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Certifications & Achievements - Philip Narteh',
  meta: [
    { name: 'description', content: 'Professional certifications and achievements in software engineering by Philip Narteh.' }
  ]
})
</script>
