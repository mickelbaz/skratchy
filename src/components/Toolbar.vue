<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="">
      </router-link>
    </div>
    <div v-show="!aboutActive" class="about-button">
      <button @click="handler(aboutActive = !aboutActive, mounted())">about</button>
    </div>
    <transition name="fade">
      <div v-show="aboutActive" class="about">
        <div v-show="aboutActive" class="close-button">
          <button @click="handler(aboutActive = !aboutActive, destroyed())">
            <img src="../assets/icons/close.svg" alt="">
          </button>
        </div>
        <h1>{{ aboutTitle }}</h1>
        <h1 class="name-title">{{ name }}</h1>
        <div class="info">
          <div class="column"></div>
          <div class="column">
            <a class="send-email" href="mailto:webmaster@example.com">
              {{ emailTitle }}
            </a>
          </div>
        </div>

        <div class="social-networks">
          <ul class="social-networks-list">
            <li :key="JSON.stringify(socialNetwork)" v-for="socialNetwork in socialNetworks">
              <a :href="socialNetwork.url">
                <img :src="socialNetwork.image" :alt="socialNetwork.name">
              </a>
            </li>
          </ul>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "Clara Delahaye",
      aboutActive: false,
      aboutTitle: "about",
      emailTitle: "email me!",
      socialNetworks: [{
          name: "instagram",
          image: require("../assets/icons/instagram-logo.png"),
          url: "https://www.instagram.com/___skratchy___/"
        },
        {
          name: "linkedin",
          image: require("../assets/icons/linked-in-logo.png"),
          url: "https://www.instagram.com/___skratchy___/"
        }
      ]
    };
  },
  methods: {
    toggleBodyClass(addRemoveClass, className) {
      const el = document.body;

      if (addRemoveClass === 'addClass') {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    },
    mounted() {
      this.toggleBodyClass('addClass', 'no-scroll');
    },
    destroyed() {
      this.toggleBodyClass('removeClass', 'no-scroll');
    }
  }
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  padding: 30px 50px;
  background-color: transparent;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
}

.navbar img {
  width: 40px;
}

.navbar ul {
  list-style-type: none;
  display: inline;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar li {
  margin-right: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
  .fade-leave-to

  /* .fade-leave-active below version 2.1.8 */
 {
  opacity: 0;
}

.about {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.87);
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;
  -webkit-backdrop-filter: blur(20px);
  pointer-events: auto;
  color: white;
}

.about-button button,
.close-button button {
  background-color: transparent;
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  padding-right: 0;
}

.about-button button:focus,
.close-button button:focus {
  outline: none;
}

.close-button {
  position: absolute;
  top: 30px;
  right: 50px;
}

.close-button button {
  color: white;
}

.about .name-title {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 54px;
  margin-top: 50px;
}

.about .info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 30px;
  padding-left: 8%;
  padding-right: 8%;
}

.about a.send-email {
  color: white;
  padding-left: 40px;
  background-color: gray;
  padding-right: 40px;
  padding: 1rem;
  text-transform: uppercase;
  text-decoration: none;
  width: 10%;
}

.about ul.social-networks-list {
  padding: 0;
  margin: 0;
}

.about .social-networks li {
  margin-left: 20px;
  margin-right: 20px;
}

.about .social-networks img {
  transition: all 0.2s;
}

.about .social-networks a:hover img {
  opacity: 0.6;
}

.about .social-networks {
  position: absolute;
  bottom: 30px;
  width: 100%;
}
</style>