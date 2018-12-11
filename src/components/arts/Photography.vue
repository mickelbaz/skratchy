<template>
  <art :art-name="artName"
      :art-categories='photographyCategories'
      :main-title="mainTitle"></art>
</template>

<script>
import Art from '../Art.vue';

export default {
  data() {
    return {
      artName: "photography",
      mainTitle: "Photographies",
      photographyCategories: [{
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
        },
        {
          name: "danse",
          type: "",
          class: "dance",
          image: require("../../assets/photographies/mongolia.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "poser un lapin",
          type: "",
          class: "rabbit",
          image: require("../../assets/photographies/mongolia.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "le mouvement",
          type: "",
          class: "movement",
          image: require("../../assets/photographies/mongolia.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "new york",
          type: "",
          class: "nyc",
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