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
<<<<<<< HEAD
    </div>
    <v-card-title style="padding-top:0px;">
      <p class="display-1" style="text-align:center;">-{{ text }}</p>
=======
    </v-layout>
    <v-card-title primary-title style="padding-top:0px;">
      <v-layout justify-center>
        <p
          class="headline text-justify"
          style="text-align:center;"
        >-{{text}}</p>
      </v-layout>
>>>>>>> 8da825a8a0167c3cc8c589cf11f69837e961b1c9
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

<<<<<<< HEAD
<style></style>
=======
<style>
p {
  word-break: normal;
}
</style>
>>>>>>> 8da825a8a0167c3cc8c589cf11f69837e961b1c9
