<template>
  <art :art-name="artName" :art-categories="illustrationCategories" :main-title="mainTitle"></art>
</template>

<script>
import Art from "../Art.vue";

export default {
  data() {
    return {
      artName: "illustration",
      mainTitle: "Illustration",
      illustrationCategories: [
        {
          name: "le dragon",
          type: "book",
          class: "le-dragon",
          image: require("../../assets/illustrations/le_dragon/le_dragon-thumbnail.jpg"),
          componentName: "leDragonContent"
        },
        {
          name: "la boom",
          type: "vinyl",
          class: "la-boom",
          image: require("../../assets/illustrations/la_boom/la_boom-thumbnail.jpg"),
          componentName: "laBoomContent"
        },
        {
          name: "dessins de presse",
          class: "press-drawings",
          image: require("../../assets/illustrations/press/press-thumbnail.jpg"),
          componentName: "pressContent"
        },
        {
          name: "caricature",
          class: "caricature",
          image: require("../../assets/illustrations/caricature/caricature.jpg"),
          componentName: "caricatureContent"
        },
        {
          name: "croquis",
          type: "",
          class: "sketches",
          image: require("../../assets/illustrations/sketches/sketch-thumbnail.jpg"),
          componentName: "sketchesContent"
        },
        {
          name: "dessin d'observation",
          type: "",
          class: "observation-drawing",
          image: require("../../assets/illustrations/observation-drawing/observation-1.jpg"),
          componentName: "observationContent"
        },
        {
          name: "hippocampe",
          type: "dessin d'observation",
          class: "seahorse",
          image: require("../../assets/illustrations/observation-drawing/seahorse-thumbnail.jpg"),
          componentName: "seahorseContent"
        },
        {
          name: "le loup",
          class: "le-loup",
          image: require("../../assets/illustrations/wolf/le_loup-thumbnail.jpg"),
          componentName: "leLoupContent"
        },
        {
          name: "thérapie taxi",
          class: "taxi",
          image: require("../../assets/illustrations/therapie-taxi/therapie-thumbnail.jpg"),
          componentName: "therapieContent"
        }
      ]
    };
  },
  components: {
    Art
  }
};
</script>
<style scoped>
</style>