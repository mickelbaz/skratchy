<template>
<div :class="artName" class="art-page">
    <h1 :class="[`${artName}-main-title`]" class="main-title">{{ mainTitle }}</h1>
    <div :class="[`${artName}-content`]" class="art-content">
        <categories :art-categories="artCategories"></categories>
    </div>

</div>
</template>

<script>
import Categories from './Categories.vue';

export default {
    props: {
        artName: {
            type: String
        },
        mainTitle: {
            type: String
        },
        artCategories: {
            type: Array
        }
    },
    components: {
        Categories
    },
    data() {
        return{
            showModal: false
        };
    }
}
</script>

<style scoped>
.art-page {
    display: flex;
    flex-direction: column;
    padding-left: 8%;
    padding-right: 8%;
}

.art-page h1.main-title {
    text-transform: capitalize;
    text-align: left;
    padding-left: 4%;
    font-size: 20px;
    margin-top: 0;
    transition: all 0.2s;
}

.art-content {
    position: relative;
}

.art-page .selector {
    position: fixed;
    top: 50%;
    left: 25px;
    right: 25px;
}

@media screen and (max-width: 768px){
  .art-page h1.main-title{
    text-align: center;
    padding: 0;
    transition: all 0.2s;
  }
  .art-page{
    padding-top: 2em;
  }
}
</style>

