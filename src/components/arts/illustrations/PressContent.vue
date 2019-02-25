<template>
  <div class="press-content">
      <div class="cover-paper">
        <img src="../../../assets/illustrations/press/press-thumbnail.jpg" alt="Paper cover">
      </div>
    <div class="inside-paper">
        <img src="../../../assets/illustrations/press/paper1.jpg" alt="Paper first page">
        <img src="../../../assets/illustrations/press/paper2.jpg" alt="Paper second page">
    </div>
  </div>
</template>

<style scoped>
.press{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.cover-paper{
    display: flex;
    justify-content: center;
}
.cover-paper img{
    height: 90vh;
}
.inside-paper img {
  width: 50%;
}

@media screen and (max-width: 768px){
  .cover-paper img{
    height: 100%;
    width: 100%;
}
}
</style>