
<template>
  <router-view v-slot="{Component}">
    <transition name="router" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>
</template>

<style lang="scss" scoped>

/*Route transitions*/

.router-enter-active,
.router-leave-active {
  transition: all 0.5s ease;
}
.router-enter-from,
.router-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

</style>
<script setup lang="ts">
</script>