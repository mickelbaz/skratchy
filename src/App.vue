<template>
  <div id="app">
    <toolbar/>
    <transition
        name="fade"
        enter-active-class="animated tada"
        leave-active-class="animated bounceOutRight"
        mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'

export default {
  name: 'app',
  components: {
    Toolbar
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans:300,400,700');
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  margin-top: 112px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
}

a{
  color: black;
}

button{
  color: black;
  font-family: 'Work Sans', sans-serif;
}
.no-scroll{
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
  opacity: 0
}

</style>
