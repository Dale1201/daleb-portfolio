<script setup>
import Burger from "../UI/burger/Burger.vue";
</script>

<template>
  <section id="technologies">
    <h1>Techstack</h1>
    <Burger />
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid $dark-text;
  min-height: 40rem;
  padding-left: 2rem;
}
h1 {
  @include heading;
  text-align: center;
  margin-bottom: 5rem;
}
</style>
