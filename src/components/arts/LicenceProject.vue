<template>
  <div class="licence-content">
    <div class="licence-head">
      <h1 class="main-title">{{ mainTitle }}</h1>  
    <div class="licence-category-buttons">
      <div :class="categoryButton.class"
          :key="JSON.stringify(categoryButton)"
          v-for="categoryButton in categoryButtons">
        <button @click="setActive(categoryButton.id)"
                :class="{ active : activeItem == categoryButton.id }">
          {{ categoryButton.name }}
        </button>
      </div>
    </div>
    </div>
    <fanzine v-show="isActive('fanzine')"></fanzine>
    <drawings v-show="isActive('drawings')"></drawings>
    <editions v-show="isActive('editions')"></editions>
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
      mainTitle: "Licence Project",
      categoryButtons: [
        {
          id: "editions",
          name: "Licence_editions",
          class: "licence-edition-button"
        },
        {
          id: "drawings",
          name: "Licence_drawings",
          class: "licence-drawings-button"
        },
        {
          id: "fanzine",
          name: "Licence_fanzine",
          class: "licence-fanzine-button"
        }
      ],
      activeItem: 'drawings'
    };
  },
  components: {
    Drawings,
    Fanzine,
    Editions
  },
  methods: {
    isActive(menuItem) {
      return this.activeItem === menuItem
    },
    setActive(menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style scoped>

.licence-content {
  display: flex;
  flex-direction: column;
}

.licence-head{
  padding-left: 8%;
  padding-right: 8%;
}

h1.main-title {
    text-transform: capitalize;
    text-align: left;
    padding-left: 4%;
    font-size: 20px;
    margin-top: 0;
    transition: all 0.2s;
}

.licence-category-buttons{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 10px 15%;
}

.licence-category-buttons button{
  background-color: transparent;
  border: none;
  color: black;
  padding: 7px 23px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  cursor: pointer;
  position: relative;
  transition: all .2s;
}

.licence-category-buttons button:focus{
  outline: none;
}

button:before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: rgb(43, 0, 255);
  visibility: hidden;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: all 0.3s ease-in-out 0s;
  transition: all 0.3s ease-in-out 0s;
}
button:hover:before {
  visibility: visible;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}
.licence-head button.active{
    background-color: rgb(43, 0, 255);
    color: white;
    border-radius: 26px;
    margin-bottom: 20px;
}
.licence-head button.active:before{
    content: none;
}
@media screen and (max-width: 768px) {
  .licence-head button:before{
    content: none;
  }
  .licence-head button{
    border: 2px solid rgb(43, 0, 255);
    border-radius: 26px;
    margin-bottom: 20px;
  }
  .licence-content{
    padding-top: 2em;
  }
  .licence-category-buttons{
    flex-direction: column;
  }
  h1.main-title{
    text-align: center;
    font-size: 20px;
    padding: 0;
    -webkit-transition: all 0.2s;
    transition: all 0.2s;
  }
}
</style>
