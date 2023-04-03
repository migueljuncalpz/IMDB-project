<template>
  <fieldset>
    <legend>CHOOSE GENDER</legend>
    <input type="checkbox" name="gender" id="noneGender" v-on:change="setGenderFilter" v-model="gender" value="">
    <label for="noneGender">NONE</label>
    <input type="checkbox" name="gender" id="male" v-on:change="setGenderFilter" v-model="gender" value="male">
    <label for="male">MALE</label>
    <input type="checkbox" name="gender" id="female" v-on:change="setGenderFilter" v-model="gender" value="female">
    <label for="female">FEMALE</label>
    <input type="checkbox" name="gender" id="unknownGender" v-on:change="setGenderFilter" v-model="gender" value="unknown">
    <label for="unknownGender">UNKNOWN</label>
  </fieldset>
</template>

<script>
export default {
  name: "CheckBoxFilter"
}
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
  }
  input[type="checkbox"] {
    display:none;
    &:checked + label {
      font-weight: bold;
    }
  }
  legend{
    font-style: italic;
  }
}
</style>