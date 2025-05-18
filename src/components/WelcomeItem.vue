<template>
  <v-container>
    <v-row>
      <!-- Left Section: About Us Text and Stats -->
      <v-col cols="12" md="6">
        <h1 class="text-h3 font-weight-bold mb-6">About Us</h1>
        
        <p class="text-body-1 mb-6">
          Browse our selection of free online games and have a great time without leaving the site! Our Kids Games section also includes game reviews, extensive walkthroughs of our games, gaming news, popular gaming platforms, cheats, guides, and articles as well! Enjoy reviews the most popular kids' games from all best consoles, video gaming platforms, so you don't need to search for them anywhere else. Let our expert reviewers guide you to the best of gaming art best!
        </p>
        
        <div class="d-flex flex-column mb-8">
          <!-- Users Stat -->
          <div class="mb-8">
            <div class="text-h2 font-weight-bold text-primary">600M+</div>
            <div class="text-subtitle-1 font-weight-medium">Users</div>
          </div>
          
          <!-- Games Stat -->
          <div>
            <div class="text-h2 font-weight-bold text-primary">135+</div>
            <div class="text-subtitle-1 font-weight-medium">Games</div>
          </div>
        </div>
      </v-col>
      
      <!-- Right Section: Features -->
      <v-col cols="12" md="6" class="bg-grey-lighten-3 pa-8 rounded">
        <!-- 24-Hour Support Feature -->
        <div class="d-flex align-center mb-8">
          <v-icon color="teal" size="large" class="mr-4">mdi-clock-outline</v-icon>
          <div>
            <div class="text-h6 font-weight-bold">24 - Hour</div>
            <div class="text-body-2">Our 24-hour online operations team ensures you're supported at all times.</div>
          </div>
        </div>
        
        <!-- Design Feature -->
        <div class="d-flex align-center mb-8">
          <v-icon color="teal" size="large" class="mr-4">mdi-palette</v-icon>
          <div>
            <div class="text-h6 font-weight-bold">Design</div>
            <div class="text-body-2">Combining imagination, universes, play dynamics, and unprecedented gameplay, our games transcend the boundaries of the virtual and real world.</div>
          </div>
        </div>
        
        <!-- Team Feature -->
        <div class="d-flex align-center">
          <v-icon color="teal" size="large" class="mr-4">mdi-account-group</v-icon>
          <div>
            <div class="text-h6 font-weight-bold">Team</div>
            <div class="text-body-2">Each is an award-winning, international studio of designers, artists, animators and producers who create some of the biggest names in film and video games.</div>
          </div>
        </div>
      </v-col>
    </v-row>
    
    <!-- Map Section with Character -->
    <v-row class="mt-8">
      <v-col cols="12" class="d-flex justify-center">
        <div class="position-relative" style="width: 100%; max-width: 800px;">
          <!-- World Map Image -->
          <v-img
            :src="map"
            alt="World Map"
            class="rounded"
            cover
          ></v-img>
          
          <!-- Witch Character Image overlaid on top of the map -->
          <div class="witch-character">
            <v-img
              :src="illustrator"
              alt="Witch Character"
              contain
              max-height="300"
            ></v-img>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import map from '@/assets/map.png';
import illustrator from '@/assets/illustrator.png';

</script>

<style scoped>
.text-primary {
  color: #03a9f4 !important;
}

.witch-character {
  position: absolute;
  top: -80px;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  z-index: 2;
}

/* Floating animation for the witch character */
.floating {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateX(-50%) translateY(0px);
  }
  50% {
    transform: translateX(-50%) translateY(-15px);
  }
  100% {
    transform: translateX(-50%) translateY(0px);
  }
}

/* Add a subtle broomstick rotation */
.witch-character:hover {
  animation: witch-hover 2s ease-in-out infinite;
}

@keyframes witch-hover {
  0% {
    transform: translateX(-50%) rotate(0deg);
  }
  25% {
    transform: translateX(-48%) rotate(2deg);
  }
  75% {
    transform: translateX(-52%) rotate(-2deg);
  }
  100% {
    transform: translateX(-50%) rotate(0deg);
  }
}
</style>