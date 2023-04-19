<template>
    <div class="overlay" v-show="showOverlay"></div>
    <sidebar-menu @change="handleSignal"></sidebar-menu>
    <div class="container" v-if="!showOverlay">
        <button :class="{'has-changed': clicked }" @click="handleClick" class="filter-button">{{ buttonText }}</button>
    </div>
    <transition name="blind">
        <div class="filters-container" v-if="clicked & !showOverlay">
            <div class="filter">
                <CheckBoxFilter :content="inputLabels"></CheckBoxFilter>
            </div>
            <hr>
            <div class="filter">
                <RangeSlider></RangeSlider>
            </div>
        </div>
    </transition>
    <div id="wrap" class="wrap">
        <div  class="card" v-for="(film,index) in store.getFilmsList" :key="film.filmId">
            <div id="front" class="front" v-bind:style="{ 'background-image': 'url(' + film.filmImage + ')' ,
                                          'transform': 'rotateY(' + degreesFront+ ')'}">
                <div class="film-rating">{{film.valueRating}}</div>
                <div class="age-rating">{{film.ageRating}}</div>
                <h3 class="film-title">{{ film.name }}<br>{{film.year }}</h3>
                <h5 class="film-gender">{{film.gender}}</h5>
                <button class="film-info-button" @click="changeToBack(index)">info</button>
            </div>
            <div id="back" class="back" v-bind:style="{'transform': 'rotateY(' + degreesBack+ ')'}">
                <div class="film-synopsis">
                    <h3>Synopsis</h3>
                    <h4>{{ film.synopsys }}</h4>
                </div>
                <div class="film-cast">
                    <h3>Cast</h3>
                    <h4>{{film.cast}}</h4>
                </div>
                <div class="film-director">
                    <h3>Director</h3>
                    <h4>insert text here</h4>
                </div>
                <button class="film-info-button" @click="changeToFront(index)">return</button>
            </div>
        </div>
    </div>

</template>

<script setup>


import RangeSlider from "@/components/RangeSlider.vue";
import CheckBoxFilter from "@/components/CheckBoxFilter.vue";
import {ref} from "vue";
import SidebarMenu from "@/components/SidebarMenu.vue";
import {useResultStore} from "@/stores/FilmResultStore";
import SwipeCard from "@/components/SwipeCard.vue";


const store = useResultStore()
let display = "none";
let clicked = ref(false)
let showOverlay= ref(false)
let buttonText = "Filters"

function changeToBack(index) {
    let wrap = document.getElementById("wrap");
    let divs = wrap.getElementsByClassName("card");
    let div = divs[index];
    let front = div.getElementsByClassName("front")
    let back = div.getElementsByClassName("back")
    back[0].style.transform = "rotateY(0deg)"
    front[0].style.transform = "rotateY(180deg)"
}

function changeToFront(index) {
    let wrap = document.getElementById("wrap");
    let divs = wrap.getElementsByClassName("card");
    let div = divs[index];
    let front = div.getElementsByClassName("front")
    let back = div.getElementsByClassName("back")
    back[0].style.transform = "rotateY(-180deg)"
    front[0].style.transform = "rotateY(0deg)"
}

const inputLabels = {
    legend: "Choose gender",
    type: "checkbox",
    inputLabels: [
        {
            input: {
                name: "drama",
                id: "drama",
                value: "Drama"
            },
            label: {
                for: "drama",
                text: "Drama"
            }
        },
        {
            input: {
                name: "comedia",
                id: "comedia",
                value: "Comedia"
            },
            label: {
                for: "comedia",
                text: "Comedia"
            }
        },
    ]
}

function handleClick() {
    clicked.value = !clicked.value;
    if (clicked.value) {
        buttonText = '⛌';
        display = "grid"
    } else {
        buttonText = "Filters"
        display = "none"
    }
}
function handleSignal(data) {
    showOverlay.value = !showOverlay.value
}
</script>

<style scoped lang="scss">
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($dark-color, 0.5); /* semi-transparent black */
  z-index: 99; /* set a high z-index to ensure it appears on top */
}

.container {
  z-index: 100;
  max-width: 100vw;
  position: fixed;
  top: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
}

.filter-button {
  border-style: none;
  color: white;
  background-color: $dark-color;
  width: fit-content;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;
  z-index: 100;
  &:hover {
    cursor: pointer;
  }

  transition: all 0.5s ease;
}

.has-changed {
  transform: rotateY(180deg);
}

.filters-container {
  display: grid;
  position: fixed;
  width: 100vw;
  justify-content: center;
  top: 4rem;
  background-color: $dark-color;
  padding: 1rem 1rem 1rem 1rem;
  z-index: 9999;
  .filter {
    max-width: 90vw;
    padding: 0.5rem 0.5rem;
  }
}

.wrap{
    z-index: 0;
    width: 100%;
    height:auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 5rem 1rem;
    .card{
        margin: 1rem 1rem;
        width: 300px;
        height: 500px;
    }
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




/**Animation to show*/
.blind-enter-active {
  transition: transform 0.5s;
}
.blind-enter-from {
  transform: scaleY(0);
}
.blind-enter-to {
  transform: scaleY(1);
}
/**Animation to close*/
.blind-leave-active {
  transition: transform 0.5s;
}
.blind-leave-to {
  transform: scaleY(0);
}


</style>