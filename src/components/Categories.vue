<template>
  <div class="galleryContainer">
    <div :key="JSON.stringify(categoryItem)" v-for="categoryItem in artCategories">
      <div style="margin: 30px;">
        <div
          class="galleryCard"
          id="show-modal"
          @click="showModal(JSON.stringify(categoryItem)); selectComponent(categoryItem.componentName); mounted()"
        >
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
        @close="openedModal = null; destroyed()"
      >
        <h2 slot="head-title" class="work-type">{{ categoryItem.type }}</h2>
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
import CaricatureContent from "./arts/illustrations/CaricatureContent.vue";
import ObservationContent from "./arts/illustrations/ObservationContent.vue";
import LeLoup from "./arts/illustrations/LeLoupContent.vue";
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
    caricatureContent: CaricatureContent,
    observationContent: ObservationContent,
    leLoup: LeLoup,
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
.dark-overlay h2.hover-name {
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

.modal-header h2.work-type {
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 0;
}
.la-boom .modal-header h1.work-name {
  color: rgb(251, 76, 174);
}
.la-boom .modal-header h2.work-type {
  color: rgb(94, 122, 182);
}
.le-loup .modal-header h1.work-name {
  color: rgb(243, 161, 0)
}
</style>

