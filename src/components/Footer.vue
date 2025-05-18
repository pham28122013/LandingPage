<template>
  <v-footer class="footer-with-bg">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="3"
          class="d-flex flex-column align-center align-md-start justify-center"
        >
          <div class="mb-4">
            <v-img :src="logo" width="120" height="120px" alt="ETech Logo" class="mb-4" />
          </div>
          <div class="d-flex justify-center justify-md-start">
            <v-btn
              v-for="(icon, index) in socialIcons"
              :key="index"
              :icon="icon.icon"
              variant="text"
              color="white"
              class="mr-2"
              :href="icon.link"
              target="_blank"
            ></v-btn>
          </div>
        </v-col>
        
        <!-- Address -->
        <v-col cols="12" md="5">
          <h3 class="text-h6 text-white mb-4">{{ t('footer.address.title') }}</h3>
          <div class="d-flex mb-4">
            <v-icon color="white" class="mr-2">mdi-map-marker</v-icon>
            <div class="text-white">
              <div>{{ t('footer.address.contentEn') }}</div>
              <div>{{ t('footer.address.contentVn') }}</div>
            </div>
          </div>
          <div class="d-flex align-center">
            <v-icon color="white" class="mr-2">mdi-phone</v-icon>
            <div class="text-white">
              <span>{{ t('footer.address.phoneEn') }}</span>
              <span>{{ t('footer.address.or') }}</span>
              <span>{{ t('footer.address.phoneVn') }}</span>
            </div>
          </div>
        </v-col>

        <!-- Subscribe -->
        <v-col cols="12" md="4">
          <h3 class="text-h6 text-white mb-4">{{ t('footer.subscribe.title') }}</h3>
          <p class="text-white mb-4">{{ t('footer.subscribe.description') }}</p>
          <div class="custom-email-input">
            <input 
              type="email" 
              v-model="email" 
              :placeholder="t('footer.subscribe.mail')" 
              class="email-field"
            />
            <button @click="subscribeToNewsletter" class="submit-button">
              <v-icon color="white">mdi-arrow-right</v-icon>
            </button>
          </div>
        </v-col>
      </v-row>

      <!-- Copyright -->
    </v-container>
  </v-footer>
  <div class="copy-right">
    <v-row>
      <v-col cols="12" class="text-center text-white mt-6">
        <div class="d-flex justify-center">
          <span>2017 Copyright.Policy.</span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import logo from '@/assets/images/logo.png'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const email = ref('');

const socialIcons = [
  { icon: 'mdi-twitter', link: 'https://twitter.com' },
  { icon: 'mdi-facebook', link: 'https://facebook.com' },
  { icon: 'mdi-linkedin', link: 'https://linkedin.com' }
];

const subscribeToNewsletter = () => {
  email.value = '';
};
</script>

<style scoped>
.footer-with-bg {
  background-image: url('@/assets/images/footer/bg-footer.png');
  background-size: cover;
  background-position: center;
  position: relative;
  color: white;
  padding: 48px 0 24px 0;
}
.copy-right {
  background-color: rgba(0, 0, 0, 1);
  padding-bottom: 24px;
}

.custom-email-input {
  display: flex;
  align-items: center;
  background-color: transparent;
  border: 1px solid white;
  border-radius: 5px;
  padding: 2px;
  position: relative;
  overflow: hidden;
}

.email-field {
  background-color: transparent;
  border: none;
  padding: 12px 16px;
  color: white;
  flex-grow: 1;
  font-size: 16px;
  outline: none;
}

.email-field::placeholder {
  color: white;
  opacity: 0.7;
}

.submit-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
</style>