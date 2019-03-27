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
      mainTitle: "Photography",
      photographyCategories: [{
          name: "portraits",
          type: "",
          class: "portraits",
          image: require("../../assets/photographies/portraits/portraits-thumbnail.jpg"),
          componentName: "portraitsContent"
        },
        {
          name: "mongolie",
          type: "",
          class: "mongolia",
          image: require("../../assets/photographies/mongolia/mongolia-thumbnail.jpg"),
          componentName: "mongoliaContent"
        },
        {
          name: "danse",
          type: "",
          class: "dance",
          image: require("../../assets/photographies/dance/dance-thumbnail.jpg"),
          componentName: "danceContent"
        },
        {
          name: "poser un lapin",
          type: "",
          class: "rabbit",
          image: require("../../assets/photographies/rabbit/rabbit-thumbnail.jpg"),
          componentName: "rabbitContent"
        },
        {
          name: "new york",
          type: "",
          class: "nyc",
          image: require("../../assets/photographies/ny/ny-thumbnail.jpg"),
          componentName: "nyContent"
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