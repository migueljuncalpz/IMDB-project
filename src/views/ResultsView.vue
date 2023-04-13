<template>
    <div class="overlay" v-show="showOverlay"></div>
    <div class="container">
        <sidebar-menu @change="handleSignal"></sidebar-menu>
        <button :class="{'has-changed': clicked }" @click="handleClick" class="filter-button">{{ buttonText }}</button>
    </div>
    <transition name="blind">
        <div class="filters-container" v-if="clicked">
            <div class="filter">
                <CheckBoxFilter :content="inputLabels"></CheckBoxFilter>
            </div>
            <hr>
            <div class="filter">
                <RangeSlider></RangeSlider>
            </div>
        </div>
    </transition>
</template>

<script setup>
import RangeSlider from "@/components/RangeSlider.vue";
import CheckBoxFilter from "@/components/CheckBoxFilter.vue";
import {ref} from "vue";
import SidebarMenu from "@/components/SidebarMenu.vue";

let display = "none";
let clicked = ref(false)
let showOverlay= ref(false)
let buttonText = "Filters"

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
  position: sticky;
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
  position: sticky;
  justify-content: center;
  top: 4rem;
  background-color: $dark-color;
  padding: 1rem 1rem 1rem 1rem;

  .filter {
    max-width: 90vw;
    padding: 0.5rem 0.5rem;
  }
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