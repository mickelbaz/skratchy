<template>
  <div class="moma-content">
    <img src="../../../assets/graphism/moma/logo.jpg" alt="MoMa Logo">
    <img src="../../../assets/graphism/moma/moma_bus-station.jpg" alt="MoMa Bus Station">
    <img class="poster" src="../../../assets/graphism/moma/poster.jpg" alt="MoMa Poster">
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
img {
  height: 100vh;
}
img.poster{
    height: 80vh;
    width: auto;
}
@media only screen and (max-width: 768px){
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
