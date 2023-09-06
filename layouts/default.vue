<template>
  <div>
    <nav class="flex justify-center">
      <div class="flex justify-between mx-4 my-4 w-full sm:w-3/5">
        <div class="text-2xl">
          <NuxtLink to="/"
            ><span class="text-orange-500">{{ "<" }}</span
            ><span class="dark:text-white">Philip Narteh</span
            ><span class="text-orange-500">/></span></NuxtLink
          >
        </div>
        <div
          class="flex justify-between mt-2 text-sm sm:text-lg gap-2 sm:gap-8"
        >
          <div><NuxtLink to="/" class="dark:text-white">About</NuxtLink></div>
          <div>
            <NuxtLink class="text-orange-500 underline underline-offset-8"
              >Projects</NuxtLink
            >
          </div>
          <div>
            <NuxtLink class="text-orange-500 underline underline-offset-8"
              >Blog</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
    <slot />
  </div>
</template>

<script></script>

<style scoped></style>
