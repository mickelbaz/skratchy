<template>
  <div class="beer-content">
    <img src="../../../assets/graphism/beer/liberty-thumbnail.jpg" alt="Liberty Beer">
    <img src="../../../assets/graphism/beer/alone-beer.jpg" alt="Alone Liberty Beer">
    <img src="../../../assets/graphism/beer/stamp.jpg" alt="Liberty Stamp">
    <img class="beer-logo" src="../../../assets/graphism/beer/liberty-logo.jpg" alt="Liberty Logo">
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
img {
  height: 85vh;
  padding: 20px;
}
img.beer-logo{
    margin-top: 20px;
    height: 45vh;
}
@media only screen and (max-width: 768px){
  img {
    width: 100%;
    height: auto;
    padding: 0;
  }
  img.beer-logo{
    margin-top: 20px;
    height: auto;
    width: 50%;
}
}
</style>
