<template>
  <div class="la-boom">
    <!-- <h1>{{ titlePage }}</h1> -->
    <img src="../../../assets/illustrations/le_dragon/dragon1.jpg" alt>
    <img src="../../../assets/illustrations/le_dragon/dragon2.jpg" alt>
    <img src="../../../assets/illustrations/le_dragon/dragon3.jpg" alt>
    <img src="../../../assets/illustrations/le_dragon/dragon4.jpg" alt>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "le dragon content!"
    };
  }
};
</script>

<style scoped>
img {
  height: 90vh;
}
@media only screen and (max-width: 414px){
  img {
    width: 100vw;
    height: auto;
  }
}
</style>
