<template>
  <PageContainer>
    <!-- Welcome section with enhanced styling -->
    <div class="text-center animate-fade-in relative">
      <!-- Subtle radial gradient background glow -->
      <div class="absolute inset-0 -z-10 bg-gradient-radial from-orange-500/10 via-orange-500/5 to-transparent blur-3xl"></div>

      <!-- Profile image with decorative dashed ring -->
      <div class="mb-8 relative inline-block">
        <!-- Decorative dashed ring with slow rotation -->
        <div class="profile-ring"></div>

        <img
          src="~/assets/img/Philip_headshot3.jpeg"
          alt="A headshot of Philip"
          @click="toggleImageColor"
          @mouseenter="handleImageHover(true)"
          @mouseleave="handleImageHover(false)"
          @touchstart="handleImageHover(true)"
          @touchend="handleImageHover(false)"
          :class="[
            'grayscale rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover cursor-pointer transition-all duration-300 relative z-10',
            (imageClicked || imageHovered) ? 'grayscale-0 scale-105' : 'border-4 border-orange-300 dark:border-orange-700 hover:scale-105'
          ]"
        />
      </div>
      
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 dark:text-white transition-colors whitespace-nowrap">
        Hello, I'm&nbsp;<span class="text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">Philip</span>!
      </h1>
      
      <h2 class="text-2xl sm:text-3xl my-4 dark:text-white transition-colors font-medium">
        Software Engineer @ <a href="https://paicore.tech/" target="_blank" rel="noopener noreferrer" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">PAiCore Technologies</a>
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
        <BaseCard :interactive="true">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                worked with the
                <AccentLink to="https://www.pyopensci.org/" :external="true">PyOpenSci community</AccentLink>
                as an Open Source Infrastructure Intern at
                <AccentLink to="https://quansight.com/" :external="true">Quansight</AccentLink>
                to
                <AccentLink to="https://labs.quansight.org/blog/migrating-pyopensci-to-django" :external="true">migrate our website</AccentLink>
                from static site tools to Django with Wagtail CMS.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard :interactive="true">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                given a talk on Accessibility and Open Source at
                <AccentLink to="/talks/djangocon-africa-2025" :external="false">DjangoCon Africa 2025</AccentLink>.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard
          :interactive="true"
          :elevated="isCardClicked(0)"
          @click="toggleCard(0)"
        >
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                contributed to
                <AccentLink to="https://www.djangoproject.com/" :external="true">Django</AccentLink>
                Accessibility by participating in
                <AccentLink to="https://djangonaut.space/comms/2025/04/17/celebrating-session-4-achievements/" :external="true">Session 4</AccentLink>
                of the
                <AccentLink to="https://djangonaut.space/" :external="true">Djangonaut Space Program</AccentLink>.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard :interactive="true">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                selected as an Equitech Scholar for the
                <AccentLink to="https://www.equitechfutures.com/programs/adi" :external="true">Applied Data Institute</AccentLink>
                program at
                <AccentLink to="https://www.equitechfutures.com/" :external="true">Equitech Futures</AccentLink>.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard :interactive="true">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                contributed to building referral and pharmacy management systems at
                <AccentLink to="https://rigelis.co/" :external="true">Rigelis</AccentLink>,
                a nascent health-tech startup.
              </p>
            </div>
          </div>
        </BaseCard>

        <BaseCard :interactive="true">
          <div class="flex items-start space-x-4">
            <div class="w-2 h-2 bg-orange-600 dark:bg-orange-400 rounded-full mt-3 flex-shrink-0"></div>
            <div class="text-left">
              <p class="dark:text-white leading-relaxed text-lg">
                Obtained a BSc. Computer Engineering from
                <AccentLink to="https://www.ashesi.edu.gh/" :external="true">Ashesi University</AccentLink>.
              </p>
            </div>
          </div>
        </BaseCard>
      </div>
    </div>

    <!-- Action button -->
    <div class="text-center mt-16 animate-slide-up" style="animation-delay: 0.6s;">
      <NuxtLink
        to="/blog"
        class="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-600 to-orange-700 dark:from-orange-500 dark:to-orange-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:shadow-orange-500/40 transition-all duration-300 hover:-translate-y-2 hover:scale-105 group relative overflow-hidden"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <i class="bi bi-journal-text mr-2 group-hover:scale-110 transition-transform relative z-10"></i>
        <span class="relative z-10">Read My Blog</span>
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
  </PageContainer>
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

// Use card click composable
const { toggleCard, isCardClicked } = useCardClick()

// Cleanup image timeout on unmount
onBeforeUnmount(() => {
  if (imageTimeout) {
    clearTimeout(imageTimeout)
  }
})
</script>

<style scoped>
/* Decorative dashed ring around profile image */
.profile-ring {
  @apply absolute inset-0;
  @apply w-[calc(100%+2rem)] h-[calc(100%+2rem)];
  @apply -left-4 -top-4;
  @apply border-2 border-dashed border-orange-400/30 dark:border-orange-500/20;
  @apply rounded-full;
  animation: rotate-slow 30s linear infinite;
}

@keyframes rotate-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
