<template>
<div class="container">
  <div class="results-button">0 films found</div>
</div>
</template>

<script>
export default {
  name: "FilmResults"
}
</script>

<style scoped lang="scss">
.container{
  width: 100vw;
  display: flex;
  justify-content: center;
}
.results-button{
  background-color: black;
  width: fit-content;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  &:hover{
    cursor: pointer;
  }
}
</style>