<template>
  <v-card color="red darken-2" class="white--text" min-height="180px">
    <v-layout justify-center>
      <v-rating
        :value="rating"
        background-color="yellow lighten-3"
        color="orange"
        style="padding-top:15px;"
        readonly
        half-increments
        large
      ></v-rating>
    </v-layout>
    <v-card-title primary-title style="padding-top:0px;">
      <v-layout justify-center>
        <p
          class="headline text-justify"
          style="text-align:center;"
        >-{{text}}</p>
      </v-layout>
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <p class="text-xs-right">-{{name}}</p>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
    props: {
        rating: Number,
        text: String,
        name: String,
    }
};
</script>

<style>
p {
  word-break: normal;
}
</style>
