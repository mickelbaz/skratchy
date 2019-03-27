<template>
  <div class="navbar">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/clara.png" alt="">
      </router-link>
    </div>
    <div v-show="!isAboutActive" class="about-button">
      <button @click="handleButtonClick()">about</button>
    </div>
    <transition name="fade">
      <div v-show="isAboutActive" class="about">
        <div v-show="isAboutActive" class="close-button" @click="handleClose()">
          <img src="../assets/icons/close.svg" alt="">
        </div>
        <h1 class="about-title">{{ aboutTitle }}</h1>
        <h1 class="name-title">{{ name }}</h1>
        <div class="info">
          <div class="column">
          </div>
          <div class="column">
          </div>
        </div>
        <div class="email-button">
          <a class="send-email" href="mailto:claradelahaye@live.fr">
              {{ emailTitle }}
            </a>
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
      isAboutActive: false,
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
          url: "https://fr.linkedin.com/in/clara-delahaye-746055120"
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
    toggleIsAboutActive() {
      this.isAboutActive = !this.isAboutActive;
    },
    handleButtonClick() {
      this.toggleIsAboutActive();
      this.toggleBodyClass('addClass', 'no-scroll');
    },
    handleClose() {
      this.toggleIsAboutActive();
      this.toggleBodyClass('removeClass', 'no-scroll');
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
  transition: all .5s;
}

.navbar img {
  width: 40px;
}

.navbar ul {
  list-style-type: none;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar li {
  margin-right: 20px;
}
.logo{
  padding-top: 4px;
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
  border: none;
  padding: 15px;
  position: fixed;
  z-index: 100000;
  overflow: visible;
  top: 15px;
  right: 15px;
  border-radius: 100px;
  cursor: pointer;
}

.close-button img {
  width: 25px;
}

.close-button button {
  color: white;
}

.about .about-title {
  font-size: 20px;
}

.about .name-title {
  font-weight: 300;
  text-transform: capitalize;
  font-size: 25px;
  margin-top: 72px;
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
    padding: 10px 27px;
    border-radius: 40px;
    text-transform: lowercase;
    text-decoration: none;
    width: 10%;
    font-size: 14px;
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

.about .email-button {
  position: absolute;
  bottom: 125px;
  width: 100%;
}

@media screen and (max-width: 768px) {
  .navbar {
    background-color: rgba(255, 255, 255, 0.9);
    border-bottom: 1px solid #bebebe;
    -webkit-backdrop-filter: blur(20px);
    backdrop-filter: blur(20px);
    transition: all .5s;
  }

  .about .name-title {
    font-size: 2rem;
  }
}

@media screen and (max-width: 449px) {
  .navbar {
    padding: 20px;
  }
}
</style>