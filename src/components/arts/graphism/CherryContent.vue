<template>
  <div class="cherry-content">
    <img class="cherry-logo" src="../../../assets/graphism/cherry/cherry-logo.jpg" alt="Cherry Logo">
    <img class="square-img" src="../../../assets/graphism/cherry/cherry-posterA.jpg" alt="Cherry Poster A">
        <img src="../../../assets/graphism/cherry/cherry-posterB.jpg" alt="Cherry Poster B">
        <img src="../../../assets/graphism/cherry/cherry-posterC.jpg" alt="Cherry Poster C">
        <img src="../../../assets/graphism/cherry/cherry-agency.jpg" alt="Cherry Agency A">
        <img src="../../../assets/graphism/cherry/cherry-agencyB.jpg" alt="Cherry Agency B">
        <img src="../../../assets/graphism/cherry/cherry-tshirt.jpg" alt="Cherry T-shirt">
  </div>
</template>

<script>
export default {
};
</script>

<style scoped>
img.square-img {
    width: 50%;
    height: 100%;
    margin-bottom: 50px;
    padding: 10px;
}
img {
    width: 100%;
    height: 100%;
    margin-bottom: 50px;
    padding: 10px;
}
img.cherry-logo{
    width: 50%;
}
@media only screen and (max-width: 768px){
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
