<template>
<div class="animals-grid">
    <div class="animal-drawing-item"
        :key="JSON.stringify(drawingItem)"
        v-for="drawingItem in drawingItems"
        :class="drawingItem.class">
        <img :src="drawingItem.url" alt="">
    </div>
</div>   
</template>

<script>
export default {
    data() {
        return {
            drawingItems: [
                {
                    name: "Abeille",
                    class: "bee",
                    url: require('../../../assets/licence/drawings/bee.jpg')
                },
                {
                    name: "Poisson Éléphant",
                    class: "elephant-fish",
                    url: require('../../../assets/licence/drawings/elephant-fish.jpg')
                },
                {
                    name: "Patte de gecko",
                    class: "gecko-leg",
                    url: require('../../../assets/licence/drawings/gecko-leg.jpg')
                },
                {
                    name: "Frelon",
                    class: "hornet-a",
                    url: require('../../../assets/licence/drawings/hornet-A.jpg')
                },
                {
                    name: "Frelon",
                    class: "hornet-b",
                    url: require('../../../assets/licence/drawings/hornet-B.jpg')
                },
                {
                    name: "Lézard",
                    class: "lizard",
                    url: require('../../../assets/licence/drawings/lizard.jpg')
                },
                {
                    name: "Murène A",
                    class: "moray-a",
                    url: require('../../../assets/licence/drawings/moray-A.jpg')
                },
                {
                    name: "Murène B",
                    class: "moray-b",
                    url: require('../../../assets/licence/drawings/moray-B.jpg')
                },
                {
                    name: "Méduse",
                    class: "jelly-fish",
                    url: require('../../../assets/licence/drawings/jelly-fish.jpg')
                },
                {
                    name: "Torpille A",
                    class: "spearfish-a",
                    url: require('../../../assets/licence/drawings/spearfish-A.jpg')
                },
                {
                    name: "Torpille B",
                    class: "spearfish-b",
                    url: require('../../../assets/licence/drawings/spearfish-B.jpg')
                },
                {
                    name: "Ornuthorinque",
                    class: "platypus",
                    url: require('../../../assets/licence/drawings/platypus.jpg')
                }
            ]
        }
    }
}
</script>

<style scoped>
.animals-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 10% 17% 19% 10% 17% 16%;
    padding-left: 8%;
    padding-right: 8%;
}

.animals-grid img {
    width: 100%;
}
@media screen and (min-width: 768px) {
    .animals-grid .moray-a {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 1;
    }

    .animals-grid .gecko-leg {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .animals-grid .jelly-fish {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 4;
    }

    .animals-grid .lizard {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 2;
        grid-row-end: 2;
    }

    .animals-grid .bee {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 3;
        grid-row-end: 3;
    }

    .animals-grid .spearfish-a {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 4;
    }

    .animals-grid .hornet-b {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 4;
        grid-row-end: 4;
    }

    .animals-grid .moray-b {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 4;
        grid-row-end: 4;
    }

    .animals-grid .spearfish-b {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 5;
    }

    .animals-grid .hornet-a {
        grid-column-start: 3;
        grid-column-end: 3;
        grid-row-start: 5;
        grid-row-end: 6;
    }

    .animals-grid .platypus {
        grid-column-start: 2;
        grid-column-end: 4;
        grid-row-start: 6;
        grid-row-end: 6;
    }
    }

@media screen and (max-width: 768px) {
    .animals-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 13% 9% 9% 14% 6% 14% 8% 5%;
        padding: 0;
    }

    .animals-grid .elephant-fish {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 3;
        grid-row-end: 3;
    }

    .animals-grid .bee {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 1;
        grid-row-end: 2;
    }

    .animals-grid .gecko-leg {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 1;
        grid-row-end: 3;
    }

    .animals-grid .jelly-fish {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 4;
        grid-row-end: 7;
    }

    .animals-grid .lizard {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 4;
        grid-row-end: 4;
    }

    .animals-grid .spearfish-a {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 5;
        grid-row-end: 7;
    }

    .animals-grid .moray-b {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 7;
        grid-row-end: 7;
    }

    .animals-grid .hornet-a {
        grid-column-start: 1;
        grid-column-end: 1;
        grid-row-start: 8;
        grid-row-end: 8;
    }

    .animals-grid .platypus {
        grid-column-start: 1;
        grid-column-end: 3;
        grid-row-start: 10;
        grid-row-end: 11;
    }

    .animals-grid .spearfish-b {
        grid-column-start: 2;
        grid-column-end: 2;
        grid-row-start: 8;
        grid-row-end: 8;
    }
    }

</style>


