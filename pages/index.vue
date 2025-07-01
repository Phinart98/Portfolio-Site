<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Your original welcome section with enhanced styling -->
    <div class="text-center animate-fade-in">
      <!-- Your profile image -->
      <div class="mb-8">
        <img 
          src="~/assets/img/Philip_headshot3.jpeg" 
          alt="A headshot of Philip" 
          @click="toggleImageColor"
          @mouseenter="handleImageHover(true)"
          @mouseleave="handleImageHover(false)"
          @touchstart="handleImageHover(true)"
          @touchend="handleImageHover(false)"
          :class="[
            'grayscale rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto object-cover cursor-pointer transition-all duration-300',
            (imageClicked || imageHovered) ? 'grayscale-0 border-0 scale-105' : 'border-4 border-orange-300 dark:border-orange-700 hover:scale-105'
          ]"
        />
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 dark:text-white transition-colors whitespace-nowrap">
        Hello, I'm&nbsp;<span class="text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">Philip</span>!
      </h1>
      
      <h2 class="text-2xl sm:text-3xl my-4 dark:text-white transition-colors font-medium">
        A Software Engineer
      </h2>
      
      <!-- Blended description -->
      <p class="flex justify-center text-center italic my-4 mx-3 dark:text-white transition-colors animate-slide-up" style="animation-delay: 0.2s;">
        I'm fascinated by how technology can be harnessed to create meaningful impact across diverse fields. I care deeply about building inclusive and accessible web experiences, particularly within the Open-Source space. At the moment, I'm exploring ways to contribute to such impactful projects - relishing every moment and taking it one step at a time.
      </p>
    </div>

    <!-- Enhanced highlights section with your original content -->
    <div class="mt-16 animate-slide-up" style="animation-delay: 0.4s;">
      <p class="text-center mb-8 dark:text-white text-xl font-medium">
        Previously, I have...
      </p>
      
      <div class="space-y-6 max-w-4xl mx-auto">
        <div 
          @click="toggleCard(0)"
          :class="[
            'bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 cursor-pointer transition-all duration-300',
            clickedCards[0] ? 'shadow-lg shadow-orange-500/10 -translate-y-1' : ''
          ]"
        >
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                contributed to 
                <a href="https://www.djangoproject.com/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Django</a> 
                Accessibility by participating in 
                <a href="https://djangonaut.space/comms/2025/04/17/celebrating-session-4-achievements/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Session 4</a> 
                of the 
                <a href="https://djangonaut.space/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Djangonaut Space Program</a>.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 cursor-pointer transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                selected as an Equitech Scholar for the 
                <a href="https://www.equitechfutures.com/programs/adi" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Applied Data Institute</a> 
                program at 
                <a href="https://www.equitechfutures.com/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Equitech Futures</a>.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 cursor-pointer transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                contributed to building referral and pharmacy management systems at 
                <a href="https://rigelis.co/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Rigelis</a>, 
                a nascent health-tech startup.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 cursor-pointer transition-all duration-300">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                Obtained a BSc. Computer Engineering from 
                <a href="https://www.ashesi.edu.gh/" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors font-medium">Ashesi University</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Action button -->
    <div class="text-center mt-16 animate-slide-up" style="animation-delay: 0.6s;">
      <NuxtLink 
        to="/blog" 
        class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600 text-white text-lg font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 group"
      >
        <i class="bi bi-journal-text mr-2 group-hover:scale-110 transition-transform"></i>
        Read My Blog
      </NuxtLink>
    </div>

    <!-- All Links Section (like original - single row) -->
    <div class="mt-20 animate-slide-up" style="animation-delay: 0.8s;">
      <p class="text-center mb-8 dark:text-white text-xl font-medium">
        You can also find me here:
      </p>
      
      <!-- Single Row: All links -->
      <div class="flex justify-center my-6 mx-3">
        <div class="flex flex-wrap justify-center space-x-6 gap-y-4">
          <NuxtLink to="https://www.github.com/Phinart98" target="_blank" aria-label="Visit my GitHub profile"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-github text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/philipnarteh/" target="_blank" aria-label="Visit my LinkedIn profile"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-linkedin text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.credly.com/users/philip-narteh" target="_blank" aria-label="Visit my certifications and badges on Credly"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-award text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="mailto:phinart98@gmail.com" target="_blank" aria-label="Send me an email"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-envelope-at-fill text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.x.com/NiiOtuNarteh" target="_blank" aria-label="Follow me on X (formally Twitter)"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-twitter-x text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/niiotunarteh/" target="_blank" aria-label="Follow me on Instagram"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-instagram text-2xl text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// SEO
useHead({
  title: 'Philip Narteh - Software Engineer',
  meta: [
    { name: 'description', content: 'Software Engineer passionate about accessibility, Django development, and inclusive web experiences.' }
  ]
})

// Image click and hover behavior
const imageClicked = ref(false)
const imageHovered = ref(false)
let imageTimeout = null

const toggleImageColor = () => {
  imageClicked.value = true
  
  // Clear any existing timeout
  if (imageTimeout) {
    clearTimeout(imageTimeout)
  }
  
  // Auto-revert after 1.5 seconds (reduced from 3 seconds)
  imageTimeout = setTimeout(() => {
    imageClicked.value = false
  }, 1500)
}

const handleImageHover = (isHovering) => {
  // Only enable hover on non-touch devices (desktop)
  if (!('ontouchstart' in window)) {
    imageHovered.value = isHovering
  }
}

// Card click behavior
const clickedCards = ref([false, false, false, false])
let cardTimeouts = []

const toggleCard = (index) => {
  clickedCards.value[index] = !clickedCards.value[index]
  
  // Clear any existing timeout for this card
  if (cardTimeouts[index]) {
    clearTimeout(cardTimeouts[index])
  }
  
  // Auto-revert after 2 seconds if clicked
  if (clickedCards.value[index]) {
    cardTimeouts[index] = setTimeout(() => {
      clickedCards.value[index] = false
    }, 2000)
  }
}

// Cleanup timeouts on unmount
onBeforeUnmount(() => {
  if (imageTimeout) {
    clearTimeout(imageTimeout)
  }
  cardTimeouts.forEach(timeout => {
    if (timeout) clearTimeout(timeout)
  })
})
</script>

<style scoped>
/* Custom animations */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.8s ease-out;
}

.animate-slide-up {
  animation: slideUp 0.8s ease-out both;
}
</style>
