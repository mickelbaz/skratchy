<template>
  <div class="homepage-content">
    <h1 class="name-title">{{ name }}</h1>
    <div class="artsContainer">
      <div :key="JSON.stringify(homepageItem)"
          v-for="homepageItem in homepageItems"
          :class="homepageItem.name">
        <div class="margin-around">
          <router-link :to="homepageItem.url" class="artCard">
              <!-- <img :src="homepageItem.coverImage" :alt="homepageItem.name"> -->
              <h2>{{ homepageItem.name }}</h2>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Clara Delahaye",
      homepageItems: [
        {
          name: "illustrations",
          url: "/illustration",
          coverImage: require("../assets/illustrations.png")
        },
        {
          name: "arts graphiques",
          url: "/graphism",
          coverImage: require("../assets/graphism.png")
        },
        {
          name: "projet de licence",
          url: "/licence-project",
          coverImage: require("../assets/graphism.png")
        },
        {
          name: "photographies",
          url: "/photography",
          coverImage: require("../assets/photography.png")
        },
        {
          name: "typographies",
          url: "/photography",
          coverImage: require("../assets/photography.png")
        }
      ]
    };
  }
};
</script>

<style scoped>
h1.name-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 3rem;
  margin-top: 0;
}
.homepage-content {
  padding-top: 20px;
}
.artsContainer{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
}
.artCard{
  cursor: pointer;
  border-radius: 4px;
  overflow: hidden;
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  width: auto;
  height: auto;
  -webkit-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  position: relative;
}
.artCard:hover {
  -webkit-transform: scale(1.005);
  -ms-transform: scale(1.005);
  transform: scale(1.005);
  -webkit-box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}
.artsContainer img {
  height: 45vh;
  transition: all 0.7s ease-in-out;
}
.margin-around{
  margin: 30px;
}
@media screen and (max-width: 449px){
  .artsContainer img {
  width: 90vw;
  height: auto;
  transition: all 0.7s ease-in-out;
  }
  .margin-around{
    margin: 0 0 50px 0;
  }
}
</style>
