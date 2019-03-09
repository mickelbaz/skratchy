<template>
  <div class="pepito-content">
    <img class="pepito-posters" src="../../../assets/graphism/pepito/pepito-posters.jpg" alt="Pepito Posters">
    <img class="pepito-poster" src="../../../assets/graphism/pepito/pepito-poster-A.jpg" alt="Pepito Poster A">
    <img class="pepito-poster" src="../../../assets/graphism/pepito/pepito-poster-B.jpg" alt="Pepito Poster B">
    <img class="pepito-poster" src="../../../assets/graphism/pepito/pepito-poster-C.jpg" alt="Pepito Poster C">
    <img class="pepito-paper" src="../../../assets/graphism/pepito/pepito-paper-gold.jpg" alt="Pepito Paper Gold">    
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
img {
  width: 100%;
  height: 100%;
  margin-bottom: 50px;
}
img.pepito-poster{
    height: 90vh;
    width: auto;
    padding: 0 70px;
}
@media only screen and (max-width: 768px){
  img {
    width: 100%;
    height: 100%;
  }
  img.pepito-poster{
      width: 90%;
    height: auto;
    padding: 0 10px;
}
}
</style>
