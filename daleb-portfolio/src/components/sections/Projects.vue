<script setup>
import InfoBadge from "../UI/InfoBadge.vue";
import WebsiteLogo from "../UI/WebsiteLogo.vue";
import { onMounted, onUnmounted, ref } from "vue";

let interval;
onMounted(() => {
  interval = setInterval(() => {
    incrementCarousel();
  }, 2000);
});

onUnmounted(() => {
  clearInterval(interval);
});
// Carousel logic
const carouselIndex = ref(0);
const carouselItems = ref([
  "/weather-booking-app/wba-home.png",
  "/weather-booking-app/wba-booking-confirm.png",
  "/weather-booking-app/wba-booking-details.png",
]);

function incrementCarousel() {
  carouselIndex.value++;

  if (carouselIndex.value > carouselItems.value.length - 1) {
    carouselIndex.value = 0;
  }
}
</script>

<template>
  <section id="projects">
    <h1>Projects</h1>
    <h2>Mr Bluesky - Weather Booking App</h2>
    <div class="info-badge-container">
      <InfoBadge> 2023 </InfoBadge>
      <InfoBadge> React </InfoBadge>
      <InfoBadge> Typescript </InfoBadge>
      <InfoBadge> HTML/CSS </InfoBadge>
      <WebsiteLogo
        url="https://github.com/chessworld/weather-booking-client"
        icon="fa-brands fa-github"
        class="github-logo"
      />
    </div>

    <div class="booking-app-content">
      <div style="display: flex; flex-direction: column; align-items: center">
        <div class="logo-container">
          <img src="/weather-booking-app/mr_bluesky_logo.png" alt="Mr Bluesky" />
        </div>
        <p class="booking-blurb">
          Have a special occasion coming up? <br />
          Need a certain weather...? <br />
          Then book it!
        </p>
        <b class="booking-blurb special-text">Introducing Mr Bluesky {{ "&nbsp;".repeat(18) }} </b>
      </div>
      <div style="display: flex; justify-content: center; min-height: 28rem">
        <div class="img-container" v-if="false">
          <img src="/weather-booking-app/wba-home.png" alt="Mr Bluesky" />
        </div>
        <div style="display: flex; flex-direction: column">
          <div class="img-container">
            <img :src="carouselItems[carouselIndex]" alt="Mr Bluesky" />
          </div>
          <div class="carousel__dots">
            <span
              v-for="(item, index) in carouselItems"
              :key="index"
              :class="{ 'dot-active': carouselIndex === index }"
              @click="carouselIndex = index"
            ></span>
          </div>
        </div>
      </div>
    </div>
    <div style="margin: 5rem 0 8rem 0;">
      <h2>Youtube Clone - WIP</h2>
      <div class="info-badge-container">
        <InfoBadge> 2024 </InfoBadge>
        <InfoBadge> React - Next.js </InfoBadge>
        <InfoBadge> Nodejs </InfoBadge>
        <InfoBadge> Firebase </InfoBadge>
        <WebsiteLogo url="https://github.com/Dale1201/youtube-clone" icon="fa-brands fa-github" class="github-logo" />
      </div>
      <div style="margin-top: 2rem">
        <p>A simple webapp with that will allow users to upload and view their videos.</p>
        <p>React front-end and Nodejs backend with Firestore as the database</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid $dark-text;
  min-height: 40rem;
  padding: 0 2rem;
}
h1 {
  @include heading;
  text-align: center;
}

h2 {
  font-weight: normal;
}

.info-badge-container {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.github-logo {
  display: inline-block;
  width: 2rem;
}

.booking-app-content {
  display: grid;
  gap: 2rem;
  padding: 2rem 0;
  @media (min-width: 50rem) {
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
}

.logo-container {
  height: fit-content;
}
.booking-blurb {
  text-align: justify;
  display: flex;
  justify-content: center;
}

.special-text {
  @include special-text;
}

.img-container {
  max-width: 14rem;
  padding: 1rem;
  @media (min-width: 40rem) {
    padding: 0;
  }
}

.carousel__dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;

  span {
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: $dark-text;
    cursor: pointer;
  }
  .dot-active {
    background-color: $clr-primary;
  }
}
</style>
