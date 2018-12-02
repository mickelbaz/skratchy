<template>
  <art :art-name="artName"
      :art-categories='illustrationCategories'
      :main-title="mainTitle"></art>
</template>

<script>
import Art from '../Art.vue';

export default {
  data() {
    return {
      artName: "photography",
      mainTitle: "Photography_",
      illustrationCategories: [{
          name: "portraits",
          type: "",
          class: "portraits",
          image: require("../../assets/photographies/portrait.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "mongolie",
          type: "",
          class: "mongolia",
          image: require("../../assets/photographies/mongolia.png"),
          url: "/illustration/electric-animals"
        }
      ]
    };
  },
  components: {
    Art
  }
}
</script>

<style scoped>

</style>