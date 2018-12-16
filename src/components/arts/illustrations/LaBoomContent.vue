<template>
  <div class="la-boom-content">
    <img src="../../../assets/illustrations/la_boom/la_boom-cover-full.jpg" alt="La Boom cover">
    <img src="../../../assets/illustrations/la_boom/la_boom-inside.jpg" class="inside" alt="La Boom inside">
    <img src="../../../assets/illustrations/la_boom/la_boom-back.jpg" alt="La Boom back">
  </div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "la boom content!"
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
img {
  height: 80vh;
  border: 1px solid rgb(0, 0, 0);
}
img.inside{
  width: 95%;
  height: auto;
}
@media only screen and (max-width: 768px){
  img, img.inside {
    width: 80vw;
    height: auto;
  }
}
</style>