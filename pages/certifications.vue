<template>
  <PageContainer>
    <!-- Header Section -->
    <PageHeader
      icon="award"
      subtitle="Professional certifications and recognition in Software Engineering and Cloud Computing."
    />

    <!-- Certifications Grid -->
    <div class="flex flex-wrap gap-8 justify-center items-stretch">
      <!-- KCNA Certification -->
      <a href="https://www.credly.com/badges/31d02228-b0cb-4af6-aa7a-b704f4d4c433" target="_blank" rel="noopener noreferrer" class="flex w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] group animate-slide-up" style="animation-delay: 0s">
        <BaseCard :interactive="true" class="relative flex-1">
        <!-- Verified Badge -->
        <div class="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 animate-pulse-subtle">
          <i class="bi bi-check-lg text-white text-sm font-bold"></i>
        </div>

        <div class="flex flex-col items-center text-center h-full">
          <div class="w-32 h-32 mb-4 flex items-center justify-center flex-shrink-0">
            <img src="~/assets/img/certs/kcna-badge.png" alt="KCNA Badge" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              KCNA: Kubernetes and Cloud Native Associate
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Linux Foundation
            </p>
            <div class="flex items-center justify-center gap-2 text-xs mb-3">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Kubernetes</span>
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Cloud Native</span>
            </div>
            <p class="text-dark-600 dark:text-dark-400 text-sm">
              <i class="bi bi-calendar3"></i> September 2025
            </p>
          </div>
        </div>
        </BaseCard>
      </a>

      <!-- AWS CCP Certification -->
      <a href="https://www.credly.com/badges/2ec8b1f4-5ec7-4ea1-9f3b-25ed3b8bf1ad" target="_blank" rel="noopener noreferrer" class="flex w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] group animate-slide-up" style="animation-delay: 0.1s">
        <BaseCard :interactive="true" class="relative flex-1">
        <!-- Verified Badge -->
        <div class="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 animate-pulse-subtle">
          <i class="bi bi-check-lg text-white text-sm font-bold"></i>
        </div>

        <div class="flex flex-col items-center text-center h-full">
          <div class="w-32 h-32 mb-4 flex items-center justify-center flex-shrink-0">
            <img src="~/assets/img/certs/aws-ccp-badge.png" alt="AWS CCP Badge" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              AWS Certified Cloud Practitioner
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Amazon Web Services
            </p>
            <div class="flex items-center justify-center gap-2 text-xs mb-3">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">AWS</span>
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Cloud</span>
            </div>
            <p class="text-dark-600 dark:text-dark-400 text-sm">
              <i class="bi bi-calendar3"></i> August 2025
            </p>
          </div>
        </div>
        </BaseCard>
      </a>

      <!-- GCP ACE Certification -->
      <a href="https://www.credly.com/badges/e4c7b665-e0e7-4471-83d5-61865a1aa2cf" target="_blank" rel="noopener noreferrer" class="flex w-full md:basis-[calc(50%-1rem)] lg:basis-[calc(33.333%-1.333rem)] md:max-w-[calc(50%-1rem)] lg:max-w-[calc(33.333%-1.333rem)] group animate-slide-up" style="animation-delay: 0.2s">
        <BaseCard :interactive="true" class="relative flex-1">
        <!-- Verified Badge -->
        <div class="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-10 animate-pulse-subtle">
          <i class="bi bi-check-lg text-white text-sm font-bold"></i>
        </div>

        <div class="flex flex-col items-center text-center h-full">
          <div class="w-32 h-32 mb-4 flex items-center justify-center flex-shrink-0">
            <img src="~/assets/img/certs/gcp-ace-badge.png" alt="GCP ACE Badge" class="w-full h-full object-contain" />
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-dark-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-orange-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
              Google Cloud Certified Associate Cloud Engineer
            </h3>
            <p class="text-dark-600 dark:text-dark-300 text-sm mb-3">
              Google Cloud
            </p>
            <div class="flex items-center justify-center gap-2 text-xs mb-3">
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">GCP</span>
              <span class="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded">Cloud</span>
            </div>
            <p class="text-dark-600 dark:text-dark-400 text-sm">
              <i class="bi bi-calendar3"></i> December 2024
            </p>
          </div>
        </div>
        </BaseCard>
      </a>
    </div>
  </PageContainer>
</template>

<script setup>
// SEO
useHead({
  title: 'Certifications & Achievements - Philip Narteh',
  meta: [
    { name: 'description', content: 'Professional certifications and achievements in software engineering by Philip Narteh.' }
  ]
})
</script>
