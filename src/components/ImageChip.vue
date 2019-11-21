<template>
  <div>
    <v-list-item class="elevation-2 white" three-line>
      <v-list-item-avatar>
        <v-img :src="item.img"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title
          v-text="item.title + ' (' + item.subtitle + ')'"
        ></v-list-item-title>
        <v-list-item-subtitle v-text="item.desc"></v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => ({
        img: "",
        title: "",
        subtitle: "",
        desc: ""
      })
    }
  }
};
</script>
