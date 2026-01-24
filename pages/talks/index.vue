<template>
  <PageContainer>
    <!-- Gradient mesh background -->
    <GradientMesh :animated="true" :subtle="true" />

    <!-- Header Section -->
    <PageHeader
      icon="mic"
      subtitle="Sharing knowledge and insights about software engineering, accessibility, and my work in Open Source."
    />

    <!-- Talks - Grouped by Year like blog -->
    <div v-if="talksByYear.length > 0">
      <div v-for="yearData in talksByYear" :key="yearData.year" class="mb-12">
        <h3 class="text-2xl font-bold dark:text-white mb-6 animate-slide-up">
          {{ yearData.year }}
        </h3>

        <div class="flex flex-wrap gap-8 justify-center max-w-5xl mx-auto">
          <NuxtLink
            v-for="(talk, index) in yearData.talks"
            :key="talk._path"
            :to="talk._path"
            class="block w-full md:basis-[calc(50%-1rem)] md:max-w-[calc(50%-1rem)] animate-slide-up"
            :style="`animation-delay: ${0.1 * index}s`"
          >
        <BaseCard :interactive="true" :glow="true" variant="bento" class="h-full">
        <div class="flex flex-col h-full">
          <div v-if="talk.navigation.headerImage" class="w-full mb-4 rounded-lg overflow-hidden">
            <img :src="talk.navigation.headerImage" :alt="talk.navigation.title" class="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>{{ talk.navigation.date }}</span>
            <span v-if="talk.navigation.time" class="text-dark-400 dark:text-dark-500">•</span>
            <span v-if="talk.navigation.time">{{ talk.navigation.time }}</span>
          </div>
          <div v-if="talk.navigation.venue || talk.navigation.event" class="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 mb-4">
            <i v-if="talk.navigation.venue" class="bi bi-geo-alt"></i>
            <span v-if="talk.navigation.venue">{{ talk.navigation.venue }}</span>
            <span v-if="talk.navigation.venue && talk.navigation.event" class="text-dark-400 dark:text-dark-500">•</span>
            <span v-if="talk.navigation.event">{{ talk.navigation.event }}</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
            {{ talk.navigation.title }}
          </h3>
          <p class="text-dark-600 dark:text-dark-300 leading-relaxed mb-4 flex-grow">
            {{ talk.navigation.description }}
          </p>
          <div v-if="talk.navigation.tags" class="flex items-center gap-2 flex-wrap mt-auto">
            <span
              v-for="tag in talk.navigation.tags"
              :key="tag"
              class="px-3 py-1.5 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full font-medium"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        </BaseCard>
          </NuxtLink>
        </div>
      </div>
    </div>
  </PageContainer>
</template>

<script setup>
// Fetch all talks from content
const { data: talks } = await useAsyncData('talks', () =>
  queryContent('talks').find()
)

// Group talks by year like blog posts
const talksByYear = computed(() => {
  if (!talks.value) return [];

  const grouped = {};
  talks.value.forEach(talk => {
    // Extract year from date string (format: "Month Day, Year")
    const dateStr = talk.navigation?.date || '';
    const year = dateStr.split(',')[1]?.trim() || 'Unknown';

    if (!grouped[year]) {
      grouped[year] = [];
    }
    grouped[year].push(talk);
  });

  // Sort years descending (latest first)
  const sortedYears = Object.keys(grouped).sort((a, b) => {
    if (a === 'Unknown') return 1;
    if (b === 'Unknown') return -1;
    return parseInt(b) - parseInt(a);
  });

  // Return as array to preserve order
  return sortedYears.map(year => ({
    year,
    talks: grouped[year]
  }));
});

// SEO
useHead({
  title: 'Talks & Speaking - Philip Narteh',
  meta: [
    { name: 'description', content: 'Conference talks and speaking engagements by Philip Narteh on software engineering and accessibility.' }
  ]
})
</script>
