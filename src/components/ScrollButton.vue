<template>
  <v-btn
    icon
    class="scroll-button"
    @click="handleClick"
  >
    <v-icon>{{ isTop ? 'mdi-chevron-down' : 'mdi-chevron-up' }}</v-icon>
  </v-btn>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isTop = ref(true);

const handleScroll = () => {
  isTop.value = window.scrollY <= 50;
};

const handleClick = () => {
  if (isTop.value) {
    // Scroll xuống 500px
    window.scrollTo({ top: 500, behavior: 'smooth' });
  } else {
    // Scroll lên đầu
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style scoped>
.scroll-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
  transition: opacity 0.3s ease;
}
</style>
