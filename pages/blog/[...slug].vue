<template>
  <div class="min-h-screen bg-gradient-to-br from-white via-orange-50/30 to-orange-100/50 dark:from-dark-950 dark:via-dark-900 dark:to-dark-800">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      <!-- Article Container -->
      <article class="bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-3xl border border-orange-300/60 dark:border-dark-700/60 shadow-xl shadow-orange-500/5 overflow-hidden animate-slide-up">
        <div class="px-8 sm:px-12 py-12">
          <!-- Content with Enhanced Typography -->
          <div class="prose prose-lg dark:prose-invert max-w-none">
            <ContentDoc>
              <template #default="{ doc }">
                <!-- Custom date/time header if available -->
                <div v-if="doc.date || doc.readingTime" class="text-center mb-8">
                  <div class="flex items-center justify-center gap-2 text-sm text-orange-600 dark:text-orange-400">
                    <i v-if="doc.date" class="bi bi-calendar3"></i>
                    <span v-if="doc.date">{{ doc.date }}</span>
                    <span v-if="doc.date && doc.readingTime" class="text-dark-400 dark:text-dark-500">•</span>
                    <i v-if="doc.readingTime" class="bi bi-clock"></i>
                    <span v-if="doc.readingTime">{{ doc.readingTime }}</span>
                  </div>
                </div>
                <!-- Render the content -->
                <ContentRenderer :value="doc" />
              </template>
            </ContentDoc>
          </div>
        </div>
      </article>

      <!-- Navigation -->
      <div class="mt-12 flex justify-between items-center animate-slide-up" style="animation-delay: 0.2s;">
        <NuxtLink 
          to="/blog"
          class="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1"
        >
          <i class="bi bi-journal-text mr-2"></i>
          More Articles
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
// SEO enhancement for blog posts with lazy loading optimization
const route = useRoute()
const { data: post } = await useAsyncData(`blog-post-${route.path}`, () => 
  queryContent(route.path).findOne(), {
    lazy: true
  }
)

useHead({
  title: computed(() => `${post.value?.title || 'Blog Post'} - Philip Narteh`),
  meta: computed(() => [
    { name: 'description', content: post.value?.description || 'Blog post by Philip Narteh' }
  ])
})
</script>

<style>
/* Enhanced prose styling */
.prose {
  @apply text-dark-700 dark:text-dark-200;
}

.prose h1 {
  @apply text-center text-4xl sm:text-5xl font-bold mb-8 text-dark-900 dark:text-white;
}

/* Center date and reading time metadata */
.prose h6,
.prose h6 p,
.prose h6 * {
  @apply text-center text-sm text-dark-500 dark:text-dark-400 !important;
}

/* Target common date/time patterns */
.prose .date,
.prose .reading-time,
.prose .meta {
  @apply text-center text-sm text-dark-500 dark:text-dark-400;
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
