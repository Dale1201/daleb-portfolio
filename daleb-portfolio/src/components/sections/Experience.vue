<script setup>
import InfoBadge from "../UI/InfoBadge.vue";
import { onMounted, onUnmounted, ref } from "vue";

let interval;
onMounted(() => {
  interval = setInterval(() => {
    incrementCarousel();
  }, 5000);
});

onUnmounted(() => {
  clearInterval(interval);
});
// Carousel logic
const carouselIndex = ref(0);
const carouselItems = ref([
  {
    title: "Shane Arnold - Senior Architect",
    text: "Dale is amazing, Dale is amazing. Dale is amazing. Dale is amazing. Dale is amazing. Dale is amazing",
    image: "/src/assets/anywise/shane.png",
  },
  {
    title: "Christopher Dennis - Senior Consultant",
    text: "Dale is a ball of sunshine",
    image: "/src/assets/anywise/chrisd.png",
  },
  {
    title: "Placeholder",
    text: "Placeholder",
    image: "/src/assets/placeholder.webp",
  },
]);

function incrementCarousel() {
  carouselIndex.value++;

  if (carouselIndex.value > carouselItems.value.length - 1) {
    carouselIndex.value = 0;
  }
}

function decrementCarousel() {
  carouselIndex.value--;

  if (carouselIndex.value < 0) {
    carouselIndex.value = carouselItems.value.length - 1;
  }
}
</script>

<template>
  <section>
    <h1>Experience</h1>
    <h2>Software Engineer Intern - Anywise</h2>
    <div class="info-badge-container">
      <InfoBadge> 2022 - 2023 </InfoBadge>
      <InfoBadge> Frontend Development </InfoBadge>
    </div>
    <div class="content">
      <p>
        Anywise is a purpose-driven consulting company that aims to solve problems in an ethical, sustainable and
        responsible way. At Anywise I worked in an agile team where my role included:
      </p>
      <ul>
        <li>Developing front end applications in Vue.js with Typescript and SCSS</li>
        <li>Creating and maintaining basic unit tests with Vitest framework</li>
        <li>Taking part in Agile methodologies such as Daily Stand-ups, Sprint Planning and Retros</li>
      </ul>

      <div class="carousel" style="margin-top: 3rem">
        <div class="carousel__content">
          <button class="carousel_arrow" @click="decrementCarousel">&lt</button>

          <div class="carousel__image">
            <div class="img-container">
              <img :src="carouselItems[carouselIndex].image" alt="carousel image" />
            </div>
            <h3>{{ carouselItems[carouselIndex].title }}</h3>
          </div>
          <div class="carousel__text">
            <div class="start-quote">“</div>
            <p>{{ carouselItems[carouselIndex].text }}</p>
            <div class="end-quote">”</div>
          </div>
          <button class="carousel_arrow" @click="incrementCarousel">&gt</button>
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
}

.content {
  padding: 1rem 0;
  max-width: 100rem;
  p {
    max-width: 30rem;
  }
}

.carousel__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 23rem;

  @media (min-width: 40rem) {
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  }
}

.carousel__image {
  .img-container {
    max-width: 14rem;
  }
}

.carousel__text {
  max-width: 20rem;
}

.carousel_arrow {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: $clr-secondary;

  @media (max-width: 40rem) {
    display: none;
  }
}

%quote {
  font-size: 3rem;
  height: 3.5rem;
  font-weight: 700;
  color: $clr-accent;
}
.start-quote {
  @extend %quote;
}

.end-quote {
  @extend %quote;
  text-align: end;
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
