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
            'grayscale rounded-full w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 object-cover cursor-pointer transition-all duration-500 relative shadow-xl hover:shadow-2xl hover:shadow-accent-500/20',
            (imageClicked || imageHovered) ? 'grayscale-0 scale-105 animate-gentle-bounce' : 'border-4 border-accent-300 dark:border-accent-700 hover:scale-105'
          ]"
        />
      </div>

      <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-4 dark:text-white transition-colors">
        Hello, I'm&nbsp;<span class="bg-gradient-to-r from-accent-600 to-accent-500 bg-clip-text text-transparent animate-gradient-flow bg-[length:200%_auto]">Philip</span>!
      </h1>

      <h2 class="text-xl sm:text-2xl my-4 dark:text-white transition-colors font-medium max-w-2xl mx-auto">
        Software Engineer @ <a href="https://paicore.tech/" target="_blank" rel="noopener noreferrer" class="text-accent-700 dark:text-accent-400 underline underline-offset-4 hover:text-accent-600 dark:hover:text-accent-300 transition-colors">PAiCore Technologies</a>
      </h2>

      <!-- Blended description -->
      <p class="text-center italic my-6 mx-auto max-w-3xl px-4 dark:text-surface-200 text-surface-700 transition-colors animate-slide-up leading-relaxed" style="animation-delay: 0.2s;">
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
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, 'https://labs.quansight.org/blog/migrating-pyopensci-to-django')">
            <div class="flex flex-col h-full">
              <i class="bi bi-lightning-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <a href="https://labs.quansight.org/blog/migrating-pyopensci-to-django" target="_blank" rel="noopener noreferrer" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  PyOpenSci & Quansight
                </a>
              </h4>
              <p class="text-sm md:text-base text-accent-600 dark:text-accent-400 font-medium mb-3">Open Source Infrastructure Intern</p>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
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
        </div>

        <!-- DjangoCon Talk -->
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, '/talks/djangocon-africa-2025')">
            <div class="flex flex-col h-full">
              <i class="bi bi-mic-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <NuxtLink to="/talks/djangocon-africa-2025" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  DjangoCon Africa 2025
                </NuxtLink>
              </h4>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
                Presented on Accessibility and Open Source at
                <NuxtLink to="/talks/djangocon-africa-2025" class="accent-link">DjangoCon Africa</NuxtLink>.
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- Djangonaut Space -->
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, 'https://djangonaut.space/')">
            <div class="flex flex-col h-full">
              <i class="bi bi-rocket-takeoff-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <a href="https://djangonaut.space/" target="_blank" rel="noopener noreferrer" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Django Contributor
                </a>
              </h4>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
                Contributed to
                <AccentLink to="https://www.djangoproject.com/" :external="true">Django</AccentLink>
                Accessibility by participating in
                <AccentLink to="https://djangonaut.space/comms/2025/04/17/celebrating-session-4-achievements/" :external="true">Session 4</AccentLink>
                of the
                <AccentLink to="https://djangonaut.space/" :external="true">Djangonaut Space Program</AccentLink>.
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- Equitech Scholar -->
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, 'https://www.equitechfutures.com/alumni')">
            <div class="flex flex-col h-full">
              <i class="bi bi-people-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <a href="https://www.equitechfutures.com/alumni" target="_blank" rel="noopener noreferrer" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Equitech Scholar
                </a>
              </h4>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
                1 of 18 scholars selected for the
                <AccentLink to="https://www.equitechfutures.com/programs/adi" :external="true">Applied Data Institute</AccentLink>
                program at
                <AccentLink to="https://www.equitechfutures.com/" :external="true">Equitech Futures</AccentLink>.
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- Rigelis -->
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, 'https://www.rigelisinc.com/')">
            <div class="flex flex-col h-full">
              <i class="bi bi-heart-pulse-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <a href="https://www.rigelisinc.com/" target="_blank" rel="noopener noreferrer" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Health-tech Startup
                </a>
              </h4>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
                Helped build referral and pharmacy management systems at
                <AccentLink to="https://www.rigelisinc.com/" :external="true">Rigelis</AccentLink>.
              </p>
            </div>
          </BaseCard>
        </div>

        <!-- Education -->
        <div class="w-full md:basis-[calc(50%-0.75rem)] lg:basis-[calc(33.333%-1rem)] md:max-w-[calc(50%-0.75rem)] lg:max-w-[calc(33.333%-1rem)]">
          <BaseCard variant="bento" :interactive="true" :glow="true" class="h-full relative" @click="handleCardClick($event, 'https://www.ashesi.edu.gh/')">
            <div class="flex flex-col h-full">
              <i class="bi bi-mortarboard-fill text-2xl text-accent-600 dark:text-accent-400 mb-3"></i>
              <h4 class="text-lg font-bold dark:text-white mb-2">
                <a href="https://www.ashesi.edu.gh/" target="_blank" rel="noopener noreferrer" class="hover:text-accent-600 dark:hover:text-accent-400 transition-colors">
                  Education
                </a>
              </h4>
              <p class="dark:text-surface-100 leading-relaxed text-sm md:text-base">
                BSc. Computer Engineering from
                <AccentLink to="https://www.ashesi.edu.gh/" :external="true">Ashesi University</AccentLink>.
              </p>
            </div>
          </BaseCard>
        </div>
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
            <i class="bi bi-github text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.linkedin.com/in/philipnarteh/" target="_blank" aria-label="Visit my LinkedIn profile"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-linkedin text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.credly.com/users/philip-narteh" target="_blank" aria-label="Visit my certifications and badges on Credly"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-award text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="mailto:phinart98@gmail.com" target="_blank" aria-label="Send me an email"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-envelope-at-fill text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.x.com/NiiOtuNarteh" target="_blank" aria-label="Follow me on X (formally Twitter)"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-twitter-x text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
          </NuxtLink>
          <NuxtLink to="https://www.instagram.com/niiotunarteh/" target="_blank" aria-label="Follow me on Instagram"
                    class="hover:scale-110 transition-transform duration-300">
            <i class="bi bi-instagram text-2xl text-accent-700 dark:text-accent-400 hover:text-accent-600 dark:hover:text-accent-300 transition-colors"></i>
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

// Handle card click - navigate to primary link when clicking card (but not when clicking nested links)
const handleCardClick = (event, url) => {
  // If the click target is a link or inside a link, let it handle navigation
  if (event.target.closest('a')) {
    return
  }

  // Otherwise, navigate to the card's primary URL
  if (url.startsWith('http')) {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    navigateTo(url)
  }
}

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

/* Accent link styling to match AccentLink component */
.accent-link {
  @apply text-accent-700 dark:text-accent-400;
  @apply transition-colors duration-300;
  @apply relative inline-block;
}

.accent-link::after {
  content: '';
  @apply absolute bottom-0 left-0;
  @apply w-full h-0.5;
  @apply bg-accent-600 dark:bg-accent-400;
  @apply origin-left;
  @apply transition-transform duration-300;
  @apply scale-x-100;
}

.accent-link:hover {
  @apply text-accent-600 dark:text-accent-300;
}

.accent-link:hover::after {
  @apply scale-x-110;
}
</style>
