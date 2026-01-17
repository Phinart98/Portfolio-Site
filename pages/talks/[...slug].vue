<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-orange-100/50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Back to Talks Link -->
      <NuxtLink
        to="/talks"
        class="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors mb-8"
      >
        <i class="bi bi-arrow-left mr-2"></i>
        Back to Talks
      </NuxtLink>

      <!-- Talk Container -->
      <article class="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl border border-orange-300/60 dark:border-dark-700/60 shadow-xl shadow-orange-500/5 overflow-hidden animate-slide-up">
        <div class="px-8 sm:px-12 py-12">
          <!-- Content with Enhanced Typography -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <ContentDoc>
              <template #default="{ doc }">
                <ContentRenderer :value="doc" />
              </template>
            </ContentDoc>
          </div>

          <!-- Learn More Links - OUTSIDE prose div -->
          <ContentDoc>
            <template #default="{ doc }">
              <div class="flex flex-col sm:flex-row gap-4 mt-12">
                <a
                  v-if="doc.navigation?.externalLink"
                  :href="doc.navigation.externalLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <i class="bi bi-box-arrow-up-right mr-2"></i>
                  View Official Talk Page
                </a>
                <a
                  v-if="doc.navigation?.eventLink"
                  :href="doc.navigation.eventLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-600 dark:text-orange-400 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:-translate-y-1"
                >
                  <i class="bi bi-globe mr-2"></i>
                  Visit DjangoCon Africa
                </a>
              </div>
            </template>
          </ContentDoc>
        </div>
      </article>

      <!-- Navigation -->
      <div class="mt-12 flex justify-between items-center animate-slide-up" style="animation-delay: 0.2s;">
        <NuxtLink
          to="/talks"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <i class="bi bi-mic mr-2"></i>
          More Talks
        </NuxtLink>

        <NuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 border border-orange-500 text-orange-600 dark:text-orange-400 rounded-xl hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 hover:-translate-y-1"
        >
          <i class="bi bi-house mr-2"></i>
          Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO enhancement for talk pages
const route = useRoute()
const { data: talk } = await useAsyncData(`talk-${route.path}`, () =>
  queryContent(route.path).findOne(), {
    lazy: true
  }
)

useHead({
  title: computed(() => `${talk.value?.navigation?.title || 'Talk'} - Philip Narteh`),
  meta: computed(() => [
    { name: 'description', content: talk.value?.navigation?.description || 'Talk by Philip Narteh' }
  ])
})
</script>

<style>
/* Enhanced prose styling for talks */
.prose {
  @apply text-dark-700 dark:text-dark-200;
}

.prose h1 {
  @apply text-center text-4xl sm:text-5xl font-bold mb-8 text-dark-900 dark:text-white;
}

.prose h2 {
  @apply text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-dark-900 dark:text-white;
}

.prose h3 {
  @apply text-xl sm:text-2xl font-semibold mt-8 mb-4 text-dark-900 dark:text-white;
}

.prose p {
  @apply text-lg leading-relaxed mb-6 text-justify;
}

.prose a {
  @apply text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 underline underline-offset-4 decoration-orange-500/30 hover:decoration-orange-500/60 transition-all;
}

.prose .not-prose a {
  @apply no-underline;
  text-decoration: none !important;
}

.prose blockquote {
  @apply border-l-4 border-orange-500 pl-6 italic bg-orange-50/50 dark:bg-orange-900/20 py-4 rounded-r-lg;
}

.prose code {
  @apply bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-sm font-mono;
}

.prose pre {
  @apply bg-dark-800 dark:bg-dark-900 border border-orange-200/30 dark:border-dark-700/30 rounded-xl p-6 overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent text-dark-100 p-0;
}

.prose ul, .prose ol {
  @apply space-y-2;
}

.prose li {
  @apply text-lg leading-relaxed;
}

/* Custom animations */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fade-in {
  animation: fadeIn 0.6s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}
</style>
