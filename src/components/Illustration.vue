<template>
<div class="illustration">
    <h1>illustation</h1>
    <div class="illustration-content">
        <img :src="illustrations.url" alt="">
    </div>
</div>
    
</template>

<script>
export default {
    data() {
        return {
            illustrations: {
                name: "lizard",
                url: '../assets/illustrations/lizard.jpg'
            }
        }
    }
}
</script>

<style scoped>
.illustration-content{
    display: grid;
    grid-template-columns: 25vw 25vw 25vw 25vw;
    grid-template-rows: 25vw 25vw 25vw 25vw;
}
</style>

