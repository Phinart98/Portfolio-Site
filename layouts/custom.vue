<template>
  <div>
    <nav class="flex justify-center">
      <div class="flex justify-between mx-4 my-4 w-full sm:w-3/5">
        <div class="text-xl sm:text-2xl">
          <NuxtLink to="/"
            ><span class="text-orange-500">{{ "<" }}</span
            ><span class="dark:text-white">Philip Narteh</span
            ><span class="text-orange-500">/></span></NuxtLink
          >
        </div>
        <div
          class="flex justify-between mt-1 text-sm sm:text-lg gap-2 sm:gap-8"
        >
          <div class="blog-back" @click="goBack()">
            <NuxtLink class="text-orange-500 underline underline-offset-8"
              >Back</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.blog-back:hover {
  cursor: pointer;
}
</style>
