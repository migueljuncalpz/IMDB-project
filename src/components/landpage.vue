<template>
  <div class="logo">
    <h1>Finger &#128293;</h1>
  </div>
  <div class="slogan">
    <h3>The best film to view handpicked!</h3>
  </div>
  <div class="start">
    <button class="start-button" role="button">Let´s GO!</button>
  </div>
</template>

<script>
export default{
  name:'LandPage'
}
</script>
<style lang="scss">
$dark-color: #002B5B;
$red-color: #EA5455;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

.logo{
  height: 15vh;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
.slogan{
  display: flex;
  height: 60vh;
  align-items: center;
  justify-content: center;
}
.start{
  display: flex;
  justify-content: center;
}
.start-button {
  background-image: linear-gradient(to bottom right, $dark-color, $red-color, $bone-color);
  border: 1 $bone-color;
  border-radius: 1rem;
  box-sizing: border-box;
  color: $dark-color;
  cursor: pointer;
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  line-height: 1.75rem; /* 28px */
  padding: 1rem 1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: none;
  }
}
</style>