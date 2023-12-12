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
    <div class="lettuce"></div>
    <div class="tomato"></div>
    <div class="cheese"></div>
    <div class="patty"></div>
    <div class="heel"></div>
  </div>
</template>

<style scoped lang="scss">
.burger {
  width: 320px;
  height: 255px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
}

.crown {
  background-color: #e5cb7a;
  position: relative;
  height: 39%;
  width: 94%;
  border-radius: 200px 200px 0 0;
}

.lettuce {
  background-color: #32c704;
  height: 4%;
  width: 94%;
  border-radius: 0 0 50px 50px;
}

.tomato {
  background-color: #ec3521;
  height: 6%;
  width: 94%;
  border-radius: 5px;
}

.cheese {
  background-color: #ffd766;
  height: 4%;
  width: 98%;
  border-radius: 50px 50px 0px 0px;
}

.patty {
  background-color: #450101;
  height: 20%;
  width: 100%;
  border-radius: 40px 40px 20px 20px;
}

.heel {
  background-color: #e5cb7a;
  height: 27.45%;
  width: 94%;
  border-radius: 0 0 50px 50px;
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
