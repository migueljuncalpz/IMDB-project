<template>
  <fieldset>
    <legend> Duration (Min)</legend>
    <div class='range-slider'>
      <div class="numbers-container">
        <input type="number" min="0" max="180" step="1" v-model="sliderMin">
        <input type="number" min="0" max="180" step="1" placeholder="min" v-model="sliderMax">
      </div>
      <input type="range" min="0" max="180" step="1" v-model="sliderMin">
      <input type="range" min="0" max="180" step="1" v-model="sliderMax">
    </div>
  </fieldset>
</template>

<script>
export default {
  name: "RangeSlider",
  data(){
    return{
      minAngle: 10,
      maxAngle: 30
    }
  },
  computed: {
    sliderMin: {
      get: function() {
        var val = parseInt(this.minAngle);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val > this.maxAngle) {
          this.maxAngle = val;
        }
        this.minAngle = val;
      }
    },
    sliderMax: {
      get: function() {
        var val = parseInt(this.maxAngle);
        return val;
      },
      set: function(val) {
        val = parseInt(val);
        if (val < this.minAngle) {
          this.minAngle = val;
        }
        this.maxAngle = val;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$dark-color: #1a1e24;
$rose-color: #D9247B;
$bone-color: #E4DCCF;
$white-color: #98DFD6;


.range-slider {
  width: 100%;
  margin: auto;
  text-align: center;
  position: relative;
  height: 2em;

  .numbers-container{
    display: flex;
    justify-content: space-between;
    padding: 0.3em 0em;
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
      animate: 0.2s;
      background: white;
      border-radius: 1px;
      box-shadow: none;
      border: 0;
    }

    &::-webkit-slider-thumb {
      z-index: 2;
      position: relative;
      box-shadow: 0px 0px 0px #000;
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