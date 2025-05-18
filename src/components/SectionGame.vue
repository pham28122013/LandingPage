<template>
  <v-app>
    <v-container fluid>
      <v-row class="text-center mb-4">
        <v-col cols="12">
          <h1 class="text-h3 font-weight-bold">{{ t('ourGames.title') }}</h1>
          <p class="text-body-1 text-medium-emphasis px-12">
            {{ t('ourGames.description') }}
          </p>
        </v-col>
      </v-row>

      <v-row>
        <!-- Game Cards -->
        <v-col
          v-for="(game, index) in games"
          :key="game.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
          :style="{
            marginTop: [1, 3].includes(index % 4) ? '40px' : ''
          }"
        >
          <v-card
            :height="300"
            class="game-card d-flex flex-column justify-end"
            :style="{
              backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.7), transparent), url(${game.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '16px'
            }"
            @click="selectGame(game)"
          >
            <div class="pa-5 text-white">
              <h2 class="text-h5 font-weight-bold mb-2">{{ game.title }}</h2>
              <p class="text-caption">{{ game.description }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'
import espace from '@/assets/images/game/espace.png'
import pirates from '@/assets/images/game/pirates.png'
import magic from '@/assets/images/game/magic.png'
import kingland from '@/assets/images/game/kingland.png'
import witchParty from '@/assets/images/game/witchParty.png'
import aborigines from '@/assets/images/game/aborigines.png'
import lastGame from '@/assets/images/game/lastGame.png'
import rocky from '@/assets/images/game/rocky.png'
import cinderella from '@/assets/images/game/cinderella.png'
import dragon from '@/assets/images/game/dragon.png'
import blueFire from '@/assets/images/game/blueFire.png'
import egypt from '@/assets/images/game/egypt.png'

const { t, locale } = useI18n()

// Game data
const games = ref([
  {
    id: 1,
    title: 'E-Space',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: espace
  },
  {
    id: 2,
    title: 'Kingland',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: pirates
  },
  {
    id: 3,
    title: 'The Last Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: magic
  },
  {
    id: 4,
    title: 'G-Dragon',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: kingland
  },
  {
    id: 5,
    title: 'Pirates',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: witchParty
  },
  {
    id: 6,
    title: 'Witch Party',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: aborigines
  },
  {
    id: 7,
    title: 'Rocky',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: lastGame
  },
  {
    id: 8,
    title: 'Blue Fire',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: rocky
  },
  {
    id: 9,
    title: 'Trâu Vàng',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: cinderella
  },
  {
    id: 10,
    title: 'Aborigines',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: dragon
  },
  {
    id: 11,
    title: 'Cinderella',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: blueFire
  },
  {
    id: 12,
    title: 'Egypt Game',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: egypt
  }
]);

const selectGame = (game) => {
  
};
</script>

<style scoped>
.game-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.game-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}
</style>