<template>
  <div class="homepage-content">
    <h1 class="name-title">{{ name }}</h1>
    <div class="items">
      <ul>
        <li
          :key="JSON.stringify(homepageItem)"
          v-for="homepageItem in homepageItems"
          :class="homepageItem.name"
          class="art"
        >
          <router-link :to="homepageItem.url">
            <div class="thumbnail">
              <img :src="homepageItem.coverImage" :alt="homepageItem.name">
            </div>
          </router-link>
        </li>
      </ul>
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
          name: "illustration",
          url: "/illustration",
          coverImage: require("../assets/illustrations.png")
        },
        {
          name: "graphism",
          url: "/graphism",
          coverImage: require("../assets/graphism.png")
        },
        {
          name: "photography",
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
  font-size: 54px;
  margin-top: 0;
}
.homepage-content {
  padding-top: 20px;
}
img {
  width: 335px;
}
.art {
  -webkit-box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
  -webkit-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
}
.art:hover {
  -webkit-transform: scale(1.005);
  -ms-transform: scale(1.005);
  transform: scale(1.005);
  -webkit-box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.25);
}
.items {
  display: flex;
  justify-content: space-around;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.items ul {
  display: flex;
  justify-content: space-around;
  padding: 0;
  width: 100%;
  list-style-type: none;
  margin: 0 35px 0 35px;
}

.items a {
  height: 100%;
  position: relative;
}
</style>
