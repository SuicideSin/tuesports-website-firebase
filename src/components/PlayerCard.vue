<template>
  <v-card color="red darken-1 ma-4" dark width="250px">
    <v-container class="pb-0">
      <v-layout column>
        <v-flex grow align-self-center>
          <v-avatar class size="80">
            <v-img :src="profile"></v-img>
            <v-avatar class="rank" size="40">
              <v-img :src="rank"></v-img>
            </v-avatar>
          </v-avatar>
        </v-flex>
        <v-flex grow align-self-center class="">
          <v-card-title class="pb-0 pt-2 mb-0 font-italic headline">
            {{ subtitle }}
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-card-title>{{ title }}</v-card-title>

    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn icon x-small :href="twitch">
        <v-icon>mdi-twitch</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    profile: {
      type: String,
      default: "./rl/players/bierex.png"
    },
    rank: {
      type: String,
      default: "https://rocketleague.tracker.network/Images/RL/ranked/s4-19.png"
    },
    subtitle: {
      type: String,
      default: "Subtitle"
    },
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Description"
    },
    twitch: {
      type: String,
      default: "twitch.tv/stones24"
    }
  }
};
</script>

<style>
.player {
  z-index: 1;
  position: absolute;
  left: 10px;
  top: 10px;
}
.rank {
  position: absolute;
  right: 0px;
  bottom: -15px;
}
</style>
