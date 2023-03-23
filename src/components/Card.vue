<template>
  <div class="container">
    <div class="card">
      <div class="front" v-bind:style="{ 'background-image': 'url(' + 'https://r3.abcimg.es/resizer/resizer.php?imagen=https%3A%2F%2Fstatic4.abc.es%2Fmedia%2Fpeliculas%2F000%2F044%2F428%2Ftitanic-1.jpg&nuevoancho=620&medio=abc' + ')' }">
        <div class="film-rating">7.9</div>
        <div class="age-rating">+13</div>
        <div class="film-title">TITANIC 1997</div>
        <div class="film-gender">Drama</div>
      </div>
      <div onclick="" class="back">
        <div class="film-synopsis">
          <h3>Synopsis</h3>
          <h4>insert text here</h4>
        </div>
        <div class="film-cast">
          <h3>Cast</h3>
          <h4>insert text here</h4>
        </div>
        <div class="film-director">
          <h3>Director</h3>
          <h4>insert text here</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard"
}
</script>

<style scoped lang="scss">
$primary: rgb(0, 0, 1);
$primary-light: hsl(222,50%,95%);
$secondary: hsl(350,80%,50%);
$red: hsl(10,80%,50%);
$orange: hsl(50,80%,50%);

*, *:before, *:after {
  box-sizing: border-box;
}
@mixin mobile ($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}
.container{
  display: flex;
  width: 100vw;
  height: 70vh;
  justify-content: center;
}

.card {
  color: inherit;
  cursor: pointer;
  min-width: 300px;
  max-width: 400px;
  min-height: 500px;
  perspective: 1000px;
  margin: 1rem;
  position: relative;
}
.front,
.back {
  display: grid;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  text-align: center;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  overflow: hidden;
}
.front {
  background-size: cover;
  background-blend-mode: overlay;
  padding: 2rem;
  font-size: 1.618rem;
  font-weight: 600;
  color: #fff;
  overflow: hidden;
  &:before {
    position: absolute;
    display: block;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    opacity: .25;
    z-index: -1;
  }
  .card:hover & {
    transform: rotateY(180deg);
  }
  .card:nth-child(even):hover & {
    transform: rotateY(-180deg);
  }
  .film-title,.film-gender{
    border-radius: 1rem;
    background-color: black;
    padding: 0.5rem 0.5rem;
  }
  .film-rating{
    position: absolute;
    margin: 1rem 1rem;
    background-color: orangered;
    border-radius: 4rem;
    padding: .5rem 0.5rem;
    left: 0;
    top:0;
  }
  .age-rating{
    position: absolute;
    margin: 1rem 1rem;
    background-color: orangered;
    border-radius: 4rem;
    padding: .5rem 0.5rem;
    right: 0;
    top:0;
  }

}
.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
  color: black;
  .card:hover & {
    transform: rotateY(0deg);
  }
  .card:nth-child(even) & {
    transform: rotateY(180deg);
  }
}
</style>