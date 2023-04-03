<template>
    <div class="card" v-if="show" @touchstart="onTouchStart" @touchend="onSwipeEnd" @touchmove="onTouchMove"    @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onSwipeEnd"
          :style="{ transform: 'translate(' + (this.x-this.startX) + 'px,' + (this.y-this.startY) +'px)'}"
          :class="{ blur : blur}">
      <div :style="{opacity:this.likeOpacity}" class="like-film">YES!</div>
      <div :style="{opacity:this.dislikeOpacity}" class="dislike-film">NO!!</div>
      <div :style="{opacity:this.superlikeOpacity}" class="superlike-film">LOVE IT!</div>

      <div class="front" v-bind:style="{ 'background-image': 'url(' + this.filmImg + ')' ,
                                          'transform': 'rotateY(' + this.degreesFront+ ')'}">
        <div class="film-rating">7.9</div>
        <div class="age-rating">+13</div>
        <h3 class="film-title">{{this.filmName}}<br>{{this.year}}</h3>
        <h5 class="film-gender">gender</h5>
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
    index: {
      type: Number,
      required: true,
    },
    show:{
      type:Boolean,
      required:true,
    },
    filmSynopsys: {
      type: String,
      required: true,
    },
    onSwipeLeft: {
      type: Function,
    },
    onSwipeRight: {
      type: Function,
    },
    onSwipeUp: {
      type: Function,
    },
  },
  data() {
    return {
      superlikeOpacity:0,
      likeOpacity:0,
      dislikeOpacity:0,
      horizontalThreshold : 150,
      verticalThreshold : 200,
      currentIndex:0,
      selected:false,
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
  computed:{
    blur: function(){
      return this.currentIndex!==this.index
    }
  },
  methods: {
    onTouchStart(event) {
      this.dragging = true;
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      this.x=this.startX;
      this.y=this.startY;

    },
    onTouchMove(event) {
      if (this.dragging) {
        const dx = event.touches[0].clientX - this.x;
        const dy = event.touches[0].clientY - this.y;
        this.x += dx;
        this.y += dy;
        if(this.x-this.startX > 0){
          this.likeOpacity= (Math.abs(this.x - this.startX)/this.horizontalThreshold)

        }else{
          this.dislikeOpacity= (Math.abs(this.x - this.startX)/this.horizontalThreshold)
        }
        if(this.y-this.startY < 0){
          this.superlikeOpacity= (Math.abs(this.y - this.startY)/this.verticalThreshold)
        }
      }
    },
    onSwipeEnd(){
      this.dragging = false;
      const dx = this.x - this.startX;
      const dy = this.y - this.startY;
      if(Math.abs(dx)>=this.horizontalThreshold){
        if(dx>0){
          this.swipeDirection="right"
          this.onSwipeRight()
        }else{
          this.swipeDirection="left"
          this.onSwipeLeft()
        }
        this.currentIndex+=1;
      }
      if(Math.abs(dy)>=this.verticalThreshold){
        if(dy<0){
          this.swipeDirection="up"
          this.onSwipeUp()
        }
      }
      this.x=this.startX
      this.y=this.startY
      this.likeOpacity=0
      this.dislikeOpacity=0
      this.superlikeOpacity=0
      // Trigger swipe event if necessary
      if (this.swipeDirection) {
        this.$emit("swipe", this.swipeDirection);
      }
    },
    onMouseDown(e){
      this.dragging=true
      this.startX = e.clientX;
      this.startY = e.clientY;
      this.x = this.startX
      this.y = this.startY

    },

    onMouseMove(e) {
      if (this.dragging){
        this.currentX = e.clientX;
        this.currentY = e.clientY;
        const deltaX = this.currentX - this.x;
        const deltaY = this.currentY - this.y;
        this.x += deltaX
        this.y += deltaY

        if(this.x-this.startX > 0){
          this.likeOpacity= (Math.abs(this.x - this.startX)/this.horizontalThreshold)
        }else{
          this.dislikeOpacity= (Math.abs(this.x - this.startX)/this.horizontalThreshold)
        }
        if(this.y-this.startY < 0){
          this.superlikeOpacity= (Math.abs(this.y - this.startY)/this.verticalThreshold)
        }
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
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

@mixin mobile ($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.blur{
  filter: blur(4px);
}
.card {
  color: inherit;
  cursor: pointer;
  min-width: 300px;
  max-width: 400px;
  max-height: 70vh;
  perspective: 1000px;
  margin: 1rem;
  grid-row-start: 1;
  grid-column-start: 1;
  justify-self: center;

  .like-film,.dislike-film,.superlike-film{
    color:black;
    position: absolute;
    z-index: 999;
    backdrop-filter: blur(3px);
    background-color: rgba(255,255,255,0.6);
    top:4rem;
    font-size: 4rem;
    font-weight: 900;
    border-style: solid;
    border-radius: 1rem;
    border-width: 5px;
  }
  .like-film{
    color: green;
    right: 3rem;
    transform: rotateZ(30deg);
  }
  .dislike-film{
    color: red;
    left: 3rem;
    transform: rotateZ(-30deg);
  }
  .superlike-film{
    color:dodgerblue;
    top:50%;
    left:0;
    right: 0;
  }
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
    background: linear-gradient(135deg, adjust-hue($dark-color, -20deg), $dark-color);
    opacity: .25;
  }
  .film-title,.film-gender{
    border-radius: 1rem;
    background-color: black;
    opacity: 0.7;
    padding: 0.5rem 0.5rem;
  }
  .film-rating{
    color:$dark-color;
    position: absolute;
    margin: 1rem 1rem;
    background-color: yellow;
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