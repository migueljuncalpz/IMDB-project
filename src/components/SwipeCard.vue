

<template>
    <!-- TODO corrections on height and width of cards for each display measures  -->
  <div class="card" @touchstart="onTouchStart" @touchend="onSwipeEnd" @touchmove="onTouchMove"
       @mousedown="onMouseDown" @mousemove="onMouseMove" @mouseup="onSwipeEnd"
       :style="{ transform: 'translate(' + translateX + 'px,' + translateY +'px)'}"
       :class="{ blur : blur}">
    <div :style="{opacity:likeOpacity}" class="like-film">YES!</div>
    <div :style="{opacity:dislikeOpacity}" class="dislike-film">NO!!</div>
    <div :style="{opacity:superlikeOpacity}" class="superlike-film">LOVE IT!</div>

    <div class="front" v-bind:style="{ 'background-image': 'url(' + props.filmInfo.filmImage + ')' ,
                                          'transform': 'rotateY(' + degreesFront+ ')'}">
      <div class="film-rating">{{props.filmInfo.valueRating}}</div>
      <div class="age-rating">{{props.filmInfo.ageRating}}</div>
      <h3 class="film-title">{{ props.filmInfo.name }}<br>{{ props.filmInfo.year }}</h3>
      <h5 class="film-gender">{{props.filmInfo.gender}}</h5>
      <button class="film-info-button" @click="changeToBack()">info</button>
    </div>
    <div onclick="" class="back" v-bind:style="{'transform': 'rotateY(' + degreesBack+ ')'}">
      <div class="film-synopsis">
        <h3>Synopsis</h3>
        <h4>{{ props.filmInfo.synopsys }}</h4>
      </div>
      <div class="film-cast">
        <h3>Cast</h3>
        <h4>{{props.filmInfo.cast}}</h4>
      </div>
      <div class="film-director">
        <h3>Director</h3>
        <h4>insert text here</h4>
      </div>
      <button class="film-info-button" @click="changeToFront()">return</button>
    </div>
  </div>
</template>

<script setup lang="ts">

import type {FilmInfo} from "@/stores/types";
import {computed, ref} from "vue";

