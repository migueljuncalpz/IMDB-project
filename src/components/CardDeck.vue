<template>
  <div class="wrap" v-if="props.resultsType==='movies'">
    <SwipeCard v-for="(film,index) in store.getFilmsList" :key="film.filmId"
               v-bind:style="{'z-index': -(index)}"
               :filmInfo="film"
               :index=index
               @swipeLeft="onSwipeLeft"
               @swipeRight="onSwipeRight"
               @swipeUp="onSwipeUp"
    />
  </div>
    <div class="wrap" v-else-if="props.resultsType==='series'">
        <SwipeCard v-for="(serie,index) in store.getSeriesList" :key="serie.filmId"
                   v-bind:style="{'z-index': -(index)}"
                   :filmInfo="serie"
                   :index=index
                   @swipeLeft="onSwipeLeft"
                   @swipeRight="onSwipeRight"
                   @swipeUp="onSwipeUp"
        />
    </div>
</template>


<script setup lang="ts">
import SwipeCard from "@/components/SwipeCard.vue";
import {useFilmStore} from "@/stores/FilmStore";

const props= defineProps({
    resultsType:{
        type:String,
        required:true
    }
})

const store = useFilmStore()



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
