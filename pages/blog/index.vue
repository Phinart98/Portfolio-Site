<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <!-- Header Section -->
    <div class="text-center mb-16 animate-fade-in">
      <div class="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mb-6 animate-float">
        <i class="bi bi-journal-text text-3xl text-white"></i>
      </div>
      <h1 class="text-4xl sm:text-5xl font-bold text-dark-900 dark:text-white mb-4">
        Blog & Thoughts
      </h1>
      <p class="text-xl text-dark-600 dark:text-dark-300 max-w-3xl mx-auto italic">
        Debugging Life & Code - Logging Thoughts, One Entry at a Time
      </p>
    </div>

    <!-- Blog Posts -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article 
        v-for="(post, index) in reversedBlogPosts" 
        :key="index"
        class="group bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl border border-orange-300/60 dark:border-dark-700/60 overflow-hidden hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
        :style="`animation-delay: ${0.1 * index}s`"
      >
        <NuxtLink :to="`${post._path}`" class="block h-full">
          <div class="p-6 h-full flex flex-col">
            <!-- Post Meta -->
            <div class="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 mb-3">
              <i class="bi bi-calendar3"></i>
              <span>{{ post.date }}</span>
              <span class="text-dark-400 dark:text-dark-500">•</span>
              <i class="bi bi-clock"></i>
              <span>{{ post.readingTime }}</span>
            </div>

            <!-- Post Title -->
            <h2 class="text-lg sm:text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
              {{ post.title }}
            </h2>

            <!-- Post Description/Excerpt -->
            <p v-if="post.description" class="text-dark-600 dark:text-dark-300 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
              {{ post.description }}
            </p>

            <!-- Read More -->
            <div class="flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
              <span>Read More</span>
              <i class="bi bi-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
            </div>
          </div>
        </NuxtLink>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="!reversedBlogPosts || reversedBlogPosts.length === 0" class="text-center py-20">
      <div class="bg-white/50 dark:bg-dark-800/50 backdrop-blur-sm rounded-2xl p-12 border border-orange-300/60 dark:border-dark-700/60">
        <i class="bi bi-journal-plus text-6xl text-orange-500 mb-6 block"></i>
        <h3 class="text-2xl font-bold text-dark-900 dark:text-white mb-4">
          No Posts Yet
        </h3>
        <p class="text-lg text-dark-600 dark:text-dark-300 max-w-md mx-auto">
          I'm working on some exciting content. Check back soon for insights about 
          software engineering, accessibility, and tech adventures!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Blog - Philip Narteh',
  meta: [
    { name: 'description', content: 'Thoughts and insights about software engineering, accessibility, and technology by Philip Narteh.' }
  ]
})

const { data: blogPosts } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});

const reversedBlogPosts = computed(() => {
  if (!blogPosts.value || !blogPosts.value[0]?.children) return [];
  return [...blogPosts.value[0].children].reverse();
});
</script>

<style scoped>
/* Line clamp utilities */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Custom animations */
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