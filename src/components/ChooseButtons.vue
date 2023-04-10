<template>
  <div class="container">
    <div class="button-menu">
      <button class="dislike-button" @click="store.postDislike()">&#10060;</button>
      <button class="unwatch-button"  @click="store.postUnwatch()">&#129335;</button>
      <button class="super-like-button"  @click="store.postSuperLike()">&#127775;</button>
      <button class="like-button"  @click="store.postLike()">&#128525;</button>
    </div>
  </div>
</template>

<script setup>
import {useFilmStore} from "@/stores/FilmStore";
const store = useFilmStore()

function likeEvent(){
    this.$emit('likeEvent');
}

</script>

<style scoped lang="scss">

.container{
  display: flex;
  width: 100vw;
  height: 20vh;
  justify-content: center;
}
.button-menu{
  height: fit-content;
  display: flex;
  width: 60vw;
  justify-content: center;
  margin-inside: 1rem;
  button{
    border: none;
    margin-left: 1rem;
    border-radius: 5rem;
    font-size: 1.5rem;
    padding: 0.4em 0.5em;
    box-shadow: 5px 5px 6px rosybrown;
    &:hover{
      cursor: pointer;
    }
  }
  .super-like-button{
    box-shadow: 5px 5px 6px dodgerblue;
  }
  .like-button{
    box-shadow: 5px 5px 6px green;
  }
  .dislike-button{
    box-shadow: 5px 5px 6px red;
  }
  .unwatch-button{
    box-shadow: 5px 5px 6px yellow;
  }
}

</style>