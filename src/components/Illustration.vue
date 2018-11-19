<template>
<div class="illustration">
    <h1>{{ mainTitle }}</h1>
    <div class="selector">
        <div class="arrowLeft">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 103 103">
                <g id="arrow-left" transform="translate(2 1.5)">
                    <path id="Layer_1" data-name="Layer 1" d="M70,2.5l7.5,7.6L37.6,50,77.5,89.9,70,97.5,22.5,50Z" />
                </g>
            </svg>
        </div>
        <div class="arrowRight">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 103 103">
                <g id="arrowRight" class="cls-3" transform="translate(79.5 99) rotate(180)">
                    <g transform="translate(-22.5 -2.5)">
                        <path id="Layer_1" data-name="Layer 1" d="M70,2.5l7.5,7.6L37.6,50,77.5,89.9,70,97.5,22.5,50Z" />
                    </g>
                </g>
            </svg>
        </div>
    </div>
    <div class="illustration-content">
        <div class="electric-animals">
            <h2>{{ electricTitle }}</h2>
            <img :key="JSON.stringify(electricAnimal)"
                v-for="electricAnimal in electricAnimals"
                :src="electricAnimal.url"
                :class="electricAnimal.name">
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            mainTitle: 'Illustrations',
            electricTitle: 'electric animals',
            electricAnimals: [
                {
                    name: "lizard",
                    url: require('../assets/illustrations/electric_animals/lizard.jpg')
                },
                {
                    name: "ornithorhynchus",
                    url: require('../assets/illustrations/electric_animals/ornithorhynchus.jpg')
                },
                {
                    name: "bee",
                    url: require('../assets/illustrations/electric_animals/bee.jpg')
                },
                {
                    name: "leg",
                    url: require('../assets/illustrations/electric_animals/leg.jpg')
                },
                {
                    name: "morray",
                    url: require('../assets/illustrations/electric_animals/morray.jpg')
                },
                {
                    name: "morray2",
                    url: require('../assets/illustrations/electric_animals/morray2.jpg')
                },
                {
                    name: "elephant-fish",
                    url: require('../assets/illustrations/electric_animals/elephant-fish.jpg')
                },
                {
                    name: "jelly-fish",
                    url: require('../assets/illustrations/electric_animals/jelly-fish.jpg')
                },
                {
                    name: "hornet",
                    url: require('../assets/illustrations/electric_animals/hornet.jpg')
                },
                {
                    name: "gecko",
                    url: require('../assets/illustrations/electric_animals/gecko.jpg')
                }
            ]

        }
    }
}
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
@keyframes bounceRight {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(15px);
    }
}

.illustration-content{
    padding-left: 8%;
    padding-right: 8%;
    position: relative;
}
.illustration .selector{
    position: fixed;
    top: 60%;
    left: 25px;
    right: 25px;
    animation-name: example 2s infinite;
}
.illustration .arrowLeft,
.illustration .arrowRight{
    width: 40px;
    position: absolute;
}
.illustration .arrowLeft{
    top: 36%;
    right: 2%;
    animation: bounceLeft 1.5s infinite;
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}
.illustration .arrowRight{
    top: 36%;
    left: 2%;
    animation: bounceRight 1.5s infinite;
    -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-direction: alternate;
    animation-direction: alternate;
}
.illustration-content{
    margin-top: 40px;
}
.electric-animals{
    display: grid;
    grid-template-columns: 20% 20% 10% 25% 25%;
    grid-template-rows: 23% 27% 25%;
}
.electric-animals img{
    width: 100%;
}

.electric-animals .ornithorhynchus{
    grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 3;
  grid-row-end: 3;
}
.electric-animals .bee{
    grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 3;
  grid-row-end: 3;
}
.electric-animals .morray{
    grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .morray2{
    grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .hornet{
    grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 1;
}
.electric-animals .jelly-fish{
    grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 1;
  grid-row-end: 3;
}
.electric-animals .lizard{
    grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
}
.electric-animals .gecko{
    grid-column-start: 3;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
}
.electric-animals .elephant-fish{
    grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 2;
}
.electric-animals .leg{
    grid-column-start: 5;
  grid-column-end: 5;
  grid-row-start: 2;
  grid-row-end: 3;
}
.electric-animals h2{
    grid-column-start: 4;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-bottom: 0;
    margin-top: 50%;
}


</style>

