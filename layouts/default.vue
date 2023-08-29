<template>
  <div>
    <nav class="mx-4 my-4 grid grid-cols-5 gap-4">
      <div class="col-span-4"><h1>Logo</h1></div>
      <div class="flex justify-between">
        <div><h4>About</h4></div>
        <div><h4>Projects</h4></div>
        <div><h4>Blog</h4></div>
      </div>
    </nav>
    <slot />
    <footer class="flex justify-center">@2023</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
