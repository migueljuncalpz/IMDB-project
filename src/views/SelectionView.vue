<template>
  <div class="selection-view">
    <SelectionResults @click="getResults" :results-type="type"></SelectionResults>
    <CardDeck></CardDeck>
    <ChooseButtons></ChooseButtons>
  </div>
</template>

<style lang="scss" scoped>
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

#app {
  background-color: $rose-color;
}

.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}

/* Deck transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */
{
  transform: translateX(10px);
  opacity: 0;
}

</style>

<script setup lang="ts">

import {useRouter,useRoute} from "vue-router";

const router = useRouter()
const route = useRoute()
const type = route.params.typeResults
function getResults(){
  router.push("/results")
}

import ChooseButtons from "@/components/ChooseButtons.vue";
import SelectionResults from "@/components/SelectionResultsButton.vue";
import CardDeck from "@/components/CardDeck.vue";


</script>