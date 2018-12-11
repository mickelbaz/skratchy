<template>
  <art :art-name="artName" :art-categories="illustrationCategories" :main-title="mainTitle"></art>
</template>

<script>
import Art from "../Art.vue";

export default {
  data() {
    return {
      artName: "illustration",
      mainTitle: "Illustrations_",
      illustrationCategories: [
        {
          name: "le dragon",
          type: "book",
          class: "le-dragon",
          image: require("../../assets/illustrations/le_dragon/dragon1.jpg"),
          url: "/illustration/electric-animals",
          componentName: "leDragonContent"
        },
        {
          name: "la boom",
          type: "vinyl",
          class: "la-boom",
          image: require("../../assets/illustrations/la_boom/la_boom-cover.jpg"),
          url: "/illustration/la-boom",
          componentName: "laBoomContent"
        },
        {
          name: "dessins de presse",
          class: "press-drawings",
          image: require("../../assets/illustrations/press/press-thumbnail.jpg"),
          url: "/illustration/electric-animals",
          componentName: "pressContent"
        },
        {
          name: "caricature",
          class: "caricature",
          image: require("../../assets/illustrations/caricature/caricature.jpg"),
          url: "/illustration/electric-animals",
          componentName: "caricatureContent"
        },
        {
          name: "croquis",
          type: "",
          class: "sketches",
          image: require("../../assets/illustrations/sketches/sketch-thumbnail.jpg"),
          url: "/illustration/electric-animals"
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
          image: require("../../assets/illustrations/wolf/le-loup.jpg"),
          componentName: "leLoupContent"
        },
        {
          name: "thérapie taxi",
          class: "taxi",
          image: require("../../assets/illustrations/therapie-taxi/therapie-thumbnail.jpg"),
          componentName: "therapieContent"
        },
        {
          name: "sin city",
          class: "sin-city",
          image: require("../../assets/illustrations/wolf/wolf.png"),
          url: "/illustration/electric-animals"
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