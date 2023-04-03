
<template>
  <div class="selection-view">
    <FilmResults @click="getResults" ></FilmResults>
    <CardDeck></CardDeck>
    <ChooseButtons></ChooseButtons>
  </div>
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

/* Deck transitions */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

</style>

<script>
export default {
  name:"SelectionView",
  components: {
    ChooseButtons,
    FilmResults,
    CardDeck,
  },
  methods:{
    getResults(){
      this.$router.push("/")
    }
  }
}
import ChooseButtons from "@/components/ChooseButtons.vue";
import FilmResults from "@/components/FilmResults.vue";
import CardDeck from "@/components/CardDeck.vue";
</script>