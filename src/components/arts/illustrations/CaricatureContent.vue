<template>
  <div class="caricature">
    <img src="../../../assets/illustrations/caricature/caricature.jpg" alt>
  </div>
</template>

<script>
export default {
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
</style>