<template>
<div class="container">
  <button class="results-button">0 films found</button>
</div>
</template>

<script>
export default {
  name: "FilmResults"
}
</script>

<style scoped lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;


.container{
  width: 100vw;
  display: flex;
  justify-content: center;
}
.results-button{
  border-style: none;
  color: white;
  background-color: $dark-color;
  width: fit-content;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  &:hover{
    cursor: pointer;
  }
}
</style>