<template>
  <div class="le-dragon-content">
    <img src="../../../assets/illustrations/le_dragon/dragon1.jpg" alt="Le Dragon first">
    <img src="../../../assets/illustrations/le_dragon/dragon2.jpg" alt="Le Dragon second">
    <img src="../../../assets/illustrations/le_dragon/dragon3.jpg" alt="Le Dragon third">
    <img src="../../../assets/illustrations/le_dragon/dragon4.jpg" alt="Le Dragon fourth">
    <img src="../../../assets/illustrations/le_dragon/lava.jpg" alt="Le Dragon lava">
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
@media only screen and (max-width: 768px){
  img {
    width: 100vw;
    height: auto;
  }
}
</style>
