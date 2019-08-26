<template>
  <v-app>
    <v-snackbar v-model="snackbar" top :timeout=0>
      <v-icon dark left>info</v-icon>This website is still under development
      <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <Navbar />
    <div style="margin-top: 50px"></div>
    <router-view></router-view>
    <v-footer color="red darken-3">
      <v-layout justify-center>
        <p
          class="subheading white--text"
          style="margin-bottom:-5px;"
        >This website is still in development | Copyright 2019</p>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    Navbar
  },
  data() {
    return {
      snackbar: true
    };
  }
};
</script>
<style>
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #d32f2f;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c62828;
}
</style>
