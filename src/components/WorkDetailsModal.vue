<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="close" @click="close()">
          <img src="../assets/icons/close.svg" alt>
        </div>
        <div class="modal-container" :class="categoryItemClass">
          <div class="modal-header">
              <div class="head-title content-text">
                <slot name="head-title">
                    <h3 class="work-type">Work type</h3>
                    <h1 class="work-name">Work name</h1>
                </slot>
                <hr>
              </div>
          </div>

          <div class="modal-body">
            <slot>description</slot>
          </div>

          <div class="modal-footer back-button" @click="close()">
            <slot name="footer">back</slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: ["id", "title", "isModalOpen", "categoryItemClass"],
  methods: {
    close() {
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(13, 14, 15, 0.9);
  display: flex;
  transition: opacity 0.3s ease;
  overflow-y: auto;
}
.modal-wrapper {
  display: table-cell;
  vertical-align: top;
}

.modal-container {
  transition: all 0.3s ease;
  height: auto;
  -webkit-box-shadow: 0 50px 200px rgba(0, 0, 0, 0.5);
  box-shadow: 0 50px 200px rgba(0, 0, 0, 0.5);
  width: calc(100vw - 60px);
  max-width: 1056px;
  margin: 30px auto 60px;
  background-color: #232425;
  border-radius: 4px;
  color: #fff;
  overflow-x: hidden;
  padding-bottom: 45px;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
  z-index: 10002;
  border: 1px solid #2c2e30;
}

.content-text{
    padding: 15px 30px 20px;
    max-width: 800px;
    margin: 0 auto;
}

.modal-header {
  margin-top: 0;
  text-align: left;
}

.modal-header h1.work-name {
  margin-top: 0;
  font-size: 3em;
}

.modal-header h3.work-type {
  font-weight: 300;
  text-transform: uppercase;
}
hr{
    color: #494a4d;
    background-color: #494a4d;
    height: 1px;
    border: 0;
    margin-bottom: 15px;
    width: 100%;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

.close {
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
.close img {
  width: 25px;
}

.back-button {
  width: 45px;
  text-align: center;
  display: block;
  font-size: 17px;
  letter-spacing: -0.01em;
  line-height: 1.1em;
  color: #fff;
  text-decoration: none;
  border: none;
  opacity: 1;
  border-radius: 50px;
  font-weight: 500;
  padding: 12px 25px;
  background-color: rgba(0, 0, 0, 0.1);
  margin: 45px auto 20px;
  cursor: pointer;
  -webkit-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  -o-transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
  transition: all 0.5s cubic-bezier(0.175, 1.2, 0.32, 1.275);
}
.back-button:hover {
  color: rgba(0, 0, 0, 0.9);
  background-color: rgba(255, 255, 255, 0.8);
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.modal-container.la-boom{
  background-color: white;
}
.modal-container.le-loup{
  background-color: rgb(0, 0, 0);
}

@media only screen and (max-width: 414px){
  .modal-container{
    height: auto;
    width: 100vw;
    max-width: 960px;
    margin: 0 auto;
    background-color: #232425;
    border-collapse: separate;
    border-radius: 4px!important;
    color: #fff;
    overflow: hidden;
    padding-bottom: 60px;
    position: absolute;
  }
}
</style>

