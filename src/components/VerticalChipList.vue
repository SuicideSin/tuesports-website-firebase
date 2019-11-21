<template>
  <div>
    <v-list
      two-line
      avatar
      rounded
      dense
      color="transparent"
    >
      <v-list-item-group color="primary">
        <div v-for="(item, i) in list" :key="i">
          <ImageChip :item="item" />
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>
<script>
import ImageChip from "./ImageChip";
export default {
  components: {
    ImageChip
  },
  props: {
    list: {
      type: Array,
      default: () => [
        {
          img: "",
          title: "",
          subtitle: "",
          desc: ""
        }
      ]
    }
  }
};
</script>