const props = defineProps({
  filmInfo: {
    type: Object as ()=> FilmInfo,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  onSwipeLeft: {
    type: Function,
    required:true,
  },
  onSwipeRight: {
    type: Function,
    required:true,

  },
  onSwipeUp: {
    type: Function,
    required:true,
  },
})

let superlikeOpacity = 0;
let likeOpacity = 0;
let dislikeOpacity = 0;
const horizontalThreshold = 150;
const verticalThreshold = 200;
let currentIndex = 0;

let x = 0;
let y = 0;
let startX = 0;
let startY = 0;
let dragging = false;
let currentX = 0;
let currentY = 0;

let degreesFront = ref("0deg");
let degreesBack = ref("-180deg");
const translateX = ref(0);
const translateY = ref(0);

const blur = computed({
  get() {
    return currentIndex !== props.index
  },
  set() {
  }
})

function translation() {
  translateX.value = x - startX
  translateY.value = y - startY
}

function onTouchStart(event: any) {
  dragging = true;
  startX = event.touches[0].clientX;
  startY = event.touches[0].clientY;
  x = startX;
  y = startY;
}

function onTouchMove(event: any) {
  if (dragging) {
    const dx = event.touches[0].clientX - x;
    const dy = event.touches[0].clientY - y;
    x += dx;
    y += dy;
    if (x - startX > 0) {
      likeOpacity = (Math.abs(x - startX) / horizontalThreshold)
    } else {
      dislikeOpacity = (Math.abs(x - startX) / horizontalThreshold)
    }
    if (y - startY < -30) {
      superlikeOpacity = (Math.abs(y - startY) / verticalThreshold)
    } else {
      superlikeOpacity = 0
    }
    translation()
  }
}

function onSwipeEnd() {
  dragging = false;
  const dx = x - startX;
  const dy = y - startY;
  if (Math.abs(dx) >= horizontalThreshold) {
    if (dx > 0) {
      props.onSwipeRight();
    } else {
      props.onSwipeLeft();
    }
    currentIndex += 1;
  }
  if (Math.abs(dy) >= verticalThreshold) {
    if (dy < 0) {
      props.onSwipeUp();
    }
  }
  x = startX
  y = startY
  likeOpacity = 0
  dislikeOpacity = 0
  superlikeOpacity = 0
  translation()
}

function onMouseDown(e: any) {
  dragging = true
  startX = e.clientX;
  startY = e.clientY;
  x = startX
  y = startY
}

function animateXPosition(targetX:number, duration:number) {
    const distanceX = startX + targetX;
    const startTime = Date.now();
    const endTime = startTime + duration;
    function updatePosition() {
        const currentTime = Date.now();
        const elapsed = Math.min(duration, currentTime - startTime);
        const progress = elapsed / duration;
        translateX.value = startX + distanceX * progress;
        if (currentTime < endTime) {
            requestAnimationFrame(updatePosition);
        }
    }

    requestAnimationFrame(updatePosition);
}
function onMouseMove(e: any) {
  if (dragging) {
    currentX = e.clientX;
    currentY = e.clientY;
    const deltaX = currentX - x;
    const deltaY = currentY - y;
    x += deltaX
    y += deltaY

    if (x - startX > 0) {
      likeOpacity = (Math.abs(x - startX) / horizontalThreshold)
    } else {
      dislikeOpacity = (Math.abs(x - startX) / horizontalThreshold)
    }
    if (y - startY < 0) {
      superlikeOpacity = (Math.abs(y - startY) / verticalThreshold)
    }
    translation()
  }
}

function changeToBack() {
  degreesFront.value = "180deg"
  degreesBack.value = "0deg"
}

function changeToFront() {
  degreesFront.value = "0deg"
  degreesBack.value = "-180deg"
}

</script>

<style lang="scss" scoped>
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

@mixin mobile($size: 640px) {
  @media screen and (max-width: $size) {
    @content;
  }
}

.blur {
  filter: blur(4px);
}

.card {
  color: inherit;
  cursor: pointer;
  min-width: 300px;
  max-width: 400px;
  max-height: 600px;
  perspective: 1000px;
  margin: 1rem;
  grid-row-start: 1;
  grid-column-start: 1;
  justify-self: center;
  transform: translate(v-bind(x));

  .like-film, .dislike-film, .superlike-film {
    color: black;
    position: absolute;
    z-index: 999;
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.6);
    top: 4rem;
    font-size: 4rem;
    font-weight: 900;
    border-style: solid;
    border-radius: 1rem;
    border-width: 5px;
  }

  .like-film {
    color: green;
    right: 3rem;
    transform: rotateZ(30deg);
  }

  .dislike-film {
    color: red;
    left: 3rem;
    transform: rotateZ(-30deg);
  }

  .superlike-film {
    color: dodgerblue;
    top: 50%;
    left: 0;
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

  .film-info-button {
    position: absolute;
    margin: 1rem 1rem;
    bottom: 0;
    border: none;
    border-radius: 1rem;
    padding: 0.5rem;

    &:hover{
      cursor: pointer;
    }
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

  .film-title, .film-gender {
    border-radius: 1rem;
    background-color: black;
    opacity: 0.7;
    padding: 0.5rem 0.5rem;
  }

  .film-rating {
    color: $dark-color;
    position: absolute;
    margin: 1rem 1rem;
    background-color: yellow;
    border-radius: 4rem;
    padding: .5rem 0.5rem;
    left: 0;
    top: 0;
  }

  .age-rating {
    position: absolute;
    margin: 1rem 1rem;
    background-color: orangered;
    border-radius: 4rem;
    padding: .5rem 0.5rem;
    right: 0;
    top: 0;
  }
}

.back {
  background: #fff;
  transform: rotateY(-180deg);
  padding: 0 2em;
  color: black;
}

</style>