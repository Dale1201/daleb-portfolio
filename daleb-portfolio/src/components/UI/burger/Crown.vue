<template>
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
</template>

<style scoped lang="scss">
.crown {
  background-color: #e5cb7a;
  position: relative;
  left: 50%;
  top: 50px;
  transform: translate(-50%, -50%);
  height: 100px;
  width: 250px;
  border-radius: 200px 200px 0 0;
}

.sesame {
  background-color: #fff2cc;
  position: absolute;
  height: 3px;
  width: 10px;
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
