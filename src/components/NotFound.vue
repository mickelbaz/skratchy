<template>
<div class="not-found-content">
    <div class="dragon-search">
        
        <!-- <div class="image">
<img src="../assets/illustrations/le_dragon/dragon4.jpg" alt="">
        </div> -->
    </div>
    <div class="not-found-number">
        <div class="not-found-left">
            <h1>404</h1>
        </div>
        <div class="image">
<img src="../assets/illustrations/le_dragon/dragon4.jpg" alt="">
        </div>
        <div class="not-found-right">
            <h1>404</h1>
        </div>
    </div>
    <div class="not-found-message">
        <h1>We're sorry, the dragons can't find you're page...</h1>
    </div>

</div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  }
};
</script>

<style scoped>
.dragon-search{
    position: absolute;
    margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
top: 10%;
}
.dragon-search .image{
    position: relative;
    height: 70vh;
}
.dragon-search .image img{
    height: 100%;
}
.dragon-search .not-found-message{
    position: absolute;
    bottom: 0;
}
.not-found-number{
  display: flex;
  justify-content: space-between; 
}
.not-found-number h1{
  font-size: 10em; 
}
.not-found-number .not-found-left{
  transform: rotate(-90deg) ;
}
.not-found-number .not-found-right{
  transform: rotate(90deg) ;
}
</style>
