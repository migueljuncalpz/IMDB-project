<template>
  <div class="container">
    <div class="button-menu">
      <button class="dislike-button">&#10060;</button>
      <button class="unwatch-button">&#129335;</button>
      <button class="super-like-button">&#127775;</button>
      <button class="like-button">&#128525;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChooseButtons.vue"
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