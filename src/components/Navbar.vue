<template>
    <v-app-bar color="red darken-3" app dark fixed text height="50px">
      <v-app-bar-nav-icon class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>TU Esports Club</v-toolbar-title>
      <v-spacer></v-spacer>

    <v-btn class="no-padding hidden-sm-and-down" color="white" large depressed text to="/">
        <span>Home</span>
      </v-btn>
      <v-menu offset-y left>
        <template v-slot:activator="{ on }">
          <v-btn class="no-padding hidden-sm-and-down" color="white" large depressed text v-on="on">
            <span>Games</span>
            <v-icon dark>arrow_drop_down</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="item in items"
            :key="item.name"
            :to="item.path"
          >
            <v-list-item-title v-text="item.name"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
        <v-btn class="no-padding hidden-sm-and-down" color="white" large depressed text to="/about">
            <span>About Us</span>
          </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  data: () => ({
    items: [{
      name: 'Overwatch',
      path: '/'
    },
    {
      name: 'League of Legends',
      path: '/'
    },
    {
      name: 'Rocket League',
      path: '/rocket-league'
    },
    {
      name: 'FGC',
      path: '/'
    }]
  })
};
</script>

<style>
/* .no-padding{
    margin-left: 0%;
    margin-right: 0%;
    padding-left: 0%;
    padding-right: 0%;
} */
</style>
