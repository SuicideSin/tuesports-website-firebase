<template>
  <v-card color="red darken-2" class="white--text" min-height="250px">
    <div class="text-center">
      <v-rating
        :value="rating"
        background-color="yellow lighten-3"
        color="orange"
        style="padding-top:15px;"
        readonly
        half-increments
        large
      ></v-rating>
    </div>
    <v-card-title style="padding-top:0px;">
      <p class="display-1" style="text-align:center;">-{{ text }}</p>
    </v-card-title>

    <v-card-text> </v-card-text>

    <v-card-actions>
      <v-spacer></v-spacer>
      <p class="text-xs-right">-{{ name }}</p>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    rating: Number,
    text: String,
    name: String
  }
};
</script>

<style></style>
