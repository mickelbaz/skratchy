<template>
<div class="homepage-content">
    <h1 class="name-title">{{ name }}</h1>
    <div class="items">
        <ul>
            <li :key="JSON.stringify(homepageItem)" v-for="homepageItem in homepageItems" :class="homepageItem.name">
                       <router-link :to="homepageItem.url">
                           <div class="thumbnail">
                                <h2>{{ homepageItem.name }}</h2>
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
          url: "/illustration"
        },
        {
          name: "graphism",
          url: "/graphism"
        },
        {
          name: "photography",
          url: "/photography"
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

.items {
  display: flex;
  justify-content: space-around;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.items .illustration {
  height: 20vw;
  transition: all 0.4s ease-in-out;
}

.items .illustration .thumbnail {
  background-image: url("../assets/illustrations/dragon-high.jpg");
  background-size: 101%;
  background-position: 0px -11px;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transition: all 0.4s ease-in-out;
}
.items .illustration h2 {
  position: absolute;
  top: 23%;
  left: 25%;
}

.items .illustration:hover .thumbnail,
.items .illustration:focus .thumbnail {
  background-size: 120%;
}

.items ul {
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100%;
}

.items li {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 30%;
  border: 1px solid black;
  margin-left: 10px;
  margin-right: 10px;
}

.items a {
  height: 100%;
  position: relative;
}
</style>
