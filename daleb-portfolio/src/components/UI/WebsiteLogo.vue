<script setup>
defineProps({
  url: String,
  icon: String,
  colour: {
    type: String,
    default: "gray",
  },
});
</script>

<template>
  <a :href="url"><i :class="icon" :style="{ color: colour }"></i></a>
</template>

<style scoped lang="scss">
a {
  font-size: 1rem;
  color: white;
  background: transparent;
  padding: 0;
  vertical-align: middle;

  i {
    vertical-align: middle;
    font-size: 2rem;
    color: gray;
  }
}
</style>
