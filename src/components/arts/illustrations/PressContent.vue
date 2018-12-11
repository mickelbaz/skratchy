<template>
  <div class="press">
      <div class="cover-paper">
        <img src="../../../assets/illustrations/press/press-thumbnail.jpg" alt>
      </div>
    <div class="inside-paper">
        <img src="../../../assets/illustrations/press/paper1.jpg" alt>
        <img src="../../../assets/illustrations/press/paper2.jpg" alt>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

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
  height: 100vh;
}
</style>