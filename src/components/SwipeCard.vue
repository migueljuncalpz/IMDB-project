<template>
    <div class="card" @touchstart="onTouchStart" @touchend="onTouchEnd" @touchmove="onTouchMove" :style="{ transform: 'translateX(' + (this.x-this.startX) + 'px)' }">
      <div class="front" v-bind:style="{ 'background-image': 'url(' + this.filmImg + ')' ,
                                         'transform': 'rotateY(' + this.degreesFront+ ')'}">
        <div class="film-rating">7.9</div>
        <div class="age-rating">+13</div>
        <div class="film-title">{{this.filmName + this.year}}</div>
        <div class="film-gender">gender</div>
        <button class="film-info-button" @click="changeToBack()">info</button>
      </div>
      <div onclick="" class="back" v-bind:style="{'transform': 'rotateY(' + this.degreesBack+ ')'}">
        <div class="film-synopsis">
          <h3>Synopsis</h3>
          <h4>{{this.filmSynopsys}}</h4>
        </div>
        <div class="film-cast">
          <h3>Cast</h3>
          <h4>insert text here</h4>
        </div>
        <div class="film-director">
          <h3>Director</h3>
          <h4>insert text here</h4>
        </div>
        <button class="film-info-button" @click="changeToFront()">return</button>
      </div>
    </div>
</template>

<script>

export default {
  name: 'SwipeCard',
  props: {
    filmImg: {
      type: String,
      required: true,
    },
    filmName: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    filmSynopsys: {
      type: String,
      required: true,
    },
    onSwipeLeft: {
      type: Function,
      default: () => {},
    },
    onSwipeRight: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      degreesFront: "0deg",
      degreesBack: "-180deg",
      x: 0,
      y: 0,
      startX:0,
      startY:0,
      dragging: false,
      swipeDirection: null
    };
  },
  methods: {
    onTouchStart(event) {
      console.log("start")
      this.dragging = true;
      this.startX = event.touches[0].clientX;
      this.x=this.startX;
    },
    onTouchMove(event) {
      console.log("move")
      if (this.dragging) {
        const dx = event.touches[0].clientX - this.x;
        const dy = event.touches[0].clientY - this.y;
        this.x += dx;
        this.y += dy;
        console.log(this.x)
      }
    },
    onTouchEnd(){
      this.dragging = false;
      // Calculate swipe direction
      const dx = this.x - this.startX;
      //const dy = this.y - this.startY;
      const threshold = 150
      if(Math.abs(dx)>=threshold){
        if(dx>0){
          this.swipeDirection="right"
          this.onSwipeRight()
        }else{
          this.swipeDirection="left"
          this.onSwipeLeft()
        }
      }
      this.x=this.startX
      this.y=this.startY
      // Trigger swipe event if necessary
      if (this.swipeDirection) {
        this.$emit("swipe", this.swipeDirection);
      }
    },

    changeToBack(){
      this.degreesFront= "180deg"
      this.degreesBack= "0deg"
    },
    changeToFront(){
      this.degreesFront= "0deg"
      this.degreesBack= "-180deg"

    }
  },
};
</script>

<style lang="scss" scoped>
$primary: rgb(0, 0, 1);
$primary-light: hsl(222,50%,95%);
$secondary: hsl(350,80%,50%);
$red: hsl(10,80%,50%);
$orange: hsl(50,80%,50%);

@mixin mobile ($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.card {
  color: inherit;
  cursor: pointer;
  min-width: 300px;
  max-width: 400px;
  min-height: 500px;
  max-height: 70vh;
  perspective: 1000px;
  margin: 1rem;
  grid-row-start: 1;
  grid-column-start: 1;
  justify-self: center;
}
.front,
.back {
  display: grid;
  border-radius: 1rem;
  background-position: center;
  background-size: cover;
  text-align: center;
  align-items: center;
  height: 100%;
  width: 100%;
  position: absolute;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  transition: ease-in-out 600ms;
  overflow: hidden;

  .film-info-button{
    position: absolute;
    margin: 1rem 1rem;
    bottom: 0;
    border:none;
    border-radius: 1rem;
    padding: 0.5rem;
  }
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
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, adjust-hue($primary, -20deg), $primary);
    opacity: .25;
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
}
</style>