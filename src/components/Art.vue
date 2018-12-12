<template>
<div :class="artName" class="art-page">
    <h1 :class="[artName + ' main-title']" class="main-title">{{ mainTitle }}</h1>
    <div :class="[artName + ' -content']" class="art-content">
        <categories :art-categories="artCategories"></categories>
    </div>

</div>
</template>

<script>
import Categories from './Categories.vue';

export default {
    props: {
        'artName': {
            type: String
        },
        'mainTitle': {
            type: String
        },
        'artCategories': {
            type: String
        }
    },
    components: {
        Categories
    },
    data(){
        return{
            showModal: false
        };
    }
}
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

@keyframes bounceRight {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(15px);
    }
}

@-moz-keyframes spin {
    100% {
        -moz-transform: rotate(360deg);
    }
}

@-webkit-keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
    }
}

@keyframes spin {
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}

.art-page {
    display: flex;
    flex-direction: column;
}

.art-page h1.main-title {
    text-transform: uppercase;
    text-align: left;
    padding-left: 8%;
    font-size: 3rem;
    margin-top: 0;
    transition: all 0.2s;
}

.art-content {
    padding-left: 8%;
    padding-right: 8%;
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
    font-size: 2rem;
    padding: 0;
    transition: all 0.2s;
  }
  .art-page{
    padding-top: 2em;
  }
}

</style>

