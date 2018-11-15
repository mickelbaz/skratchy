<template>
<div class="illustration">
    <div class="illustration-content">
        <img src="../assets/illustrations/electric_animals/lizard.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/ornithorhynchus.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/bee.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/leg.jpg" alt="" class="two-lines">
        <img src="../assets/illustrations/electric_animals/morray.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/elephant-fish.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/jelly-fish.jpg" alt="" class="two-lines">
        <img src="../assets/illustrations/electric_animals/hornet.jpg" alt="">
        <img src="../assets/illustrations/electric_animals/gecko.jpg" alt="">
    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return {
            illustrations: {
                name: "lizard",
                url: '../assets/illustrations/electric_animals/lizard.jpg'
            }
        }
    }
}
</script>

<style scoped>
.illustration-content{
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: 25% 25% 25% 25% 25%;
}
.illustration-content img{
    width: 100%;
}
.illustration-content img.two-lines{
    grid-row-end: 2;
}
</style>

