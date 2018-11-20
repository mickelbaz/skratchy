<template>
<div class="electric-animals">
  <h1>{{ electricTitle }}</h1>
  <router-link to="/illustration">
    <div class="back-button">
      <img :src="goBack.img" alt="go back">
    </div>
  </router-link>
  <div class="electric-animals-content">
    
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      electricTitle: "electric animals",
      goBack: {
        name: "go back",
        img: require("../assets/icons/back.svg")
      },
      electricAnimals: [
        {
          name: "lizard",
          url: require("../assets/illustrations/electric_animals/lizard.jpg")
        },
        {
          name: "ornithorhynchus",
          url: require("../assets/illustrations/electric_animals/ornithorhynchus.jpg")
        },
        {
          name: "bee",
          url: require("../assets/illustrations/electric_animals/bee.jpg")
        },
        {
          name: "leg",
          url: require("../assets/illustrations/electric_animals/leg.jpg")
        },
        {
          name: "morray",
          url: require("../assets/illustrations/electric_animals/morray.jpg")
        },
        {
          name: "morray2",
          url: require("../assets/illustrations/electric_animals/morray2.jpg")
        },
        {
          name: "elephant-fish",
          url: require("../assets/illustrations/electric_animals/elephant-fish.jpg")
        },
        {
          name: "jelly-fish",
          url: require("../assets/illustrations/electric_animals/jelly-fish.jpg")
        },
        {
          name: "hornet",
          url: require("../assets/illustrations/electric_animals/hornet.jpg")
        },
        {
          name: "gecko",
          url: require("../assets/illustrations/electric_animals/gecko.jpg")
        }
      ]
    };
  }
};
</script>

<style scoped>
@keyframes bounceLeft {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-15px);
  }
}
.back-button {
  position: fixed;
  top: 105px;
  left: 55px;
}
.back-button img {
  animation-name: example 2s infinite;
  animation: bounceLeft 1.5s infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  width: 50px;
  height: 50px;
}
</style>
