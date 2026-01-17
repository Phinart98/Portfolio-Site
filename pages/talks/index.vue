<template>
  <PageContainer>
    <!-- Header Section -->
    <PageHeader
      icon="mic"
      subtitle="Sharing knowledge and insights about software engineering, accessibility, and my work in Open Source."
    />

    <!-- Talks Grid -->
    <div class="flex flex-wrap gap-8 justify-center">
      <NuxtLink
        v-for="(talk, index) in talks"
        :key="talk._path"
        :to="talk._path"
        class="block w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] animate-slide-up"
        :style="`animation-delay: ${0.1 * index}s`"
      >
        <BaseCard :interactive="true">
        <div class="flex flex-col items-center text-center">
          <div v-if="talk.navigation.headerImage" class="w-full mb-4 rounded-lg overflow-hidden">
            <img :src="talk.navigation.headerImage" :alt="talk.navigation.title" class="w-full h-48 object-cover" />
          </div>
          <div class="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 mb-2">
            <i class="bi bi-calendar3"></i>
            <span>{{ talk.navigation.date }}</span>
            <span v-if="talk.navigation.time" class="text-dark-400 dark:text-dark-500">•</span>
            <span v-if="talk.navigation.time">{{ talk.navigation.time }}</span>
          </div>
          <div v-if="talk.navigation.venue || talk.navigation.event" class="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-400 mb-3">
            <i v-if="talk.navigation.venue" class="bi bi-geo-alt"></i>
            <span v-if="talk.navigation.venue">{{ talk.navigation.venue }}</span>
            <span v-if="talk.navigation.venue && talk.navigation.event" class="text-dark-400 dark:text-dark-500">•</span>
            <span v-if="talk.navigation.event">{{ talk.navigation.event }}</span>
          </div>
          <h3 class="text-xl font-bold text-dark-900 dark:text-white mb-3">
            {{ talk.navigation.title }}
          </h3>
          <p class="text-dark-600 dark:text-dark-300 text-sm mb-4">
            {{ talk.navigation.description }}
          </p>
          <div v-if="talk.navigation.tags" class="flex items-center gap-2 flex-wrap justify-center">
            <span
              v-for="tag in talk.navigation.tags"
              :key="tag"
              class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded"
            >
              {{ tag }}
            </span>
          </div>
        </div>
        </BaseCard>
      </NuxtLink>
    </div>
  </PageContainer>
</template>

<script setup>
// Fetch all talks from content
const { data: talks } = await useAsyncData('talks', () =>
  queryContent('talks').find()
)

// SEO
useHead({
  title: 'Talks & Speaking - Philip Narteh',
  meta: [
    { name: 'description', content: 'Conference talks and speaking engagements by Philip Narteh on software engineering and accessibility.' }
  ]
})
</script>
