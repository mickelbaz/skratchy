<template>
  <div class="galleryContainer">
    <div :key="JSON.stringify(categoryItem)" v-for="categoryItem in artCategories">
      <div class="margin-around">
        <div class="galleryCard" id="show-modal" @click="handleClick(categoryItem)">
          <img :src="categoryItem.image" alt>
          <div class="dark-overlay">
            <h2 class="hover-name">{{categoryItem.name}}</h2>
          </div>
        </div>
      </div>
      <work-details-modal
        :id="'modal'+ JSON.stringify(categoryItem)"
        :category-item-class="categoryItem.class"
        v-if="openedModal === JSON.stringify(categoryItem)"
        @close="handleClose()">
        <h3 slot="head-title" class="work-type">{{ categoryItem.type }}</h3>
        <h1 slot="head-title" class="work-name">{{ categoryItem.name }}</h1>
        <component :is="selectedComponent"></component>
      </work-details-modal>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import WorkDetailsModal from "./WorkDetailsModal.vue";
import ElectricAnimalsContent from "./arts/illustrations/ElectricAnimalsContent.vue";
import LaBoomContent from "./arts/illustrations/LaBoomContent.vue";
import LeDragonContent from "./arts/illustrations/LeDragonContent.vue";
import PressContent from "./arts/illustrations/PressContent.vue";
import CaricatureContent from "./arts/illustrations/CaricatureContent.vue";
import SketchesContent from "./arts/illustrations/SketchesContent.vue";
import ObservationContent from "./arts/illustrations/ObservationContent.vue";
import LeLoupContent from "./arts/illustrations/LeLoupContent.vue";
import SeahorseContent from "./arts/illustrations/SeahorseContent.vue";
import TherapieContent from "./arts/illustrations/TherapieContent.vue";
import WadContent from "./arts/graphism/WadContent.vue";
import RestaurantContent from "./arts/graphism/RestaurantContent.vue";
import BenettonContent from "./arts/graphism/BenettonContent.vue";
import MomaContent from "./arts/graphism/MomaContent.vue";
import BeerContent from "./arts/graphism/BeerContent.vue";
import KnowledgeContent from "./arts/graphism/KnowledgeContent.vue";
import PortraitsContent from "./arts/photographies/PortraitsContent.vue";
import MongoliaContent from "./arts/photographies/MongoliaContent.vue";
import DanceContent from "./arts/photographies/DanceContent.vue";
import NyContent from "./arts/photographies/NyContent.vue";

export default {
  props: {
    artCategories: {
      type: Array
    }
  },
  components: {
    WorkDetailsModal,
    electricAnimalsContent: ElectricAnimalsContent,
    laBoomContent: LaBoomContent,
    leDragonContent: LeDragonContent,
    pressContent: PressContent,
    caricatureContent: CaricatureContent,
    sketchesContent: SketchesContent,
    observationContent: ObservationContent,
    leLoupContent: LeLoupContent,
    seahorseContent: SeahorseContent,
    therapieContent: TherapieContent,
    wadContent: WadContent,
    restaurantContent: RestaurantContent,
    benettonContent: BenettonContent,
    momaContent: MomaContent,
    beerContent: BeerContent,
    knowledgeContent: KnowledgeContent,
    portraitsContent: PortraitsContent,
    mongoliaContent: MongoliaContent,
    danceContent: DanceContent,
    nyContent: NyContent
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

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    handleClick(categoryItem) {
      this.showModal(JSON.stringify(categoryItem));
      this.selectComponent(categoryItem.componentName);
      this.toggleBodyClass('addClass', 'no-scroll');
    },
    handleClose() {
      this.openedModal = null;
      this.toggleBodyClass('removeClass', 'no-scroll');
    },
    mounted() {
      this.toggleBodyClass('addClass', 'no-scroll');
    },
    destroyed() {
      this.toggleBodyClass('removeClass', 'no-scroll');
    }
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
.dark-overlay h2.hover-name {
  color: white;
  align-self: center;
  margin: 0 10px;
  font-size: 20px;
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
  height: 230px;
  transition: all 0.7s ease-in-out;
}
.margin-around{
  margin: 30px;
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
  font-size: 25px;
  text-transform: capitalize;
}

.modal-header h3.work-type {
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0;
  letter-spacing: .11em;
  font-size: 15px;
}
.la-boom .modal-header h1.work-name {
  color: rgb(251, 76, 174);
}
.la-boom .modal-header h3.work-type {
  color: rgb(94, 122, 182);
}
.le-loup .modal-header h1.work-name {
  color: rgb(243, 161, 0)
}
.wad-mag .modal-header h1.work-name {
  color: rgb(0, 0, 0);
}
.wad-mag .modal-header h3.work-type {
  color: rgb(51, 51, 51);
}
.restaurant .modal-header h1.work-name {
  color: rgb(37, 43, 130);
}
.restaurant .modal-header h3.work-type {
  color: rgb(51, 51, 51);
}
.moma .modal-header h1.work-name {
  color: black;
}
.moma .modal-header h3.work-type {
  color: black;
}
.liberty-bell .modal-header h1.work-name {
  color: rgb(248, 191, 119);
}
.liberty-bell .modal-header h3.work-type {
  color: black;
}

@media screen and (max-width: 768px){
  .galleryContainer img{
    height: 260px;
  } 
  .margin-around{
    margin: 40px 0;
  }
}
@media screen and (max-width: 414px){
  .galleryContainer img{
    height: 220px;
  }
}
</style>

