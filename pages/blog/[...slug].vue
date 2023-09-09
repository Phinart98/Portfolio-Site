<template>
  <div class="flex justify-center">
    <main
      class="h-full bg-white dark:bg-slate-800 w-full sm:w-3/5 mx-4 border rounded-sm drop-shadow-lg dark:shadow-black dark:border-black"
    >
      <div
        class="mx-8 sm:mx-12 my-8 sm:my-12 prose-sm prose-h1:text-center prose-h1:font-medium prose-h2:font-medium"
      >
        <ContentDoc />
      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "custom",
});
</script>

<style></style>
