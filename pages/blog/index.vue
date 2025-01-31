<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-3/5">
      <!-- <h2 class="flex justify-center text-2xl italic mt-8 mb-4 dark:text-white">
        Debugging Life & Code - Logging Thoughts, One Entry at a Time
      </h2> -->

      <div
        v-for="(post, index) in reversedBlogPosts"
        :key="index"
        class="h-40 sm:h-32 bg-white dark:bg-slate-800 mb-4 mx-4 border rounded-lg drop-shadow-lg dark:shadow-black dark:border-black"
      >
        <NuxtLink :to="`${post._path}`">
          <h5 class="mt-4 mx-8 text-sm dark:text-white">{{ post.date }} &bull; {{ post.readingTime }}</h5>
          <h1 class="mt-2 mx-8 text-xl font-bold dark:text-white">
            {{ post.title }}
          </h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data: blogPosts } = await useAsyncData("navigation", () => {
  return fetchContentNavigation(queryContent("blog"));
});

// Reverse the blog posts array to show the most recent first
const reversedBlogPosts = computed(() => {
  return [...blogPosts.value[0].children].reverse();
});
</script>

<style scoped></style>