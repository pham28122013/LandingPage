<template>
  <div class="about-us-container">
    <v-container class="about-us-content">
      <v-row>
        <v-col cols="12" md="6" class="pr-md-6 px-20">
          <h1 class="playfair-60-bold-tight mb-20">
            {{ t('aboutUs.title') }}
          </h1>
          <p class="text-body-1 mb-6 montserrat-14-regular ">
            {{ t('aboutUs.description')}}
          </p>
          
          <div class="d-flex flex-column mb-8">
            <div class="mb-8">
              <div class="text-h2 text-md-h2 text-sm-h3 font-weight-bold text-primary">600M+</div>
              <div class="montserrat-24-bold">{{ t('aboutUs.users') }}</div>
            </div>
            
            <div>
              <div class="text-h2 text-md-h2 text-sm-h3 font-weight-bold text-primary">135+</div>
              <div class="montserrat-24-bold">{{ t('aboutUs.games') }}</div>
            </div>
          </div>
        </v-col>
        
        <v-col cols="12" md="6" class="bg-grey-lighten-3 pa-md-8 pa-4 rounded about-social">
          <div class="d-flex align-start mb-8">
            <v-btn icon class="my-icon-btn">
              <v-icon color="teal" size="x-large" :style="{color: '#000000 !important'}">mdi-clock-outline</v-icon>
            </v-btn>
            <div>
              <div class="montserrat-24-bold">
                {{ t('aboutUs.hour.title') }}
              </div>
              <div class="montserrat-14-regular">
                {{ t('aboutUs.hour.description') }}
              </div>
            </div>
          </div>
          
          <div class="d-flex align-start mb-8">
            <v-btn icon class="my-icon-btn">
              <v-icon color="teal" size="x-large" :style="{color: '#000000 !important'}">mdi-palette</v-icon>
            </v-btn>
            <div>
              <div class="montserrat-24-bold">
                {{ t('aboutUs.design.title') }}
              </div>
              <div class="montserrat-14-regular">
                {{ t('aboutUs.design.description') }}
              </div>
            </div>
          </div>
          
          <div class="d-flex align-start">
            <v-btn icon class="my-icon-btn">
              <v-icon color="teal" size="x-large" :style="{color: '#000000 !important'}">mdi-account-group</v-icon>
            </v-btn>
            <div>
              <div class="montserrat-24-bold">
                {{ t('aboutUs.team.title') }}
              </div>
              <div class="montserrat-14-regular">
                {{ t('aboutUs.design.description') }}
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <v-row class="map-container justify-center">
        <v-col cols="12" sm="10" md="8" lg="6" class="d-flex justify-center">
          <div class="witch-map-wrapper">
            <div class="witch-frame">
              <div class="witch-character floating">
                <v-img
                  :src="illustrator"
                  alt="Witch Character"
                  contain
                ></v-img>
              </div>
            </div>
            
            <div class="world-map">
              <v-img
                :src="map"
                alt="World Map"
                width="100%"
              ></v-img>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import map from '@/assets/images/aboutUs/map.png';
import illustrator from '@/assets/images/aboutUs/illustrator.png';
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

</script>

<style lang="scss" scoped>
.about-us-container {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 120px 0;

  .about-us-content {
    max-width: 1200px;
    width: 100%;
    padding: 1rem;
  }

  .text-primary {
    color: #03a9f4 !important;
  }

  .about-social {
    padding: 50px 30px !important;
  }

  .witch-map-wrapper {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin-top: 20px;
  }

  .witch-frame {
    position: relative;
    width: 220px;
    height: 220px;
    overflow: hidden;
    margin: 0 auto;
    z-index: 2;
    background-color: #fff;
  }

  .witch-character {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .world-map {
    position: relative;
    margin-top: -30px;
    width: 100%;
  }

  .size-indicator {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #03a9f4;
    color: white;
    padding: 4px 10px;
    border-radius: 4px;
    font-size: 14px;
  }

  .my-icon-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    min-width: 0;
    padding: 0;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    background-color: #00ffff0f;
  }

  .pr-md-6 {
    padding-top: 0 !important;
  }

  .floating {
    animation: float 6s ease-in-out infinite;
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

/* Add a subtle hover effect */
.witch-frame:hover .witch-character {
  animation: witch-hover 2s ease-in-out infinite;
}

@keyframes witch-hover {
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(2deg);
  }
  75% {
    transform: rotate(-2deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .witch-frame {
    width: 200px;
    height: 200px;
  }
  
  .world-map {
    margin-top: -20px;
  }
  
  .size-indicator {
    font-size: 12px;
  }

  .px-20 {
    padding-left: 30px !important;
    padding-right: 30px !important;
  }
}

@media (max-width: 600px) {
  .about-us-container {
    margin: 48px 0;
  }
  .witch-frame {
    width: 180px;
    height: 180px;
  }
  
  .world-map {
    margin-top: -15px;
  }
  
  .size-indicator {
    padding: 2px 8px;
  }

  .pr-md-6 {
    padding-right: 0 !important;
    margin-bottom: 2rem;
  }
}
</style>