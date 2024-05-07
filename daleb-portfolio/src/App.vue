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
  const t1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".experience",
      start: "top 70%", 
      end: "40% 70%",
      scrub: 1,
      // toggleActions: "restart pause reverse pause",
    }
  })

  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects",
      start: "top 70%", 
      end: "20% 70%",
      scrub: 1,
    }
  })

  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".techstack",
      start: "top 70%", 
      end: "50% 70%",
      scrub: 1,
    }
  })

  t1.from(".experience", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "ease-in",
  })

  t2.from(".projects", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "ease-in",
  })

  t3.from(".techstack", {
    duration: 1,
    x: -100,
    opacity: 0,
    ease: "ease-in",
  })
})


</script>

<template>
  <MainHeader class="header" />
  <Home />
  <!-- <AboutMe /> -->
  <Experience class="experience" />
  <Projects class="projects"  />
  <Techstack class="techstack" />
</template>

<style scoped lang="scss"></style>
