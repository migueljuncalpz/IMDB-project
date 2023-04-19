<template>
  <div class="sidebar" :style="{ transform: sidebarTransform }">
    <div class="content">
        <div class=" avatar">
            <img src="../assets/images/User.svg">
        </div>
        <button class="option">My liked Films</button>
      <button class="option">My liked Series</button>
    </div>
  </div>
  <button class="menu-button" @click="toggleSidebar">{{ buttonContent }}</button>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const isSidebarOpen = ref(false)
const buttonContent = ref('☰')
let emit = defineEmits(['change'])

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
  if (isSidebarOpen.value) {
    buttonContent.value = '⛌'
    emit('change', isSidebarOpen.value)
  } else {
    buttonContent.value = '☰'
    emit('change', isSidebarOpen.value)
  }
}

const sidebarTransform = computed(() => {
  return isSidebarOpen.value ? 'translateX(0)' : 'translateX(-100%)'
})
</script>

<style lang="scss">
$dark-color: #1a1e24;
$rose-color: #d9247b;
$bone-color: #e4dccf;
$white-color: #98dfd6;
.sidebar {
  background: $dark-color;
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out;
  z-index: 9998;

  .content {
    padding-top: 4rem;
    display: grid;
    justify-content: center;
    .option {
      padding-top: 2rem;
      color: inherit;
      background: inherit;
      border: none;
      font-size: 1.5rem;

      &:hover {
        cursor: pointer;
      }
    }
    .avatar{
      background-color: white;
      border-radius: 6rem;
      padding: 1em 1em;
    }
  }
}

.menu-button {
  left: 0;
  top:0;
  position: fixed;
  border-style: none;
  color: white;
  background-color: $dark-color;
  width: fit-content;
  margin: 1rem 1rem;
  padding: 0.5rem 0.5rem;
  border-radius: 1rem;

  &:hover {
    cursor: pointer;
  }

  transition: all 0.5s ease;
  z-index: 9999;
}

/* Add hamburger menu icon styles here */
</style>
