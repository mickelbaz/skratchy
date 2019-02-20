<template>
<div class="fanzine-content">
    <div class="fanzine-item"
    :key="JSON.stringify(fanzineItem)"
    v-for="fanzineItem in fanzineItems"
    :class="fanzineItem.class">
    <img :src="fanzineItem.url"
    :alt="fanzineItem.name">
    </div>
</div>   
</template>

<script>
export default {
    data(){
        return{
            fanzineItems: [
        {
          name: "Fanzine Murène",
          class: "fanzine-murene",
          url: require('../../../assets/licence/fanzine/fanzine-murene.jpg')
        },
        {
          name: "Fanzine Gecko",
          class: "fanzine-gecko",
          url: require('../../../assets/licence/fanzine/fanzine-gecko.jpg')
        },
        {
          name: "Fanzine Méduse",
          class: "fanzine-meduse",
          url: require('../../../assets/licence/fanzine/fanzine-meduse.jpg')
        },
        {
          name: "Fanzine Frelon",
          class: "fanzine-frelon",
          url: require('../../../assets/licence/fanzine/fanzine-frelon.jpg')
        },
        {
          name: "Fanzine Poisson",
          class: "fanzine-poisson",
          url: require('../../../assets/licence/fanzine/fanzine-poisson.jpg')
        }
      ],
        }
    }
}
</script>

<style scoped>
.fanzine-content {
    display: flex;
    flex-direction: column;
}

.fanzine-item img {
    width: 100%;
}

.fanzine-murene {
    padding-top: 70px;
}

.fanzine-gecko,
.fanzine-meduse,
.fanzine-frelon,
.fanzine-poisson {
    padding-left: 8%;
    padding-right: 8%;
}

@media screen and (max-width: 768px) {

    .fanzine-gecko,
    .fanzine-meduse,
    .fanzine-frelon,
    .fanzine-poisson {
        padding-left: 0;
        padding-right: 0;
    }
}
</style>



