<template>
  <v-app>
    <v-container fluid class="our-game">
      <v-row class="text-center mb-4">
        <v-col cols="12">
          <h1 class="playfair-60-bold-tight">
            {{ t('ourGames.title') }}
          </h1>
          <div class="our-game-description">
            <p class="montserrat-14-regular">
              {{ t('ourGames.description') }}
            </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
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
              <h2 class="montserrat-48-bold">
                {{ game.title }}
              </h2>
              <p class="montserrat-14-regular-white">
                {{ t(game.description) }}
              </p>
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

const games = ref([
  {
    id: 1,
    title: 'E-Space',
    description: 'ourGames.card.description',
    image: espace
  },
  {
    id: 2,
    title: 'Kingland',
    description: 'ourGames.card.description',
    image: pirates
  },
  {
    id: 3,
    title: 'The Last Game',
    description: 'ourGames.card.description',
    image: magic
  },
  {
    id: 4,
    title: 'G-Dragon',
    description: 'ourGames.card.description',
    image: kingland
  },
  {
    id: 5,
    title: 'Pirates',
    description: 'ourGames.card.description',
    image: witchParty
  },
  {
    id: 6,
    title: 'Witch Party',
    description: 'ourGames.card.description',
    image: aborigines
  },
  {
    id: 7,
    title: 'Rocky',
    description: 'ourGames.card.description',
    image: lastGame
  },
  {
    id: 8,
    title: 'Blue Fire',
    description: 'ourGames.card.description',
    image: rocky
  },
  {
    id: 9,
    title: 'Trâu Vàng',
    description: 'ourGames.card.description',
    image: cinderella
  },
  {
    id: 10,
    title: 'Aborigines',
    description: 'ourGames.card.description',
    image: dragon
  },
  {
    id: 11,
    title: 'Cinderella',
    description: 'ourGames.card.description',
    image: blueFire
  },
  {
    id: 12,
    title: 'Egypt Game',
    description: 'ourGames.card.description',
    image: egypt
  }
]);

const selectGame = (game) => {
  
};
</script>

<style lang="scss" scoped>
.our-game {
  .our-game-desciption {
    padding: 0 100px;
  }
  .game-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
  }
}

@media (max-width: 960px) {
  .our-game {
    .our-game-desciption {
      padding: 0 50px;
    }
  }
}

@media (max-width: 600px) {
  .our-game {
    .our-game-desciption {
      padding: 0 30px;
    }
  }
}
</style>