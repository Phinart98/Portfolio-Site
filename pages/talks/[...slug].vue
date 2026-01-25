<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-accent-50/30 to-accent-100/50 dark:from-surface-950 dark:via-surface-900 dark:to-surface-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Back to Talks Link -->
      <NuxtLink
        to="/talks"
        class="inline-flex items-center text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors mb-8"
      >
        <i class="bi bi-arrow-left mr-2"></i>
        Back to Talks
      </NuxtLink>

      <!-- Talk Container -->
      <article class="bg-white/80 dark:bg-surface-800/80 backdrop-blur-sm rounded-3xl border border-accent-300/60 dark:border-surface-700/60 shadow-xl shadow-accent-500/5 overflow-hidden animate-slide-up">
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
                  class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-1"
                >
                  <i class="bi bi-box-arrow-up-right mr-2"></i>
                  View Official Talk Page
                </a>
                <a
                  v-if="doc.navigation?.eventLink"
                  :href="doc.navigation.eventLink"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center px-6 py-3 border border-accent-500 text-accent-600 dark:text-accent-400 rounded-xl hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-300 hover:-translate-y-1"
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
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white rounded-xl hover:shadow-lg hover:shadow-accent-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <i class="bi bi-mic mr-2"></i>
          More Talks
        </NuxtLink>

        <NuxtLink
          to="/"
          class="inline-flex items-center px-6 py-3 border border-accent-500 text-accent-600 dark:text-accent-400 rounded-xl hover:bg-accent-50 dark:hover:bg-accent-900/20 transition-all duration-300 hover:-translate-y-1"
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
  @apply text-surface-700 dark:text-surface-200;
}

.prose h1 {
  @apply text-center text-4xl sm:text-5xl font-bold mb-8 text-surface-900 dark:text-white;
}

.prose h2 {
  @apply text-2xl sm:text-3xl font-semibold mt-12 mb-6 text-surface-900 dark:text-white;
}

.prose h3 {
  @apply text-xl sm:text-2xl font-semibold mt-8 mb-4 text-surface-900 dark:text-white;
}

.prose p {
  @apply text-lg leading-relaxed mb-6 text-justify;
}

.prose a {
  @apply text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 underline underline-offset-4 decoration-accent-500/30 hover:decoration-accent-500/60 transition-all;
}

.prose .not-prose a {
  @apply no-underline;
  text-decoration: none !important;
}

.prose blockquote {
  @apply border-l-4 border-accent-500 pl-6 italic bg-accent-50/50 dark:bg-accent-900/20 py-4 rounded-r-lg;
}

.prose code {
  @apply bg-accent-100 dark:bg-accent-900/30 text-accent-800 dark:text-accent-200 px-2 py-1 rounded text-sm font-mono;
}

.prose pre {
  @apply bg-surface-800 dark:bg-surface-900 border border-accent-200/30 dark:border-surface-700/30 rounded-xl p-6 overflow-x-auto;
}

.prose pre code {
  @apply bg-transparent text-surface-100 p-0;
}

.prose ul, .prose ol {
  @apply space-y-2;
}

.prose li {
  @apply text-lg leading-relaxed;
}
</style>
