<template>
  <!-- <div data-sal="slide-up" data-sal-delay="100" data-sal-duration="800" data-sal-easing="ease-out-bounce"
            :class="categoryItem.class" class="category">
            <img :src="categoryItem.image">
            <div class="category-info">
                <h1 class="category-type">{{ categoryItem.type }}</h1>
                <router-link :to="categoryItem.url" class="category-title">
                    <h2>{{ categoryItem.name }}</h2>
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
  </div>-->
  <div class="galleryContainer">
    <div :key="JSON.stringify(categoryItem)" v-for="categoryItem in artCategories">
      <div style="margin: 15px;">
        <div
          class="galleryCard"
          id="show-modal"
          @click="showModal(JSON.stringify(categoryItem)); selectComponent(categoryItem.componentName); mounted()"
        >
          <img :src="categoryItem.image" alt>
          <div class="dark-overlay">
            <h1 class="hover-name">{{categoryItem.name}}</h1>
          </div>
        </div>
      </div>

      <work-details-modal
        :id="'modal'+ JSON.stringify(categoryItem)"
        :category-item-class="categoryItem.class"
        v-show="openedModal === JSON.stringify(categoryItem)"
        @close="openedModal = null; destroyed()"
      >
        <h3 slot="head-title" class="work-type">{{ categoryItem.type }}</h3>
        <h1 slot="head-title" class="work-name">{{ categoryItem.name }}</h1>

        <component :is="selectedComponent"></component>
      </work-details-modal>
    </div>
  </div>
</template>

<script>
import WorkDetailsModal from "./WorkDetailsModal.vue";
import ElectricAnimalsContent from "./arts/illustrations/ElectricAnimalsContent.vue";
import LaBoomContent from "./arts/illustrations/LaBoomContent.vue";
import LeDragonContent from "./arts/illustrations/LeDragonContent.vue";
import WadContent from "./arts/graphism/WadContent.vue";

export default {
  props: ["artCategories"],
  // data(){
  //     return{
  //         currStep: null
  //     };
  // },
  // mounted() {
  //     sal();
  // }
  components: {
    WorkDetailsModal,
    electricAnimalsContent: ElectricAnimalsContent,
    laBoomContent: LaBoomContent,
    leDragonContent: LeDragonContent,
    wadContent: WadContent
  },
  data() {
    return {
      openedModal: null,
      selectedComponent: "electricAnimalsContent"
    };
  },
  methods: {
    showModal(id) {
      this.openedModal = id;
    },
    selectComponent(component) {
      this.selectedComponent = component;
    },
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === "addClass") {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    mounted() {
      this.toggleBodyClass("addClass", "no-scroll");
    },
    destroyed() {
      this.toggleBodyClass("removeClass", "no-scroll");
    }
  }
};
</script>

<style scoped>
/* @import '../assets/css/sal.css'; */

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
.dark-overlay h1.hover-name {
  color: white;
  align-self: center;
  margin: 0 10px;
}
.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  content: "";
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  opacity: 0;
  transition: all 0.2s;
  display: flex;
  justify-content: center;
}
h3.work-type {
  font-weight: 300;
}
.galleryContainer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: stretch;
}
.galleryCard {
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  width: auto;
  height: auto;
  -webkit-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  position: relative;
}
.galleryCard:hover {
  -webkit-transform: scale(1.005);
  -ms-transform: scale(1.005);
  transform: scale(1.005);
  -webkit-box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}
.galleryCard:hover .dark-overlay {
  opacity: 1;
  transition: all 0.2s;
}
.galleryContainer img {
  height: 60vh;
  transition: all 0.7s ease-in-out;
}
.category {
  margin-bottom: 10em;
  display: flex;
  position: relative;
}

.category img {
  height: 80vh;
  transition: all 0.7s ease-in-out;
}

.category .category-info {
  align-self: flex-end;
}

.category .category-type {
  text-align: left;
  font-weight: 300;
  text-transform: capitalize;
}

.category .category-title {
  display: flex;
}

.category .category-title h2 {
  margin-top: 0;
}

.category .category-title .more {
  margin-left: 14px;
}

.category .category-info .more svg {
  width: 30px;
}

.category .category-title .more:hover svg {
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}

.category .arrowLeft,
.category .arrowRight {
  width: 40px;
  position: absolute;
}

.category .arrowLeft {
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

.category .arrowRight {
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
.modal-header h1.work-name {
  margin-top: 0;
  font-size: 3em;
}

.modal-header h3.work-type {
  font-weight: 300;
  text-transform: uppercase;
}
</style>

