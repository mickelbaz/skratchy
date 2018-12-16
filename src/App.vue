<template>
  <div id="app">
    <toolbar/>
    <transition name="slide-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar.vue";

export default {
  name: "app",
  components: {
    Toolbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Work+Sans:300,400,700");
@import "(..)/node_modules/sal.js/dist/sal.css";
body{
  height: 100%;
  width: 100%;
  margin: 0;
}
#app {
  font-family: "Work Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 112px;
  margin-right: auto;
  margin-left: auto;
}

a {
  color: black;
}

button {
  color: black;
  font-family: "Work Sans", sans-serif;
}
.no-scroll {
  overflow-y: hidden;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(-50px);
  opacity: 0;
}
</style>
