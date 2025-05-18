<template>
  <v-app>
    <Header />
    <ScrollButton />
    <v-main>
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ScrollButton from '@/components/ScrollButton.vue'
</script>
