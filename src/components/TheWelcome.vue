<template>
  <v-app>
    <div class="landing-wrapper">
      <!-- Background Image Full Page -->
      <div class="background-image">
        <v-img
          :src="wizard"
          alt="Wizard"
          class="wizard-image"
          min-width="300"
          min-height="300"
          contain
        />

        <!-- Navbar -->
        <v-app-bar flat elevation="0" color="transparent" class="px-8 py-4">
          <v-container class="d-flex align-center justify-space-between" fluid>
            <!-- Logo -->
            <v-img :src="logo" alt="Logo" max-height="40" max-width="100" />

            <!-- Menu + Language -->
            <div class="d-flex align-center gap-4">
              <!-- Desktop menu -->
              <div class="d-none d-md-flex align-center gap-4">
                <v-btn
                  text
                  v-for="item in menuItems"
                  :key="item"
                  class="text-white text-button font-weight-bold"
                >
                  {{ item }}
                </v-btn>

                <!-- Language Dropdown -->
                <v-menu offset-y>
                  <template #activator="{ props }">
                    <v-btn v-bind="props" icon size="32" class="ml-2">
                      <v-img :src="selectedLang.flag" width="32" height="32" />
                    </v-btn>
                  </template>

                  <v-list class="v-list-language">
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

              <!-- Mobile hamburger menu -->
              <v-btn icon class="d-md-none" @click="openMobileMenu">
                <v-icon color="white">mdi-menu</v-icon>
              </v-btn>
            </div>
          </v-container>
        </v-app-bar>

        <!-- Main Content -->
        <div class="main-content">
          <!-- Title -->
          <h1 class="text-white font-weight-bold text-h3 text-center mb-6">
            We're Getting Ready
          </h1>

          <!-- Countdown -->
          <v-container class="d-flex justify-center">
            <v-card
              class="pa-6 countdown-card"
              elevation="10"
              rounded="xl"
              max-width="500"
              width="100%"
            >
              <v-row justify="center" align="center" class="text-center">
                <template v-for="(item, index) in countdownItems" :key="item.label">
                  <v-col cols="auto" class="countdown-item">
                    <div class="text-h4 font-weight-bold">{{ item.value }}</div>
                    <div class="text-caption">{{ item.label }}</div>
                  </v-col>

                  <!-- Icon dấu : -->
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
          <div class="text-center text-white mb-6" style="max-width: 500px; margin: 0 auto;">
            <p>{{ t('subtitle') }}</p>
          </div>

          <!-- Email Input -->
          <div class="d-flex justify-center mt-4">
            <v-text-field
              placeholder="Enter your email"
              append-inner-icon="mdi-arrow-right"
              variant="outlined"
              density="comfortable"
              hide-details
              class="email-input"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <div
      v-show="isMobileMenuOpen"
      class="mobile-menu-overlay"
    >
      <div class="d-flex align-center px-4 pt-4 w-100">
        <!-- Language dropdown -->
        <v-menu offset-y>
          <template #activator="{ props }">
            <v-btn v-bind="props" icon>
              <v-img :src="selectedLang.flag" width="32" height="32" />
            </v-btn>
          </template>

          <v-list class="v-list-language">
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

        <v-spacer />
        <!-- Close Button -->
        <v-btn icon @click="closeMobileMenu">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <!-- Menu items -->
      <div class="d-flex flex-column align-center mt-12">
        <v-btn
          v-for="item in menuItems"
          :key="item"
          variant="text"
          class="text-h6 font-weight-bold my-4"
          @click="closeMobileMenu"
        >
          {{ item }}
        </v-btn>
      </div>
    </div>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import logo from '@/assets/logo.png'
import wizard from '@/assets/wizard.png'
import enFlag from '@/assets/flags/en.png'
import vnFlag from '@/assets/flags/vn.png'

const menuItems = ['ABOUT US', 'GAMES', 'PARTNERS', 'CONTACT US']

const { t, locale } = useI18n()
const selectedLang = ref({ code: 'en', label: 'English', flag: enFlag })
const languages = [
  { code: 'en', label: 'English', flag: enFlag },
  { code: 'vn', label: 'Vietnamese', flag: vnFlag },
]
const changeLanguage = (lang) => {
  selectedLang.value = lang
  locale.value = lang.code
}

// Mobile Menu Logic
const isMobileMenuOpen = ref(false)
const openMobileMenu = () => {
  isMobileMenuOpen.value = true
  document.body.classList.add('overflow-hidden')
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.classList.remove('overflow-hidden')
}

// Countdown Logic
const countdown = ref({ Days: 0, Hours: 0, Minutes: 0, Second: 0 })
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
const countdownItems = computed(() =>
  Object.entries(countdown.value).map(([label, value]) => ({ label, value }))
)
let timer
onMounted(() => {
  updateCountdown()
  timer = setInterval(updateCountdown, 1000)
})
onUnmounted(() => clearInterval(timer))
</script>

<style scoped>
.landing-wrapper {
  min-height: 100vh;
  overflow: hidden;
}

.background-image {
  background-image: url('@/assets/bg.png');
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
  z-index: 2;
  pointer-events: none;
}

.main-content {
  padding-top: 40px;
  padding-bottom: 100px;
}

.email-input {
  width: 100%;
  max-width: 400px;
  background-color: white;
  border-radius: 8px;
}

::v-deep .v-list-item__content {
  display: flex;
}

/* Mobile Menu Overlay */
.mobile-menu-overlay {
  position: fixed;
  inset: 0;
  background-color: white;
  z-index: 9999;
  overflow-y: auto;
  padding-top: 20px;
}

/* Ngăn scroll khi menu mở */
body.overflow-hidden {
  overflow: hidden;
}
</style>
