<template>
  <v-app>
    <div class="landing-wrapper">
      <!-- Background Image -->
      <div class="background-image">
        <!-- Navbar -->
        <v-app-bar flat elevation="0" color="transparent" class="px-8 py-4">
          <v-container class="d-flex align-center justify-space-between" fluid>
            <!-- Logo -->
            <v-img :src="logo" alt="Logo" max-height="40" max-width="100" />

            <!-- Desktop menu -->
            <div class="d-none d-md-flex align-center gap-4">
              <v-btn
                text
                v-for="item in menuItems"
                :key="item"
                class="text-white text-button font-weight-bold"
              >
                {{ t(item) }}
              </v-btn>

              <!-- Language Dropdown -->
              <v-menu offset-y>
                <template #activator="{ props }">
                  <v-btn v-bind="props" icon size="32" class="ml-2">
                    <v-img :src="selectedLang.flag" width="32" height="32" />
                    <v-icon :style="{color: '#fff'}">mdi-menu-down</v-icon>
                  </v-btn>
                </template>

                <v-list class="v-list-laguage">
                  <template v-for="(lang, index) in languages" :key="lang.code">
                    <v-list-item @click="changeLanguage(lang)">
                      <v-icon v-if="lang.code === selectedLang.code" class="me-2" size="20">mdi-check</v-icon>
                      <div v-else style="width: 24px; height: 20px;" class="me-2"></div>
                      <v-img :src="lang.flag" width="24" height="20" class="me-2" />
                      <span class="text-subtitle-2 font-weight-medium">{{ lang.label }}</span>
                    </v-list-item>
                    <v-divider v-if="index < languages.length - 1" class="my-1" />
                  </template>
                </v-list>
              </v-menu>
            </div>

            <!-- Mobile hamburger -->
            <v-btn icon class="d-md-none" @click="mobileMenu = true">
              <v-icon color="white">mdi-menu</v-icon>
            </v-btn>
          </v-container>
        </v-app-bar>

        <!-- Mobile Full Screen Menu -->
        <div
          v-if="mobileMenu"
          class="mobile-menu-overlay"
        >
          <div class="d-flex justify-space-between align-center px-4 py-4">
            <!-- Language Menu -->
            <v-menu offset-y :attach="true">
              <template #activator="{ props }">
                <v-btn v-bind="props" icon class="select-language-mobile">
                  <v-img :src="selectedLang.flag" width="32" height="32" />
                  <v-icon>mdi-menu-down</v-icon>
                </v-btn>
              </template>

              <v-list class="v-list-laguage">
                <template v-for="(lang, index) in languages" :key="lang.code">
                  <v-list-item @click="changeLanguage(lang)">
                    <v-icon v-if="lang.code === selectedLang.code" class="me-2" size="20">mdi-check</v-icon>
                    <div v-else style="width: 24px; height: 20px;" class="me-2"></div>
                    <v-img :src="lang.flag" width="24" height="20" class="me-2" />
                    <span class="text-subtitle-2 font-weight-medium">{{ lang.label }}</span>
                  </v-list-item>
                  <v-divider v-if="index < languages.length - 1" class="my-1" />
                </template>
              </v-list>
            </v-menu>

            <!-- Close Button -->
            <v-btn icon @click="mobileMenu = false" class="close-menu-mobile">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </div>

          <!-- Menu Items -->
          <div class="d-flex flex-column align-center mt-10" v-for="(item, index) in menuItems"
              :key="item">
            <v-btn
              
              variant="text"
              class="text-black text-h6 mb-4"
              @click="mobileMenu = false"
            >
              {{ item }}
              
            </v-btn>
            <v-divider v-if="index < menuItems.length - 1" class="border-bottom-menu" />
          </div>
        </div>

        <!-- Main Content -->
        <div class="main-content">
          <h1 class="text-white font-weight-bold text-h3 text-center mb-6">
            {{ t('header.title')}}
          </h1>

          <!-- Countdown -->
          <v-container class="d-flex justify-center">
            <v-card class="pa-6 countdown-card" elevation="10" rounded="xl" max-width="500" width="100%">
              <v-row justify="center" align="center" class="text-center">
                <template v-for="(item, index) in countdownItems" :key="item.label">
                  <v-col cols="auto" class="countdown-item">
                    <div class="text-h4 font-weight-bold">{{ item.value }}</div>
                    <div class="text-caption">{{ t('header.coundown.' + item.label) }}</div>
                  </v-col>
                  <v-col
                    v-if="index < countdownItems.length - 1"
                    cols="auto"
                    class="d-flex flex-column align-center justify-center gap-1"
                  >
                    <v-icon size="6" color="black">mdi-circle</v-icon>
                    <v-icon size="6" color="black">mdi-circle</v-icon>
                  </v-col>
                </template>
              </v-row>
            </v-card>
          </v-container>

          <!-- Subtitle -->
          <div class="text-center text-white mb-6 text-header" style="max-width: 500px; margin: 0 auto;">
            <p>{{ t('header.subtitle') }}</p>
          </div>

          <!-- Email Input -->
          <div class="d-flex justify-center mt-4">
            <v-text-field
              :placeholder="t('header.emailPlaceholder')"
              append-inner-icon="mdi-arrow-right"
              variant="outlined"
              density="comfortable"
              hide-details
              class="email-input"
            />
          </div>
        </div>

        <!-- Wizard Image -->
        <v-img
          :src="wizard"
          alt="Wizard"
          class="wizard-image"
          min-width="300"
          min-height="300"
          contain
        />
      </div>
      <!-- Wizard Image Mobile -->
      <v-img
        :src="wizard"
        alt="Wizard"
        class="wizard-image-mobile"
        min-width="300"
        min-height="300"
        contain
      />
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed, watch } from 'vue'
import logo from '@/assets/logo.png'
import enFlag from '@/assets/flags/en.png'
import vnFlag from '@/assets/flags/vn.png'
import wizard from '@/assets/header/wizard.png'
import { useI18n } from 'vue-i18n'

