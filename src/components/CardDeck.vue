<template>
  <div class="wrap">
    <SwipeCard v-for="(film,index) in store.getFilmsList" :key="film.filmId"
               v-bind:style="{'z-index': (films.length-index)-1}"
               :filmInfo="film"
               :index=index
               @swipeLeft="onSwipeLeft"
               @swipeRight="onSwipeRight"
               @swipeUp="onSwipeUp"
    />
  </div>
</template>

<script setup>

import SwipeCard from "@/components/SwipeCard.vue";
import {useFilmStore} from "@/stores/FilmStore";

const store = useFilmStore()


let films = store.getFilmsList

const onSwipeLeft = () => {
  store.postDislike()
}
const onSwipeRight = () => {
  store.postLike()
}
const onSwipeUp = () => {
  store.postSuperLike()
}

</script>

<style lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

.wrap {
  justify-content: center;
  display: grid;
  grid-template-columns: 1fr;
  height: 75vh;
}


</style>
