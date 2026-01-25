<template>
  <PageContainer>
    <!-- Gradient mesh background -->
    <GradientMesh :animated="true" :subtle="true" />

    <!-- Header Section -->
    <PageHeader
      icon="journal-text"
      subtitle="Debugging Life & Code - Logging Thoughts, One Entry at a Time"
    />

    <!-- Featured Latest Post -->
    <div v-if="featuredPost" class="mb-12 animate-fade-in">
      <h3 class="text-2xl font-bold dark:text-white mb-6">Latest Post</h3>
      <article>
        <NuxtLink :to="`${featuredPost._path}`" class="block group">
          <BaseCard variant="featured" :interactive="true" :glow="true" class="relative overflow-hidden">
            <!-- Latest badge -->
            <div class="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-accent-500 to-accent-600 text-white text-xs font-bold rounded-full flex items-center gap-1.5 z-10">
              <i class="bi bi-star-fill"></i>
              Latest
            </div>

            <div class="grid md:grid-cols-5 gap-6 pt-8">
              <!-- Content - spans 3 columns -->
              <div class="md:col-span-3">
                <!-- Post Meta -->
                <div class="flex items-center gap-2 text-xs text-accent-600 dark:text-accent-400 mb-4">
                  <i class="bi bi-calendar3"></i>
                  <span>{{ featuredPost.navigation.date }}</span>
                  <span class="text-surface-400 dark:text-surface-500">•</span>
                  <i class="bi bi-clock"></i>
                  <span>{{ featuredPost.readingTime }}</span>
                </div>

                <!-- Post Title -->
                <h2 class="text-2xl md:text-3xl font-bold text-surface-900 dark:text-white mb-4 group-hover:bg-gradient-to-r group-hover:from-accent-600 group-hover:to-accent-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {{ getCardTitle(featuredPost.navigation.title) }}
                </h2>

                <!-- Post Description -->
                <p v-if="featuredPost.navigation.description" class="text-base md:text-lg text-surface-700 dark:text-surface-200 leading-relaxed mb-6">
                  {{ featuredPost.navigation.description }}
                </p>

                <!-- Read More -->
                <div class="inline-flex items-center text-accent-600 dark:text-accent-400 font-medium group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                  <span>Read Full Blog Post</span>
                  <i class="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>

              <!-- Visual accent - spans 2 columns -->
              <div class="md:col-span-2 flex items-center justify-center">
                <div class="w-full h-full min-h-[200px] bg-gradient-to-br from-accent-100 to-accent-50 dark:from-accent-900/20 dark:to-surface-800/50 rounded-xl flex items-center justify-center">
                  <i class="bi bi-journal-text text-8xl text-accent-400/30 dark:text-accent-600/30"></i>
                </div>
              </div>
            </div>
          </BaseCard>
        </NuxtLink>
      </article>
    </div>

    <!-- Other Blog Posts - Grouped by Year -->
    <div v-if="otherPosts.length > 0">
      <div v-for="yearData in postsByYear" :key="yearData.year" class="mb-12">
        <h3 class="text-2xl font-bold dark:text-white mb-6 animate-slide-up">
          {{ yearData.year }}
        </h3>

        <div class="flex flex-wrap gap-8 justify-center">
          <article
            v-for="(post, index) in yearData.posts"
            :key="index"
            class="w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] animate-slide-up"
            :style="`animation-delay: ${0.1 * (index + 1)}s`"
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
                <div class="flex items-center gap-2 text-xs text-accent-600 dark:text-accent-400 mb-3">
                  <i class="bi bi-calendar3"></i>
                  <span>{{ post.navigation.date }}</span>
                  <span class="text-surface-400 dark:text-surface-500">•</span>
                  <i class="bi bi-clock"></i>
                  <span>{{ post.readingTime }}</span>
                </div>

                <!-- Post Title -->
                <h2 class="text-lg sm:text-xl font-bold text-surface-900 dark:text-white mb-3 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors line-clamp-2">
                  {{ getCardTitle(post.navigation.title) }}
                </h2>

                <!-- Post Description/Excerpt -->
                <p v-if="post.navigation.description" class="text-surface-600 dark:text-surface-300 text-base leading-relaxed flex-1 line-clamp-3 mb-4">
                  {{ post.navigation.description }}
                </p>

                <!-- Border separator -->
                <div class="w-full h-px bg-gradient-to-r from-transparent via-accent-300 dark:via-accent-700 to-transparent mb-4 opacity-50 group-hover:opacity-100 transition-opacity"></div>

                <!-- Read More with enhanced arrow -->
                <div class="flex items-center text-accent-600 dark:text-accent-400 text-sm font-medium group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
                  <span>Read More</span>
                  <i class="bi bi-arrow-right ml-2 group-hover:translate-x-2 transition-transform duration-300"></i>
                </div>
              </div>
            </NuxtLink>
            </BaseCard>
          </article>
        </div>
      </div>
    </div>

    <!-- Empty State -->
    <div v-if="!reversedBlogPosts || reversedBlogPosts.length === 0" class="text-center py-20">
      <BaseCard class="p-12">
        <i class="bi bi-journal-plus text-6xl text-accent-500 mb-6 block"></i>
        <h3 class="text-2xl font-bold text-surface-900 dark:text-white mb-4">
          No Posts Yet
        </h3>
        <p class="text-lg text-surface-600 dark:text-surface-300 max-w-md mx-auto">
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

// Featured post is the first (latest) one
const featuredPost = computed(() => reversedBlogPosts.value[0] || null);

// Other posts are the rest
const otherPosts = computed(() => reversedBlogPosts.value.slice(1) || []);

// Group posts by year - return as array to preserve sort order
const postsByYear = computed(() => {
  const grouped = {};
  otherPosts.value.forEach(post => {
    // Extract year from date string (format: "Month Day, Year")
    const dateStr = post.navigation?.date || '';
    const year = dateStr.split(',')[1]?.trim() || 'Unknown';

    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(post);
  });

  // Sort years descending (latest first) and return as array
  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return parseInt(b) - parseInt(a); // b - a means newer years first (2025 before 2023)
  });

  // Return as array of objects to preserve order
  return sortedYears.map(year => ({
    year,
    posts: grouped[year]
  }));
});

// Use card click composable
const { toggleCard, isCardClicked } = useCardClick()

// Extract descriptive title (text after "–") for card previews
const getCardTitle = (fullTitle) => {
  if (!fullTitle) return '';
  const parts = fullTitle.split('–');
  // If there's a "–", return the part after it (trimmed), otherwise return full title
  return parts.length > 1 ? parts[1].trim() : fullTitle;
}
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
