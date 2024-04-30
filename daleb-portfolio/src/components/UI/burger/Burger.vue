<script setup></script>

<template>
  <div class="burger">
    <div class="crown">
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
      <div class="sesame"></div>
    </div>
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
    <div class="triangle"></div>
  </div>
</template>

<style scoped lang="scss">
$border-width: 1px;

.burger {
  width: 320px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.crown {
  background-color: #F1BC19;
  position: relative;
  height: 35%;
  width: 94%;
  border-radius: 200px 200px 0 0;
  border: $border-width solid #472B29;
}

.lettuce {
  background-color: #32c704;
  display: flex;
  border-radius: 5px 5px 0 0;
  border: $border-width solid #472B29;


  .lettuce__circle {
    background-color: #32c704;
    height: 8px;
    width: 14px;
    border-radius: 50%;
    position: relative;
    top: 50%;
    border-bottom: $border-width solid #472B29;
  }
}

.tomato {
  background-color: #ec3521;
  height: 12%;
  width: 100%;
  border-radius: 2px;
  border-left: $border-width solid #472B29;
  border-right: $border-width solid #472B29;
}

.cheese {
  background-color: #ffd766;
  height: 4%;
  width: 98%;
  border-radius: 50px 50px 0px 0px;
}

.patty {
  background-color: #6a0606;
  height: 18%;
  width: 102%;
  border-radius: 4px;
  border: $border-width solid #472B29;

  .cheese {
    background-color: #ffd766;
    width: 98%;
    // clip-path: polygon(100% 0, 66% 29%, 29% 100%, 18% 43%, 0 0);
    clip-path: polygon(85% 1%, 64% 24%, 29% 100%, 18% 43%, 0 0);
    height: 70%;
    position: relative;
  }
}

.heel {
  background-color: #F1BC19;
  height: 20%;
  width: 92%;
  border-radius: 0 0 5px 5px;
  border: $border-width solid #472B29;
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
