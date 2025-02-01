<template>
  <div class="flex justify-center px-4 sm:px-0">
    <div class="w-full sm:w-3/5">
      <h2 class="text-center text-lg sm:text-xl italic mt-6 mb-4 dark:text-white">
        Debugging Life & Code - Logging Thoughts, One Entry at a Time
      </h2>

      <div v-for="(post, index) in reversedBlogPosts" :key="index"
        class="h-40 sm:h-32 bg-white dark:bg-slate-800 mb-4 border rounded-lg drop-shadow-lg dark:shadow-black dark:border-black">
        <NuxtLink :to="`${post._path}`">
          <div class="px-4 sm:px-8">
            <h5 class="mt-4 text-xs dark:text-white">{{ post.date }} &bull; {{ post.readingTime }}</h5>
            <h1 class="mt-2 text-base sm:text-lg font-bold dark:text-white">
              {{ post.title }}
            </h1>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blogPosts } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});

const reversedBlogPosts = computed(() => {
  return [...blogPosts.value[0].children].reverse();
});
</script>

<style scoped></style>