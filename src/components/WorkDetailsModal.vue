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
  props: {
    id: {
      type: String,
    },
    title: {
      type: String,
    },
    isModalOpen: {
      type: Boolean,
    },
    categoryItemClass: {
      type: String,
    }
  },
  methods: {
    close() {
      this.$emit('close');
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
  -webkit-overflow-scrolling: touch;
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
    margin: 0;
}

.modal-header {
  margin-top: 0;
  text-align: left;
}

.modal-header h1.work-name {
  margin-top: 0;
  font-size: 14px;
}

.modal-header h3.work-type {
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: .11em;
  font-size: 15px;
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
  font-size: 14px;
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
  transition: all 0.2s;
}
.back-button:hover {
  color: rgba(0, 0, 0, 0.9);
  background-color: rgba(255, 255, 255, 0.8);
}
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
.modal-container.le-loup{
  background-color: rgb(0, 0, 0);
}
.modal-container.wad-mag{
  background-color: rgb(206,	206,	206);
}
.modal-container.la-boom,
.modal-container.restaurant,
.modal-container.basalte,
.modal-container.moma,
.modal-container.liberty-bell,
.modal-container.pepito,
.modal-container.benetton{
  background-color: white;
}
.modal-container.logo-creation,
.modal-container.cherry{
  background-color: black;
}
.la-boom .back-button{
  background-color: rgb(94, 122, 182);
  color: rgb(255,	253,	118);
}	
.la-boom .back-button:hover{
  background-color: rgb(252, 77, 175);
  color: rgb(255,	253,	118);
}
.le-dragon .back-button:hover{
  background-color: rgb(252, 63,	59);
}
.restaurant .back-button{
  background-color: rgb(37, 43, 130);
  color: white;
}
.restaurant .back-button:hover{
  background-color: rgb(127, 236, 229);
  color: rgb(37, 43, 130);
}
.moma .back-button,
.wad-mag .back-button,
.benetton .back-button,
.liberty-bell .back-button{
  background-color: black;
  color: white;
}
.moma .back-button:hover,
.wad-mag .back-button:hover,
.benetton .back-button:hover,
.liberty-bell .back-button:hover{
  background-color: rgba(0, 0, 0, .7);
  color: white;
}
.basalte .back-button{
  background-color: rgb(9,	30,	222);
  color: rgb(249,	248,	56);
}
.basalte .back-button:hover{
  background-color: rgb(53,	221,	102);
  color: white;
}
.pepito .back-button{
  background-color: rgb(145, 50, 31);
  color: white;
}
.pepito .back-button:hover{
  background-color: rgb(232, 35, 50);
  color: white;
}
@media only screen and (min-width: 415px) and (max-width: 1180px){
  .close {
    padding: 15px;
  top: 45px;
  right: 45px;
  background-color: rgba(0, 0, 0, 0.5);
  }
  .close img{
    vertical-align: middle;
    width: 19px;
  }
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
  .close {
  padding: 15px;
  top: 15px;
  right: 15px;
  background-color: rgba(0, 0, 0, 0.5);
  }
  .close img{
    vertical-align: middle;
    width: 19px;
  }
}
</style>

