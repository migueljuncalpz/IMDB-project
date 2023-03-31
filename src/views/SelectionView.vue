
<template>
    <film-results></film-results>
    <CardDeck></CardDeck>
    <ChooseButtons></ChooseButtons>
</template>

<style lang="scss" scoped>
$dark-color: #002B5B;
$red-color: #EA5455;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

#app{
  background-color: $red-color;
}

.content{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

}
</style>

<script setup lang="ts">
import ChooseButtons from "@/components/ChooseButtons.vue";
import FilmResults from "@/components/FilmResults.vue";
import CardDeck from "@/components/CardDeck.vue";
</script>