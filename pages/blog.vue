<template>
  <div class="flex justify-center">
    <div class="w-full sm:w-3/5">
      <h2 class="flex justify-center text-3xl mt-8">My Writings</h2>
      <p class="flex justify-center text-sm mt-2 mb-4">
        Welcome to the world of my thoughts
      </p>
      <div
        v-for="(post, index) in blogPosts"
        :key="index"
        class="h-40 sm:h-32 bg-white mb-4 mx-4 border rounded-lg drop-shadow-lg"
      >
        <NuxtLink to="">
          <h5 class="mt-4 mx-8 text-sm">{{ post.date }}</h5>
          <h1 class="mt-2 mx-8 text-xl font-bold">{{ post.title }}</h1>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogPosts: [
        {
          date: "March 2, 2023",
          title:
            "How Feature Flags Can Complement and Enhance Git Branching Strategies",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
