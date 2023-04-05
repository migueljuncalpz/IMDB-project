<template>
  <transition name="land-page">
    <div class="land-page">
      <div class="logo">
        <h1>Finger &#128293;</h1>
      </div>

      <div class="slogan" v-show="!start">
        <h3>The best film or series to view handpicked!</h3>
      </div>

      <transition name="started">
        <div class="slogan" v-show="start">
          <h3>What you want to choose, films or series?</h3>
        </div>
      </transition>

      <div class="start" v-show="!start">
        <button class="start-button" @click="getMenu" role="button">Let´s GO!</button>
      </div>

      <transition name="started">
        <div class="button-menu" v-show="start">
          <button class="films-button" @click="getStarted('films')" role="button">Films</button>
          <button class="series-button" @click="getStarted('series')" role="button">Series</button>
        </div>
      </transition>

    </div>
  </transition>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
let start= ref(false)
function getMenu() {
  start.value=true
}
function getStarted(type:string) {
  router.push({name:'selection',params:{'typeResults':type}})
}

</script>
<style lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

.logo {
  height: 15vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.slogan {
  text-align: center;
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
}
.button-menu,
.start {
  display: flex;
  justify-content: center;
}


.films-button,
.series-button,
.start-button {
  background-color: rgba($dark-color,0.9);
  border: 0;
  border-radius: 1rem;
  box-sizing: border-box;
  color: $bone-color;
  cursor: pointer;
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  line-height: 1.75rem; /* 28px */
  padding: 0.65rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: none;
  }
}
.films-button,.series-button{
  margin-right: 1em;
  width: 7em;
  height: 4em;
  transition: background-color 1s ease-in-out;
}
.films-button{
  &:hover{
    background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("../assets/images/the-god-father-marlon-brando.gif");
    background-size: cover;
  }
}
.series-button{
  &:hover{
    background:linear-gradient(0deg, rgba(255, 0, 150, 0.3), rgba(255, 0, 150, 0.3)), url("../assets/images/highfive.gif");
    background-size: cover;
  }
}



/* Animation */
.land-page-enter-active,
.land-page-leave-active {
  transition: all 0.5s ease;
}

.land-page-enter-from,
.land-page-leave-to {
  opacity: 0;
  transform: translateX(30px);
}


.started-enter-active,
.started-leave-active{
  transition: all 0.8s ease;
}
.started-enter-from,
.started-leave-to{
  opacity: 0;
  transform: rotateY(180deg);
}

</style>