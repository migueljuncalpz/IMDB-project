<template>
  <transition name="land-page">
    <div class="land-page">
      <div class="logo">
        <h1>Finger &#128293;</h1>
      </div>
      <div class="slogan">
        <h3>The best film to view handpicked!</h3>
      </div>
      <div class="start">
        <button class="start-button" @click="getStarted()" role="button">Let´s GO!</button>
      </div>
    </div>
  </transition>
</template>

<script>
export default{
  name:'LandPage',
  methods:{
    getStarted() {
        this.$router.push('/cardDeck')
    },
  }
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
  background-color: $dark-color;
  border:0;
  border-radius: 1rem;
  box-sizing: border-box;
  color: $bone-color;
  cursor: pointer;
  font-size: 1.125rem; /* 18px */
  font-weight: 600;
  line-height: 1.75rem; /* 28px */
  padding: 0.65rem  1.25rem;
  text-align: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  :hover {
    box-shadow: none;
  }
}
/* Animation */
.land-page-enter-active,
.land-page-leave-active {
  transition: all 0.5s ease;
}
.land-page-enter-from,
.land-page-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>