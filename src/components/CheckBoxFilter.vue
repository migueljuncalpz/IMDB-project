<template>
  <fieldset>
    <legend>{{$props.content.legend}}</legend>
      <div class="wrap">
          <div class="content" v-for="(input,key) in $props.content.inputLabels" :key="key">
              <input :type="$props.content.type" :name="input.input.name" :id="input.input.id" :value="input.input.value">
              <label :for="input.label.for">{{input.label.text}}</label>
          </div>
      </div>
  </fieldset>
</template>


<script setup lang="ts">
import {type PropType } from 'vue'

interface InputLabel{
  input:{
    name:String,
    id:String,
    value:String
  },
  label:{
    for:String,
    text:String
  }
}
export interface Content{
  legend:String,
  type:String,
  inputLabels: Array<InputLabel>
}
defineProps({
    content:{
      type: Object as PropType<Content>,
      required:true,
      default:()=>null,
    }
})

</script>

<style lang="scss" scoped>
.wrap{
  height: auto;
  overflow: auto;
  max-width: 90vw;
  width: auto;
  display: flex;
  justify-content: space-around;
  border-left-style: none;
  border-right-style: none;
  .content {
    padding: 0.5rem 1rem;
    label {
      margin-left: 1em;
      display: inline-block;

      &:hover {
        cursor: pointer;
      }
    }

    input[type="checkbox"] {
      display: none;

      &:checked + label {
        font-weight: 900;
        font-style: italic;
      }
    }

    legend {
      font-style: italic;
    }
  }

  ::-webkit-scrollbar {
    width: 20px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: red;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
}
</style>