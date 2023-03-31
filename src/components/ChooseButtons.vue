<template>
  <div class="container">
    <div class="button-menu">
      <button>&#10060;</button>
      <button>&#127775;</button>
      <button>&#128525;</button>
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
  justify-content: space-around;
  align-items: flex-end;
  padding: 1rem 1rem;
  button{
    border: 0;
    border-radius: 5rem;
    font-size: 2rem;
    padding: 0.5em 0.6em;
    &:hover{
      cursor: pointer;
    }
  }
}

</style>