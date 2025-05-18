<template>
  <DefaultLayout>
    <div class="landing-wrapper">
      <SectionAboutUs />
      <SectionGame />
      <SectionCarousel />
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import SectionCarousel from '@/components/SectionCarousel.vue'
import SectionGame from '@/components/SectionGame.vue'
import SectionAboutUs from '@/components/SectionAboutUs.vue'
</script>
