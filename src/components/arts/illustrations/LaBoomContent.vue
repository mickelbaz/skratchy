<template>
  <div class="la-boom">
    <!-- <h1>{{ titlePage }}</h1> -->
    <img src="../../../assets/illustrations/la_boom/la_boom-cover.jpg" alt>
    <img src="../../../assets/illustrations/la_boom/la_boom-inside.jpg" class="inside" alt>
    <img src="../../../assets/illustrations/la_boom/la_boom-back.jpg" alt>
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
  width: 75vw;
  height: auto;
}
@media only screen and (max-width: 768px){
  img, img.inside {
    width: 80vw;
    height: auto;
  }
}
</style>