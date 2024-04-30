<script setup>
import MainHeader from "./components/layout/MainHeader.vue";
import Home from "./components/sections/Home.vue";
import Experience from "./components/sections/Experience.vue";
import Projects from "./components/sections/Projects.vue";
import Techstack from "./components/sections/Techstack.vue";
import AboutMe from "./components/sections/AboutMe.vue";
import gsap from "gsap";
import { onMounted } from "vue";

onMounted(() => {
  gsap.from(".header", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "ease-in",
  });
})


</script>

<template>
  <MainHeader class="header" />
  <Home />
  <!-- <AboutMe /> -->
  <Experience />
  <Projects />
  <Techstack />
</template>

<style scoped lang="scss"></style>
