<template>
    <v-layout column>
    <v-parallax
      dark
      src='./goal_explosion_darken_1.jpg'
      v-if="$vuetify.breakpoint.mdAndUp"
    >
      <v-container>
        <v-layout fill-height row wrap justify-space-around>
          <v-flex xs12 md6 align-self-center>
            <h6 class="display-3 text-sm-center">Rocket League</h6>
          </v-flex>
        </v-layout>
      </v-container>
    </v-parallax>
    <!-- <PlayerCard></PlayerCard> -->
    </v-layout>
</template>

<script>
import PlayerCard from '../components/PlayerCard'
export default {
    components: {
        PlayerCard
    }
}
</script>

<style>

</style>
