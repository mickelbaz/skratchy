<template>
  <art :art-name="artName"
      :art-categories='graphismCategories'
      :main-title="mainTitle"></art>
</template>

<script>
import Art from '../Art.vue';

export default {
  data() {
    return {
      artName: "graphism",
      mainTitle: "Graphism",
      graphismCategories: [{
          name: "cinquante degrés à l'ombre",
          type: "WAD Magazine",
          class: "wad-mag",
          image: require("../../assets/graphism/wad.jpg"),
          url: "/illustration/electric-animals",
          componentName: "wadContent"
        },
        {
          name: "identité visuelle",
          type: "Restaurant",
          class: "restaurant",
          image: require("../../assets/graphism/restaurant/restaurant-thumbnail.jpg"),
          componentName: "restaurantContent"
        },
        {
          name: "united movement of benetton",
          type: "benetton",
          class: "benetton",
          image: require("../../assets/graphism/benetton.png"),
          componentName: "benettonContent"
        },
        {
          name: "moma",
          type: "typography",
          class: "moma",
          image: require("../../assets/graphism/moma.png"),
          componentName: "momaContent"
        },
        {
          name: "liberty bell",
          type: "packaging",
          class: "liberty-bell",
          image: require("../../assets/graphism/beer/liberty-thumbnail.jpg"),
          componentName: "beerContent"
        },
        {
          name: "agence de voyage",
          type: "création d'un logo",
          class: "logo-creation",
          image: require("../../assets/graphism/travel-agency/agency-thumbnail.jpg"),
          componentName: "travelAgencyContent"
        },
        {
          name: "que sais-je ?",
          type: "livre",
          class: "knowledge",
          image: require("../../assets/graphism/book/know-thumbnail.jpg"),
          componentName: "knowledgeContent"
        },
        {
          name: "basalte",
          type: "persistance rétinienne",
          class: "basalte",
          image: require("../../assets/graphism/basalte/basalte-thumbnail.jpg"),
          componentName: "basalteContent"
        },
        {
          name: "pépito",
          type: "packaging",
          class: "pepito",
          image: require("../../assets/graphism/pepito/pepito-thumbnail.jpg"),
          componentName: "pepitoContent"
        },
        {
          name: "L'obsolescence programée et assumée",
          type: "Cherry",
          class: "cherry",
          image: require("../../assets/graphism/cherry/cherry-thumbnail.jpg"),
          componentName: "cherryContent"
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
