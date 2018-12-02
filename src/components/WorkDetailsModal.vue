<template>
<transition name="modal">
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="close" @click="close()">
                <img src="../assets/icons/close.svg" alt="">
            </div>
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        Work name
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        description
                    </slot>
                </div>

                <div class="modal-footer back-button" @click="close()">
                    <slot name="footer">
                        back
                    </slot>
                </div>
            </div>
        </div>
    </div>
</transition>
</template>

<script>
export default {
    props: ['id','title','isModalOpen'],
    methods: {
        close() {  this.$emit('close') }
    }
}
</script>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(13,14,15,.9);
    display: table;
    transition: opacity .3s ease;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: top;
}

.modal-container {
    transition: all .3s ease;
    height: auto;
    -webkit-box-shadow: 0 50px 200px rgba(0, 0, 0, .5);
    box-shadow: 0 50px 200px rgba(0, 0, 0, .5);
    width: 50vw;
    max-width: 1056px;
    margin: 30px auto 60px;
    background-color: #232425;
    border-radius: 4px;
    color: #fff;
    overflow: hidden;
    padding-bottom: 45px;
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    transform: translateX(-50%);
    z-index: 10002;
    border: 1px solid #2c2e30;
}

.modal-header h3 {
    margin-top: 0;
    color: #42b983;
}

.modal-body {
    margin: 20px 0;
}

.modal-default-button {
    float: right;
}

.close{
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
.close img{
    width: 25px;
}

.back-button{
    width: 45px;
    text-align: center;
    display: block;
    font-size: 17px;
    letter-spacing: -.01em;
    line-height: 1.1em;
    color: #fff;
    text-decoration: none;
    border: none;
    opacity: 1;
    border-radius: 50px;
    font-weight: 500;
    padding: 12px 25px;
    background-color: rgba(0, 0, 0, .1);
    margin: 45px auto 20px;
    cursor: pointer;
    -webkit-transition: all .5s cubic-bezier(.175,1.2,.32,1.275);
    -o-transition: all .5s cubic-bezier(.175,1.2,.32,1.275);
    transition: all .5s cubic-bezier(.175,1.2,.32,1.275);
}
.back-button:hover{
    color: rgba(0, 0, 0, .9);
    background-color: rgba(255, 255, 255, .8);

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
</style>

