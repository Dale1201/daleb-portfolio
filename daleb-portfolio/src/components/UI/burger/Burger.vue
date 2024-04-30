<script setup>
const props = defineProps({
  isShot: Boolean,
});

</script>

<template>
  <div class="burger" :class="{ 'dead-burger': isShot }">
    <div class="crown">
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="beat-up" v-if="isShot">#</div>
    </div>
    <div class="blood-drop" v-if="isShot"></div>
    <div class="blood-drop" v-if="isShot"></div>
    <div class="tomato"></div>
    <div class="patty">
      <div class="cheese"></div>
    </div>
    <div class="lettuce">
      <div class="lettuce__circle"></div>
      <div class="lettuce__circle"></div>
      <div class="lettuce__circle"></div>
      <div class="lettuce__circle"></div>
      <div class="lettuce__circle"></div>
      <div class="lettuce__circle"></div>
    </div>
    <div class="heel"></div>
    <div class="blood-pool" v-if="isShot"></div>
  </div>
</template>

<style scoped lang="scss">
$border-width: 1px;

.dead-burger {
  .crown {
    left: 10%;
  }

  > .blood-drop {
    height: 0.8rem;
    width: 0.5rem;
    top: 50%;
    left: 50px;
    rotate: 40deg;
  }

  > .blood-drop:nth-child(2) {
    height: 0.8rem;
    width: 0.5rem;
    top: 70%;
    left: 50px;
    rotate: 10deg;
  }
}

.blood-drop {
  background-color: #f83030;
  position: absolute;
  border-radius: 33% 67% 0% 100% / 33% 100% 0% 67%;
  z-index: 1;
}

.blood-pool {
  background-color: #f83030;
  position: absolute;
  border-radius: 50%;
  bottom: -10%;
  height: 10px;
  width: 105%;
  z-index: 1;
}

.burger {
  width: 320px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crown {
  background-color: #fcba7f;
  position: relative;
  height: 35%;
  width: 94%;
  border-radius: 200px 200px 0 0;
  border: $border-width solid #472b29;

  .beat-up {
    position: absolute;
    top: 20%;
    left: 70%;
    rotate: 140deg;
    font-size: 1rem;
    font-weight: 100;
    user-select: none;
  }
}

.lettuce {
  background-color: #60be92;
  display: flex;
  border-radius: 5px 5px 0 0;
  border: $border-width solid #472b29;

  .lettuce__circle {
    background-color: #60be92;
    height: 8px;
    width: 14px;
    border-radius: 50%;
    position: relative;
    top: 50%;
    border-bottom: $border-width solid #472b29;
  }
}

.tomato {
  background-color: #f15b6c;
  height: 12%;
  width: 100%;
  border-radius: 2px;
  border-left: $border-width solid #472b29;
  border-right: $border-width solid #472b29;
}

.cheese {
  background-color: #ffd766;
  height: 4%;
  width: 98%;
  border-radius: 50px 50px 0px 0px;
}

.patty {
  background-color: #b77748;
  height: 18%;
  width: 102%;
  border-radius: 4px;
  border: $border-width solid #472b29;

  .cheese {
    background-color: #fef6aa;
    width: 98%;
    // clip-path: polygon(100% 0, 66% 29%, 29% 100%, 18% 43%, 0 0);
    clip-path: polygon(85% 1%, 64% 24%, 29% 100%, 18% 43%, 0 0);
    height: 70%;
    position: relative;
  }
}

.heel {
  background-color: #fcba7f;
  height: 20%;
  width: 92%;
  border-radius: 0 0 5px 5px;
  border: $border-width solid #472b29;
}
.sesame {
  background-color: #fff2cc;
  position: absolute;
  height: 2%;
  width: 4%;
  min-width: 2px;
  min-height: 1px;
  border-radius: 10px 0 0 10px;
  transform-origin: 100% 100%;
  animation: sesame 1s infinite alternate;

  &:first-child {
    top: 10%;
    left: 50%;
    rotate: 10deg;
  }
  &:nth-child(2) {
    top: 20%;
    left: 80%;
    rotate: 20deg;
  }
  &:nth-child(3) {
    top: 30%;
    left: 55%;
    rotate: 30deg;
  }
  &:nth-child(4) {
    top: 50%;
    left: 20%;
    rotate: 40deg;
  }
  &:nth-child(5) {
    top: 70%;
    left: 70%;
    rotate: 140deg;
  }
  &:nth-child(6) {
    top: 72%;
    left: 35%;
    rotate: 60deg;
  }
  &:nth-child(7) {
    top: 77%;
    left: 10%;
    rotate: 135deg;
  }
  &:nth-child(8) {
    top: 80%;
    left: 60%;
    rotate: 80deg;
  }
}
</style>
