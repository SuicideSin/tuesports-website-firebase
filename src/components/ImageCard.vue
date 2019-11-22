<template>
  <v-card class="mx-auto animated ma-4" :class="animated" :width="width" height="350px">
    <v-img :src="card.img" height="200px">
      <template v-slot:placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-row>
      </template>
    </v-img>

    <v-card-title>{{card.title}}</v-card-title>

    <v-card-subtitle>{{card.subtitle}}</v-card-subtitle>

    <v-card-text>{{card.desc}}</v-card-text>

    <v-card-actions>
      <!-- <v-btn text :href="card.buttonAction" color="red">{{card.buttonName}}</v-btn> -->
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    animated: {
      type: String,
      default: ""
    },
    width: {
      type: Number,
      default: 300
    },
    card: {
      type: Object,
      default: () => ({
        title: "MSPi",
        subtitle: "Capstone Project",
        desc: "",
        img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
        buttonName: "Website",
        buttonAction: "https://mspi.tech/"
      })
    }
  },
  data() {
    return {
      show: false
    };
  },
  mounted: function() {}
};
</script>
