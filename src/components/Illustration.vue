<template>
<div class="illustration">
    <h1 class="illustration-main-title">{{ mainTitle }}</h1>
    <!-- <div class="selector">
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
    </div> -->
    <div class="illustration-content">
        <div :key="JSON.stringify(illustrationItem)" v-for="illustrationItem in illustrationItems" :class="illustrationItem.class" class="thumbnail">
          <img  :src="illustrationItem.image">
          <router-link :to="illustrationItem.url" class="illustration-title">
            <h2>{{ illustrationItem.name }}</h2>
          </router-link>
          <div class="arrowLeft">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 103 103">
                <g id="arrow-left" transform="translate(2 1.5)">
                    <path id="Layer_1" data-name="Layer 1" d="M70,2.5l7.5,7.6L37.6,50,77.5,89.9,70,97.5,22.5,50Z" />
                </g>
            </svg>
        </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            mainTitle: "Illustrations_",
            electricTitle: "electric-animals",
            illustrationItems: [
                {
                    name: "electric animals",
                    class: "electric-animals",
                    image: require("../assets/illustrations/electric_animals/electric_animals-thumbnail.png"),
                    url: "/illustration/electric-animals"
                },
                {
                    name: "la boom",
                    class: "la-boom",
                    image: require("../assets/illustrations/la_boom/la_boom-cover.png"),
                    url: "/illustration/electric-animals"
                },
                {
                    name: "le dragon",
                    class: "le-dragon",
                    image: require("../assets/illustrations/le_dragon/le_dragon.png"),
                    url: "/illustration/electric-animals"
                },
                {
                    name: "dessins de presse",
                    class: "press-drawings",
                    image: require("../assets/illustrations/press/press-thumbnail.png"),
                    url: "/illustration/electric-animals"
                },
                {
                    name: "caricature",
                    class: "caricature",
                    image: require("../assets/illustrations/caricature/caricature.png"),
                    url: "/illustration/electric-animals"
                },
                {
                    name: "wolf",
                    class: "wolf",
                    image: require("../assets/illustrations/wolf/wolf.png"),
                    url: "/illustration/electric-animals"
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
@keyframes bounceRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(15px);
  }
}
.illustration{
    display: flex;
    flex-direction: column;
}
.illustration h1.illustration-main-title{
    text-transform: uppercase;
    float: left;
    padding-left: 8%;
    font-size: 3rem;
    margin-top: 0;
}
.illustration-content {
  padding-left: 8%;
  padding-right: 8%;
  position: relative;
}
.illustration .selector {
  position: fixed;
  top: 50%;
  left: 25px;
  right: 25px;
}
.illustration .arrowLeft,
.illustration .arrowRight {
  width: 40px;
  position: absolute;
}
.illustration .arrowLeft {
  top: 36%;
  right: 0;
  animation: bounceLeft 1.5s infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
.illustration .arrowRight {
  top: 36%;
  left: -8%;
  animation: bounceRight 1.5s infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}
.illustration-content {
  margin-top: 40px;
}

.illustration-content img {
  height: 80vh;
  transition: all 0.7s ease-in-out;
}
.illustration-content .illustration-title{
    align-self: flex-end;
}

.illustration-content .thumbnail{
    margin-bottom: 10em;
    display: flex;
    position: relative;
}
/* @media screen and (max-width: 1185px){
    .illustration-content .electric-animals img{
        width: 95%;
        height: auto;
    }
} */
</style>

