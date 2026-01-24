<template>
  <PageContainer>
    <!-- Gradient mesh background -->
    <GradientMesh :animated="true" :include-center="true" />

    <!-- Welcome section with enhanced styling -->
    <div class="text-center animate-fade-in relative">
      <!-- Profile image -->
      <div class="mb-8 relative inline-block">
        <img
          src="~/assets/img/Philip_headshot3.jpeg"
          alt="A headshot of Philip"
          @click="toggleImageColor"
          @mouseenter="handleImageHover(true)"
          @mouseleave="handleImageHover(false)"
          @touchstart="handleImageHover(true)"
          @touchend="handleImageHover(false)"
          :class="[
            'grayscale rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover cursor-pointer transition-all duration-500 relative shadow-xl hover:shadow-2xl hover:shadow-orange-500/20',
            (imageClicked || imageHovered) ? 'grayscale-0 scale-105 animate-gentle-bounce' : 'border-4 border-orange-300 dark:border-orange-700 hover:scale-105'
          ]"
        />
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 dark:text-white transition-colors">
        Hello, I'm&nbsp;<span class="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_auto]">Philip</span>!
      </h1>

      <h2 class="text-xl sm:text-2xl my-4 dark:text-white transition-colors font-medium max-w-2xl mx-auto">
        Software Engineer @ <a href="https://paicore.tech/" target="_blank" rel="noopener noreferrer" class="text-orange-700 dark:text-orange-400 underline underline-offset-4 hover:text-orange-600 dark:hover:text-orange-300 transition-colors">PAiCore Technologies</a>
      </h2>

      <!-- Blended description -->
      <p class="text-center italic my-6 mx-auto max-w-3xl px-4 dark:text-dark-200 text-dark-700 transition-colors animate-slide-up leading-relaxed" style="animation-delay: 0.2s;">
        I'm fascinated by how technology can be harnessed to create meaningful impact across diverse fields. I care deeply about building inclusive and accessible web experiences, particularly within the Open-Source space.
      </p>
    </div>

    <!-- Bento grid highlights section -->
    <div class="mt-20 animate-slide-up" style="animation-delay: 0.5s;">
      <h3 class="text-center mb-12 dark:text-white text-2xl sm:text-3xl font-bold">
        Highlights
      </h3>

      <!-- Bento grid layout - center aligned -->
      <div class="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
        <!-- PyOpenSci & Quansight -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-star-fill text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">PyOpenSci & Quansight</h4>
            <p class="text-sm text-orange-600 dark:text-orange-400 font-medium mb-3">Open Source Infrastructure Intern</p>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              Worked with the
              <AccentLink to="https://www.pyopensci.org/" :external="true">PyOpenSci community</AccentLink>
              at
              <AccentLink to="https://quansight.com/" :external="true">Quansight</AccentLink>
              to
              <AccentLink to="https://labs.quansight.org/blog/migrating-pyopensci-to-django" :external="true">migrate the website</AccentLink>
              from static site tools to Django with Wagtail CMS.
            </p>
          </div>
        </BaseCard>

        <!-- DjangoCon Talk -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-mic-fill text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">DjangoCon Africa 2025</h4>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              Presented on Accessibility and Open Source at
              <AccentLink to="/talks/djangocon-africa-2025" :external="false">DjangoCon Africa</AccentLink>.
            </p>
          </div>
        </BaseCard>

        <!-- Djangonaut Space -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-rocket-takeoff-fill text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">Django Contributor</h4>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              Contributed to
              <AccentLink to="https://www.djangoproject.com/" :external="true">Django</AccentLink>
              Accessibility by participating in
              <AccentLink to="https://djangonaut.space/comms/2025/04/17/celebrating-session-4-achievements/" :external="true">Session 4</AccentLink>
              of the
              <AccentLink to="https://djangonaut.space/" :external="true">Djangonaut Space Program</AccentLink>.
            </p>
          </div>
        </BaseCard>

        <!-- Equitech Scholar -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-mortarboard-fill text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">Equitech Scholar</h4>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              1 of 18 scholars selected for the
              <AccentLink to="https://www.equitechfutures.com/programs/adi" :external="true">Applied Data Institute</AccentLink>
              program at
              <AccentLink to="https://www.equitechfutures.com/" :external="true">Equitech Futures</AccentLink>.
            </p>
          </div>
        </BaseCard>

        <!-- Rigelis -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-heart-pulse-fill text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">Health-tech Startup</h4>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              Helped build referral and pharmacy management systems at
              <AccentLink to="https://www.rigelisinc.com/" :external="true">Rigelis</AccentLink>.
            </p>
          </div>
        </BaseCard>

        <!-- Education -->
        <BaseCard variant="bento" :interactive="true" :glow="true" class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <div class="flex flex-col h-full">
            <i class="bi bi-bank text-2xl text-orange-600 dark:text-orange-400 mb-3"></i>
            <h4 class="text-lg font-bold dark:text-white mb-2">Education</h4>
            <p class="dark:text-dark-100 leading-relaxed text-sm">
              BSc. Computer Engineering from
              <AccentLink to="https://www.ashesi.edu.gh/" :external="true">Ashesi University</AccentLink>.
            </p>
          </div>
        </BaseCard>
      </div>
    </div>

    <!-- Action button -->
    <div class="text-center mt-16 animate-slide-up" style="animation-delay: 0.7s;">
      <BaseButton
        to="/blog"
        variant="primary"
        size="lg"
        icon="journal-text"
        icon-position="left"
      >
        Read My Blog
      </BaseButton>
    </div>

    <!-- All Links Section (like original - single row) -->
    <div class="mt-20 animate-slide-up" style="animation-delay: 0.9s;">
      <h3 class="text-center mb-8 dark:text-white text-2xl font-bold">
        Connect With Me
      </h3>
      
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
/* Gentle bounce animation for profile image */
@keyframes gentle-bounce {
  0%, 100% {
    transform: scale(1.05) translateY(0);
  }
  50% {
    transform: scale(1.05) translateY(-5px);
  }
}

.animate-gentle-bounce {
  animation: gentle-bounce 0.6s ease-out;
}
</style>
