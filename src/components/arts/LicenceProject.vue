<template>
  <div class="licence-content">
    <h1>electric content!</h1>  
    <div class="licence-categorie-buttons"
        :key="JSON.stringify(categorieButton)"
        v-for="categorieButton in categorieButtons"
        @click="categorieSelected">
      <div :class="categorieButton.class">
        <button>
          {{ categorieButton.name }}
        </button>
      </div>
    </div>
    <drawings></drawings>
    <fanzine></fanzine>
    <editions></editions>
  </div>
</template>

<script>
import Drawings from "./licence/Drawings.vue";
import Fanzine from "./licence/Fanzine.vue";
import Editions from "./licence/Editions.vue";

export default {
  data() {
    return {
      artName: "licence-project",
      mainTitle: "Projet de Licence",
      categorieButtons: [
        {
          name: "Licence_editions",
          class: "licence-edition-button"
        },
        {
          name: "Licence_drawings",
          class: "licence-drawings-button"
        },
        {
          name: "Licence_fanzine",
          class: "licence-fanzine-button"
        }
      ],
      categorieSelected: "licence-drawings" 
    };
  },
  components: {
    Drawings,
    Fanzine,
    Editions
  },
  methodes: {
    categorieSelection(){
      categorie
    }
  }
}
</script>

<style scoped>

</style>
