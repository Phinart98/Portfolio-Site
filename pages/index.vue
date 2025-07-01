<template>
  <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Your original welcome section with enhanced styling -->
    <div class="text-center animate-fade-in">
      <!-- Your profile image -->
      <div class="mb-8">
        <img src="~/assets/img/Philip_headshot3.jpeg" alt="A headshot of Philip" 
             class="grayscale rounded-full w-40 h-40 sm:w-48 sm:h-48 mx-auto object-cover border-4 border-orange-300 dark:border-orange-700 hover:grayscale-0 transition-all duration-300 hover:scale-105" />
      </div>
      
      <h1 class="text-5xl sm:text-6xl font-bold mt-4 mb-4 dark:text-white transition-colors">
        Hello, I'm&nbsp;<span class="text-orange-700 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors"> Philip</span>!
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
        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
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

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
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

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
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

        <div class="bg-white/60 dark:bg-dark-800/60 backdrop-blur-sm rounded-xl p-6 border border-orange-300/60 dark:border-dark-600/60 hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-300 hover:-translate-y-1">
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
          <NuxtLink to="https://www.credly.com/users/philip-narteh" target="_blank" aria-label="View my certifications and badges on Credly"
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
