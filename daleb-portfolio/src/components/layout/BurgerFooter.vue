<script setup>
import { ref } from "vue";

import Burger from "../UI/burger/Burger.vue";
import Pickle from "../UI/burger/Pickle.vue";


const isBurgerShot = ref(false);
function shootBurger() {
  isBurgerShot.value = !isBurgerShot.value;
}
</script>

<template>
  <div class="footer">
    <Pickle />
    <Burger @click="shootBurger" :is-shot="isBurgerShot" :class="{ 'burger-shot': isBurgerShot }" />
    <Pickle />
  </div>
</template>


<style scoped lang="scss">
.footer {
    position: fixed;
  bottom: 0;
  width: 100%;
  height: 6.8rem;
  display: flex;
  gap: 2rem;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  padding-bottom: 5px;

  .pickle {
    animation: pickleAnimation 17s infinite linear, moveAcrossScreen 20s linear infinite running;
    position: relative;
    left: -30%;
  }
  .burger {
    width: 5rem;
    height: 4.7rem;
    position: relative;
    animation: bounce 1s infinite running, moveAcrossScreen 20s linear infinite running
  }
  .burger-shot {
    animation-play-state: paused;
    transform: translateY(0) ;
  }
}
</style>