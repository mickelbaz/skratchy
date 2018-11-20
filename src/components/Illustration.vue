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
            <div :key="JSON.stringify(illustrationCategory)" v-for="illustrationCategory in illustrationCategories" :class="illustrationCategory.class"
                class="thumbnail">
                <img :src="illustrationCategory.image">
                <div class="category-info">
                    <h1 class="category-type">{{ illustrationCategory.type }}</h1>
                    <router-link to="/illustration/electric-animals" class="category-title">
                        <h2>{{ illustrationCategory.name }}</h2>
                        <div class="more">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 40 40">
                                <g id="more" class="cls-1">
                                    <g id="more-icon" transform="translate(3 -5)">
                                        <g id="Group_1" data-name="Group 1" transform="translate(0.326 8)">
                                            <path id="Layer" data-name="Layer" class="cls-2" d="M20.509,8h8.8V20.509H41.82v8.8H29.311V41.82h-8.8V29.311H8v-8.8H20.509Z"
                                                transform="translate(-8 -8)" />
                                        </g>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </router-link>
                </div>

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
      illustrationCategories: [
        {
          name: "electric animals",
          type: "licence project",
          class: "electric-animals",
          image: require("../assets/illustrations/electric_animals/electric_animals-thumbnail.png"),
          url: "/illustration/electric-animals"
        },
        {
          name: "la boom",
          type: "vinyl",
          class: "la-boom",
          image: require("../assets/illustrations/la_boom/la_boom-cover.png"),
          url: "/illustration/la-boom"
        },
        {
          name: "le dragon",
          type: "book",
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

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.illustration {
  display: flex;
  flex-direction: column;
}

.illustration h1.illustration-main-title {
  text-transform: uppercase;
  text-align: left;
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

.illustration-content .category-type {
  text-align: left;
  font-weight: 300;
  text-transform: capitalize;
}

.illustration-content .category-title {
  display: flex;
}
.illustration-content .category-title h2{
    margin-top: 0;
}

.illustration-content .category-title .more {
  margin-left: 14px;
}

.illustration-content .category-title .more svg {
  width: 30px;
}

.illustration-content .category-title .more:hover svg {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.illustration-content .thumbnail {
  margin-bottom: 10em;
  display: flex;
  position: relative;
}

.category-info {
  align-self: flex-end;
}

/* @media screen and (max-width: 1185px){
    .illustration-content .electric-animals img{
        width: 95%;
        height: auto;
    }
} */
</style>