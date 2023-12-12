<template>
  <div class="pickle">
    <div class="outer-layer">
      <div class="inner-layer">
        <div class="seeds"></div>
        <div class="seeds"></div>
        <div class="seeds"></div>
        <div class="seeds"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.pickle {
  width: 3rem;
  height: 3rem;
  border-radius: 45%;
  background-color: #5e6203;
  display: grid;
  place-items: center;
}

.outer-layer {
  width: 2.8rem;
  height: 2.8rem;
  background-color: #e2d344;
  color: #e2d344;
  border-radius: 45%;
  border: none;
  border-style: solid;
  display: grid;
  place-items: center;
}

.inner-layer {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 62% 24% 24% 40% / 68% 34% 20% 30%;
  background-color: #c9a81b;
  position: relative;
}

.seeds {
  height: 2px;
  width: 5px;
  border-radius: 0% 100% 19% 80% / 0% 77% 21% 100%;
  background-color: #e2d344;
  position: absolute;

  &:first-child {
    top: 10%;
    left: 50%;
    rotate: 10deg;
  }

  &:nth-child(2) {
    top: 13%;
    left: 20%;
    rotate: 120deg;
  }

  &:nth-child(3) {
    top: 50%;
    left: 20%;
    rotate: 40deg;
  }

  &:nth-child(4) {
    top: 70%;
    left: 55%;
    rotate: 140deg;
  }
}
</style>
