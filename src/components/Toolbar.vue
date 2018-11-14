<template>
<div class="navbar" >
    <div class="logo">
        <router-link to="/">
            <img src="../assets/logo.png" alt="">
        </router-link>
    </div>
    <div v-show="!aboutActive" class="about-button">
        <button @click="aboutActive = !aboutActive">about</button>
    </div>
    <transition name="fade">
        <div v-show="aboutActive" class="about">
            <div v-show="aboutActive" class="close-button">
                <button @click="aboutActive = !aboutActive">close</button>
            </div>
            <h1>about</h1>
        </div>
    </transition>
</div>
</template>

<script>
export default {
    data() {
            return {
                aboutActive: false
            }
        }
}
</script>

<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    padding: 30px 50px;
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.about {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .3s ease-in-out;
    background-color: rgba(0, 0, 0, .87);
    display: flex;
    flex-direction: column;
    padding-bottom: 30px;
    -webkit-backdrop-filter: blur(20px);
    pointer-events: auto;
    color: white;
}

.about-button button,
.close-button button{
    background-color: transparent;
    border: none;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
}

.about-button button:focus,
.close-button button:focus{
    outline: none;
}

.close-button{
    position: absolute;
    top: 30px;
    right: 50px;
}
.close-button button{
    color: white;
}
</style>