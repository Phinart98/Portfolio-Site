<template>
  <PageContainer>
    <!-- Header Section -->
    <PageHeader
      icon="journal-text"
      subtitle="Debugging Life & Code - Logging Thoughts, One Entry at a Time"
    />

    <!-- Blog Posts -->
    <div class="flex flex-wrap gap-8 justify-center">
      <article
        v-for="(post, index) in reversedBlogPosts"
        :key="index"
        class="w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] animate-slide-up"
        :style="`animation-delay: ${0.1 * index}s`"
      >
        <BaseCard
          :interactive="true"
          :elevated="isCardClicked(index)"
          @click="toggleCard(index)"
          class="group overflow-hidden cursor-pointer h-full"
        >
        <NuxtLink :to="`${post._path}`" class="block h-full">
          <div class="p-6 h-full flex flex-col">
            <!-- Post Meta -->
            <div class="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 mb-3">
              <i class="bi bi-calendar3"></i>
              <span>{{ post.navigation.date }}</span>
              <span class="text-dark-400 dark:text-dark-500">•</span>
              <i class="bi bi-clock"></i>
              <span>{{ post.readingTime }}</span>
            </div>

            <!-- Post Title -->
            <h2 class="text-lg sm:text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors line-clamp-2">
              {{ post.navigation.title }}
            </h2>

            <!-- Post Description/Excerpt -->
            <p v-if="post.navigation.description" class="text-dark-600 dark:text-dark-300 text-sm leading-relaxed flex-1 line-clamp-3 mb-4">
              {{ post.navigation.description }}
            </p>

            <!-- Border separator -->
            <div class="w-full h-px bg-gradient-to-r from-transparent via-orange-300 dark:via-orange-700 to-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <!-- Read More with enhanced arrow -->
            <div class="flex items-center text-orange-600 dark:text-orange-400 text-sm font-medium group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors">
              <span>Read More</span>
              <i class="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
            </div>
          </div>
        </NuxtLink>
        </BaseCard>
      </article>
    </div>

    <!-- Empty State -->
    <div v-if="!reversedBlogPosts || reversedBlogPosts.length === 0" class="text-center py-20">
      <BaseCard class="p-12">
        <i class="bi bi-journal-plus text-6xl text-orange-500 mb-6 block"></i>
        <h3 class="text-2xl font-bold text-dark-900 dark:text-white mb-4">
          No Posts Yet
        </h3>
        <p class="text-lg text-dark-600 dark:text-dark-300 max-w-md mx-auto">
          I'm working on some exciting content. Check back soon for insights about 
          software engineering, accessibility, and tech adventures!
        </p>
      </BaseCard>
    </div>
  </PageContainer>
</template>

<script setup>
// SEO
useHead({
  title: 'Blog - Philip Narteh',
  meta: [
    { name: 'description', content: 'Thoughts and insights about software engineering, accessibility, and technology by Philip Narteh.' }
  ]
})

const { data: blogPosts } = await useAsyncData("blog-posts", () => {
  return queryContent("blog").find();
});

const reversedBlogPosts = computed(() => {
  if (!blogPosts.value) return [];
  return [...blogPosts.value].reverse();
});

// Use card click composable
const { toggleCard, isCardClicked } = useCardClick()
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
</style>