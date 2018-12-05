<template>
<div class="la-boom">
    <h1>{{ titlePage }}</h1>
</div>
</template>

<script>
export default {
  data() {
    return {
      titlePage: "la boom content!",
      goBack: {
        name: "go back",
        img: require("../../../assets/icons/back.svg")
      }
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
.back-button {
  position: fixed;
  top: 105px;
  left: 55px;
}
.back-button img {
  animation-name: example 2s infinite;
  animation: bounceLeft 1.5s infinite;
  -webkit-animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  animation-timing-function: cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
  width: 50px;
  height: 50px;
}
</style>