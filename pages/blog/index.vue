<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-3/5">
      <h2 class="flex justify-center text-3xl italic mt-8 mb-4 dark:text-white">
        Thoughts...
      </h2>

      <div
        v-for="(post, index) in blogPosts['0'].children"
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

// export default {
//   data() {
//     return {
//       // blogPosts: [
//       //   {
//       //     date: "March 2, 2023",
//       //     title:
//       //       "How Feature Flags Can Complement and Enhance Git Branching Strategies",
//       //   },
//       // ],
//       blogPosts: useAsyncData("navigation", () => {
//          return fetchContentNavigation(queryContent("blog"));
//        })
//     };
//   },

//   methods: {
//     // async loadBlogPosts() {
//     //   let res = await useAsyncData("navigation", () => {
//     //     return fetchContentNavigation(queryContent("blog"));
//     //   })
//     //   this.blogPosts = res.data
//     //   console.log(typeof this.blogPosts)
//     //   console.log(this.blogPosts);
//     //   return this.blogPosts;
//     // },
//   },

//   mounted() {
//     // this.loadBlogPosts();
//   },
// };
</script>

<style scoped></style>
