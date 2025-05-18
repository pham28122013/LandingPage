<template>
  <div class="partners-section">
    <h1 class="text-center playfair-60-bold-tight">{{ t('ourPartners.title') }}</h1>
    
    <v-carousel
      :show-arrows="true"
      hide-delimiters
      height="150"
      :interval="3000"
      cycle
      class="partners-carousel"
    >
      <v-carousel-item
        v-for="(item, i) in partnerItems" 
        :key="i"
      >
        <div class="partner-container">
          <div 
            v-for="(partner, j) in item" 
            :key="j"
            class="partner-item"
          >
            <v-img
              :src="partner.logo"
              :alt="partner.name"
              max-width="260"
              max-height="100"
              contain
              class="partner-logo"
            ></v-img>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useDisplay } from 'vuetify';

import rectangle52 from '@/assets/images/partner/rectangle-52.png';
import rectangle53 from '@/assets/images/partner/rectangle-53.png';
import rectangle54 from '@/assets/images/partner/rectangle-54.png';
import rectangle55 from '@/assets/images/partner/rectangle-55.png';
import rectangle56 from '@/assets/images/partner/rectangle-56.png';
import rectangle57 from '@/assets/images/partner/rectangle-57.png';
import rectangle58 from '@/assets/images/partner/rectangle-58.png';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const partners = [
  { name: 'EA Games', logo: rectangle52 },
  { name: 'Game', logo: rectangle53 },
  { name: 'First Power Up', logo: rectangle54 },
  { name: 'Walt Disney', logo: rectangle55 },
  { name: 'Book Pro', logo: rectangle56 },
  { name: 'Book Pro', logo: rectangle57 },
  { name: 'Book Pro', logo: rectangle58 },
];

const { xs, sm, mdAndUp } = useDisplay();

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const partnerItems = computed(() => {
  let itemsPerSlide = 5;
  if (xs.value) itemsPerSlide = 1;
  else if (sm.value) itemsPerSlide = 2;
  return chunkArray(partners, itemsPerSlide);
});
</script>

<style scoped>
.partners-section {
  padding: 30px 0;
  border-radius: 4px;
  background-color: #d1c6c621;
  margin-top: 120px;
}

.partners-title {
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 30px;
}

.partners-carousel {
  max-width: 1200px;
  margin: 0 auto;
}

.partner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  height: 100%;
  padding: 0 40px;
  margin: 0 auto;
  max-width: 1200px;
}

.partner-item {
  flex: 0 0 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

@media (max-width: 960px) {
  .partner-item {
    flex: 0 0 50%;
  }
}

@media (max-width: 600px) {
  .partner-item {
    flex: 0 0 100%;
  }
  .partners-section {
    margin-top: 48px;
  }
}

.partner-logo {
  transition: transform 0.3s ease;
}

.partner-logo:hover {
  transform: scale(1.05);
}

/* Custom styles for carousel arrows */
:deep(.v-carousel__controls) {
  background: transparent;
}

:deep(.v-carousel__prev),
:deep(.v-carousel__next) {
  background: white;
  border-radius: 50%;
  margin: 0 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 50px;
  height: 50px;
}

:deep(.v-carousel__prev:hover),
:deep(.v-carousel__next:hover) {
  background: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

:deep(.v-carousel__next .v-icon),
:deep(.v-carousel__prev .v-icon) {
  color: black;
  font-size: 24px;
}
</style>