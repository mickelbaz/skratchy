<template>
<div class="illustration">
    <div class="illustration-content">
        <img :key="JSON.stringify(illustration)" v-for="illustration in illustrations" :src="illustration.url">
    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return {
            illustrations: [
                {
                    name: "lizard",
                    url: require('../assets/illustrations/electric_animals/lizard.jpg')
                },
                {
                    name: "ornithorhynchus",
                    url: require('../assets/illustrations/electric_animals/ornithorhynchus.jpg')
                },
                {
                    name: "bee",
                    url: require('../assets/illustrations/electric_animals/bee.jpg')
                },
                {
                    name: "leg",
                    url: require('../assets/illustrations/electric_animals/leg.jpg')
                },
                {
                    name: "morray",
                    url: require('../assets/illustrations/electric_animals/morray.jpg')
                },
                {
                    name: "elephant-fish",
                    url: require('../assets/illustrations/electric_animals/elephant-fish.jpg')
                },
                {
                    name: "jelly-fish",
                    url: require('../assets/illustrations/electric_animals/jelly-fish.jpg')
                },
                {
                    name: "hornet",
                    url: require('../assets/illustrations/electric_animals/hornet.jpg')
                },
                {
                    name: "gecko",
                    url: require('../assets/illustrations/electric_animals/gecko.jpg')
                }
            ]

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

