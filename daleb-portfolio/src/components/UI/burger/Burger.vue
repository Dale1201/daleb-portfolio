<script setup>
import Patty from "./Patty.vue";
import Crown from "./Crown.vue";
import Heel from "./Heel.vue";
import Cheese from "./Cheese.vue";
import Lettuce from "./Lettuce.vue";
import Tomato from "./Tomato.vue";
</script>

<template>
  <div class="burger">
    <Crown class="crown" />
    <Lettuce class="lettuce" />
    <!-- <div style="margin: 2rem"></div> -->
    <Tomato class="tomato" />
    <!-- <div style="margin: 2rem"></div> -->
    <Cheese class="cheese" />
    <!-- <div style="margin: 2rem"></div> -->
    <Patty class="patty" />
    <!-- <div style="margin: 2rem"></div> -->
    <Heel class="heel" />
  </div>
</template>

<style scoped lang="scss">
.burger {
  position: relative;
}

%transition {
  margin-bottom: 2rem;
  transition: ease-in-out 0.5s;
}
.crown {
  &:hover {
    @extend %transition;
  }
}

.lettuce {
  &:hover {
    @extend %transition;
  }
}

.tomato {
  &:hover {
    @extend %transition;
  }
}

.cheese {
  &:hover {
    @extend %transition;
  }
}

.patty {
  &:hover {
    @extend %transition;
  }
}

.heel {
  &:hover {
    margin-top: 2rem;
    transition: ease-in-out 0.5s;
  }
}
</style>
