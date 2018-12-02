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
      artName: "illustration",
      mainTitle: "Illustrations_",
      illustrationCategories: [{
          name: "electric animals",
          type: "licence project",
          class: "electric-animals",
          image: require("../../assets/illustrations/electric_animals/electric_animals-thumbnail.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "la boom",
          type: "vinyl",
          class: "la-boom",
          image: require("../../assets/illustrations/la_boom/la_boom-cover.png"),
          url: "/illustration/la-boom"
        },
        {
          name: "le dragon",
          type: "book",
          class: "le-dragon",
          image: require("../../assets/illustrations/le_dragon/le_dragon.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "dessins de presse",
          class: "press-drawings",
          image: require("../../assets/illustrations/press/press-thumbnail.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "caricature",
          class: "caricature",
          image: require("../../assets/illustrations/caricature/caricature.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "wolf",
          class: "wolf",
          image: require("../../assets/illustrations/wolf/wolf.png"),
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