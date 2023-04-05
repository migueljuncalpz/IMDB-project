<template>
  <fieldset v-if="content!==null">
    <legend>{{this.content.legend}}</legend>
    <div class="content" v-for="input in content.inputLabels" :key="input">
      <input :type="this.content.type" :name="input.input.name" :id="input.input.id">
      <label :for="input.label.for">{{input.label.text}}</label>
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
      required:false,
      default:()=>null,
    }
})

</script>

<style lang="scss" scoped>
fieldset{
  width: auto;
  display: flex;
  justify-content: space-around;
  border-left-style: none;
  border-right-style: none;
  label {
    margin-left: 1em;
    display: inline-block;
    &:hover{
      cursor: pointer;
    }
  }
  input[type="checkbox"] {
    display:none;
    &:checked + label {
      font-weight: 900;
      font-style: italic;
    }
  }
  legend{
    font-style: italic;
  }
}
</style>