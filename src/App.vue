<template>
  <div id="app">
    <toolbar/>
    <router-view></router-view>
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
#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 112px;
  padding-right: 25px;
  padding-left: 25px;
  margin-right: auto;
  margin-left: auto;
}

a{
  color: #2c3e50;
}

button{
  color: #2c3e50;
  font-family: 'Work Sans', sans-serif;
}

@import url('https://fonts.googleapis.com/css?family=Work+Sans');
</style>
