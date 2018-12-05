<template>
<div class="electric-animals">
  <h1>{{ titleName }}</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      titleName: "electric animals content!",
      electricTitle: "electric animals",
      goBack: {
        name: "go back",
        img: require("../../../assets/icons/back.svg")
      },
      electricAnimals: [
        {
          name: "lizard",
          url: require("../../../assets/illustrations/electric_animals/lizard.jpg")
        },
        {
          name: "ornithorhynchus",
          url: require("../../../assets/illustrations/electric_animals/ornithorhynchus.jpg")
        },
        {
          name: "bee",
          url: require("../../../assets/illustrations/electric_animals/bee.jpg")
        },
        {
          name: "leg",
          url: require("../../../assets/illustrations/electric_animals/leg.jpg")
        },
        {
          name: "morray",
          url: require("../../../assets/illustrations/electric_animals/morray.jpg")
        },
        {
          name: "morray2",
          url: require("../../../assets/illustrations/electric_animals/morray2.jpg")
        },
        {
          name: "elephant-fish",
          url: require("../../../assets/illustrations/electric_animals/elephant-fish.jpg")
        },
        {
          name: "jelly-fish",
          url: require("../../../assets/illustrations/electric_animals/jelly-fish.jpg")
        },
        {
          name: "hornet",
          url: require("../../../assets/illustrations/electric_animals/hornet.jpg")
        },
        {
          name: "gecko",
          url: require("../../../assets/illustrations/electric_animals/gecko.jpg")
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
.electric-animals-content {
  display: grid;
  grid-template-columns: 20% 20% 10% 25% 25%;
  grid-template-rows: 23% 27% 25%;
}
.electric-animals img {
  width: 100%;
}

.electric-animals .ornithorhynchus {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
}
.electric-animals .bee {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}
.electric-animals .morray {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .morray2 {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .hornet {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .jelly-fish {
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}
.electric-animals .lizard {
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.electric-animals .gecko {
  grid-column-start: 3;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
}
.electric-animals .elephant-fish {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
}
.electric-animals .leg {
  grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
}
.electric-animals h2 {
  grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-bottom: 0;
  margin-top: 50%;
}
</style>
