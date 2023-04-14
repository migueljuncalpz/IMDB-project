<template>
  <fieldset>
    <legend>Duration (Min)</legend>
    <div class='range-slider'>
      <div class="numbers-container">
        <input type="number" min="0" max="180" step="1" v-model="sliderMin">
        <input type="number" min="0" max="180" step="1" v-model="sliderMax">
      </div>
      <input type="range" min="0" max="180" step="1" v-model="sliderMin">
      <input type="range" min="0" max="180" step="1" v-model="sliderMax">
    </div>
  </fieldset>
</template>
<script setup>

import { reactive, computed } from 'vue';

const state = reactive({
    minAngle: 10,
    maxAngle: 30,
});

const sliderMin = computed({
    get: () => parseInt(state.minAngle),
    set: (val) => {
        val = parseInt(val);
        if (val > state.maxAngle) {
            state.maxAngle = val;
        }
        state.minAngle = val;
    },
});

const sliderMax = computed({
    get: () => parseInt(state.maxAngle),
    set: (val) => {
        val = parseInt(val);
        if (val < state.minAngle) {
            state.minAngle = val;
        }
        state.maxAngle = val;
    },
});
</script>



<style lang="scss" scoped>
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;

.range-slider {
  margin: auto;
  text-align: center;
  position: relative;
  height: 2em;
  .numbers-container{
    display: flex;
    justify-content: space-between;
    padding: 0.3em 0;
    input[type=number]{
      margin-left: 1rem;
      background-color: $dark-color;
      border: none;
      color: white;
    }
  }
  input[type=range]{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    -webkit-appearance: none;

    &::-webkit-slider-runnable-track {
      width: 100%;
      height: 5px;
      cursor: pointer;
      background: white;
      border-radius: 1px;
      box-shadow: none;
      border: 0;
    }

    &::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      box-shadow: 0 0 0 #000;
      height: 18px;
      width: 18px;
      border-radius: 25px;
      background: $rose-color;
      cursor: pointer;
      -webkit-appearance: none;
      margin-top: -7px;
    }

    &:focus{
      outline: none;

      &::-webkit-slider-runnable-track {
        background: white;
      }
      &::-ms-fill-lower {
        background: white;
      }
      &::-ms-fill-upper {
        background: white;
      }
    }

  }
}
</style>