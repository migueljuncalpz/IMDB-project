<template>
<div class="container">
  <button class="results-button">0 {{props.resultsType}} found</button>
</div>
</template>

<script setup>

const props= defineProps({
  resultsType:{
    type:String,
    required:true
  }
})

</script>

<style scoped lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;


.container{
  width: 100vw;
  display: flex;
  position: sticky;
  top: 0;
  z-index: 999;
  justify-content: center;
}
.results-button{
  border-style: none;
  color: white;
  background-color: $dark-color;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  box-shadow: 5px 5px 6px black;
  &:hover{
    cursor: pointer;
  }
}
</style>