const menuItems = ['header.menu.about', 'header.menu.games', 'header.menu.partners', 'header.menu.contact']
const { t, locale } = useI18n()

const countdown = ref({ Days: 0, Hours: 0, Minutes: 0, Second: 0 })
const countdownItems = computed(() =>
  Object.entries(countdown.value).map(([label, value]) => ({ label, value }))
)

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 30)

const updateCountdown = () => {
  const now = new Date().getTime()
  const distance = targetDate.getTime() - now
  if (distance > 0) {
    countdown.value.Days = Math.floor(distance / (1000 * 60 * 60 * 24))
    countdown.value.Hours = Math.floor((distance / (1000 * 60 * 60)) % 24)
    countdown.value.Minutes = Math.floor((distance / (1000 * 60)) % 60)
    countdown.value.Second = Math.floor((distance / 1000) % 60)
  } else {
    countdown.value = { Days: 0, Hours: 0, Minutes: 0, Second: 0 }
  }
}

let timer = null
onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})
onUnmounted(() => clearInterval(timer))

// Language
const languages = [
  { code: 'vn', label: 'Vietnamese', flag: vnFlag },
  { code: 'en', label: 'English', flag: enFlag }
]
const selectedLang = ref(languages[0])
const changeLanguage = (lang) => {
  locale.value = lang.code
  selectedLang.value = lang
}

// Mobile Menu
const mobileMenu = ref(false)
watch(mobileMenu, (val) => {
  document.body.style.overflow = val ? 'hidden' : ''
})
</script>

<style scoped>
.landing-wrapper {
  min-height: 100vh;
  overflow: hidden;
}
.background-image {
  background-image: url('@/assets/header/bg.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
}
.wizard-image {
  position: absolute;
  bottom: 15px;
  left: 0;
  z-index: 1;
  pointer-events: none;
}
.main-content {
  padding-top: 40px;
  padding-bottom: 100px;
  position: relative;
  z-index: 2;
}
.email-input {
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
}
.countdown-card {
  padding: 24px 0 !important;
}
.v-list-laguage ::v-deep .v-list-item__content {
  padding: 4px 25px;
  display: flex;
}
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background: white;
  z-index: 9999;
  overflow: hidden;
}
.close-menu-mobile {
  box-shadow: none;
}
.select-language-mobile {
  border: 1px solid #AFAFAF;
  border-radius: 4px;
  width: 80px !important;
  height: 40px !important;
  background-color: #e0dada7a;
}
.border-bottom-menu {
  color: #131111;
  height: 2px;
  width: 100%;
}
.wizard-image-mobile {
  display: none;
}

@media (max-width: 960px) {
  .px-8 {
    padding: 0 !important;
  }
  .email-input {
    margin: 0 16px;
  }
}
@media (max-width: 600px) {
  .text-header {
    margin: 0 16px !important;
  }
  .wizard-image {
    display: none;
  }
  .wizard-image-mobile {
    display: block;
    height: 300px;
    width: 300px;
    margin-top: -120px;
    margin-left: 100px;
  }
}
</style>
