<template>
  <div class="not-prose my-8">
    <div class="relative max-w-3xl mx-auto">
      <div class="overflow-hidden rounded-xl border border-accent-200/30 dark:border-surface-600/30">
        <div class="gallery-track flex transition-transform duration-500 ease-in-out" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div v-for="(image, index) in filteredImages" :key="index" class="gallery-slide min-w-full">
            <img :src="image.src" :alt="image.alt" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <button
        @click="prevSlide"
        class="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-surface-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-surface-700 transition-colors"
        aria-label="Previous image"
      >
        <i class="bi bi-chevron-left text-accent-600 dark:text-accent-400 text-xl"></i>
      </button>

      <button
        @click="nextSlide"
        class="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-surface-800/90 p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-surface-700 transition-colors"
        aria-label="Next image"
      >
        <i class="bi bi-chevron-right text-accent-600 dark:text-accent-400 text-xl"></i>
      </button>

      <div class="flex justify-center gap-2 mt-4">
        <button
          v-for="(image, index) in filteredImages"
          :key="index"
          @click="goToSlide(index)"
          class="w-2 h-2 rounded-full transition-colors"
          :class="currentSlide === index ? 'bg-accent-600 dark:bg-accent-400' : 'bg-surface-300 dark:bg-surface-600'"
          :aria-label="`Go to image ${index + 1}`"
        ></button>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  images: {
    type: Array,
    default: () => []
  },
  headerImage: {
    type: String,
    default: ''
  }
})

// Filter out header image if provided
const filteredImages = computed(() => {
  if (!props.headerImage) return props.images
  return props.images.filter(img => img.src !== props.headerImage)
})

const currentSlide = ref(0)

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + filteredImages.value.length) % filteredImages.value.length
}

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % filteredImages.value.length
}

const goToSlide = (index) => {
  currentSlide.value = index
}
</script>

<style scoped>
.gallery-track {
  will-change: transform;
}
</style>
