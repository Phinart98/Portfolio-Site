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
          <div>
            <NuxtLink
              to="/"
              class="text-orange-500 underline underline-offset-8"
              >About</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/projects"
              class="text-orange-500 underline underline-offset-8"
              >Projects</NuxtLink
            >
          </div>
          <div>
            <NuxtLink
              to="/blog"
              class="text-orange-500 underline underline-offset-8"
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

<style scoped>
.router-link-active, .router-link-exact-active {
  color: black;
  text-decoration: none;
  @media (prefers-color-scheme: dark) {
    color: white;
  }
}
</style>
