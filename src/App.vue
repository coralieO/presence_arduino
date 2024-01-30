<script setup>
import Menu from './layout/Menu.vue';
</script>

<template>
  <div class="grid grid-cols-6 h-screen">
    <Menu class=""></Menu>
    <router-view class="col-span-5"></router-view>
  </div>
</template>

<style scoped>

</style>
