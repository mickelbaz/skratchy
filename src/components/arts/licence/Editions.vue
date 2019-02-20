<template>
<div class="edition-content">
    <categories :art-categories="editionsCategories"></categories>
</div>   
</template>

<script>
import Categories from '../../Categories.vue';

export default {
    data() {
        return {
            editionsCategories: [{
                    name: "la méduse",
                    class: "la-meduse",
                    image: require("../../../assets/licence/editions/la_meduse/la-meduse_thumbnail.jpg"),
                    componentName: "laMeduseContent"
                },
                {
                    name: "le gecko",
                    class: "le-gecko",
                    image: require("../../../assets/licence/editions/le_gecko/le-gecko_thumbnail.jpg"),
                    componentName: "leGeckoContent"
                },
                {
                    name: "le frelon",
                    class: "le-frelon",
                    image: require("../../../assets/licence/editions/le_frelon/le-frelon_thumbnail.jpg"),
                    componentName: "leFrelonContent"
                },
            ]
        }
    },
    components: {
        Categories
    }
}
</script>

<style scoped>

</style>


