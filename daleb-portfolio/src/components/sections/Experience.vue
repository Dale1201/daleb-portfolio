<script setup>
import InfoBadge from "../UI/InfoBadge.vue";
import { onMounted, onUnmounted, ref } from "vue";

let interval;
onMounted(() => {
  interval = setInterval(() => {
    incrementCarousel();
  }, 8000);
});

onUnmounted(() => {
  clearInterval(interval);
});
// Carousel logic
const carouselIndex = ref(0);
const carouselItems = ref([
  {
    title: "Shane Arnold - Senior Architect",
    text: "Dale is always positive in attitude and willing to help others within the team environment. His friendly disposition was always a joy during our daily work routine.",
    image: "/anywise/shane.png",
  },
  {
    title: "Ajay Usha - Data Scientist",
    text: "Working with Dale has been a remarkable experience. His positive attitude shines through in every task, turning challenges into opportunities. Dale's dedication is unparalleled, always going above and beyond to ensure quality and timely delivery. Dale is truly a valuable asset to any team, bringing energy, fun, commitment, and a drive for excellence.",
    image: "/anywise/ajay.png",
  },
]);

function incrementCarousel() {
  carouselIndex.value++;
  if (carouselIndex.value > carouselItems.value.length - 1) {
    carouselIndex.value = 0;
  }
}
</script>

<template>
  <section id="experience">
    <h1>Experience</h1>
    <div class="experience-content">
      <div>
        <h2>Software Engineer Intern</h2>
        <a href="https://www.anywise.com.au/" target="_blank" rel="noopener noreferrer">Anywise</a>
        <p>2022 - 2023</p>
        <div class="info-badge-container">
          <InfoBadge> Frontend Development </InfoBadge>
          <InfoBadge> Agile </InfoBadge>
        </div>
      </div>
      <div>
        <h2>Data Science Intern</h2>
        <a href="https://www.digicor.com.au/" target="_blank" rel="noopener noreferrer">Digicor</a>
        <p>2021</p>
        <div class="info-badge-container">
          <InfoBadge> Data Science </InfoBadge>
          <InfoBadge> SEO </InfoBadge>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--clr-border);
  min-height: 40rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: column
}

h1 {
  @include heading;
}

h2 {
  font-weight: normal;
}

.experience-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  gap: 2rem;
}

.experience-content > div {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    @include sub-heading;
  }

  a {
    text-decoration: none;
  }
}

.info-badge-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.content {
  padding: 1rem 0;
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
  color: var(--clr-secondary);

  @media (max-width: 40rem) {
    display: none;
  }
}

%quote {
  font-size: 4rem;
  height: 3.5rem;
  font-weight: 700;
  color: var(--clr-accent);
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
    background-color: var(--clr-text);
    cursor: pointer;
  }
  .dot-active {
    background-color: var(--clr-primary);
  }
}
</style>



    <!-- <div class="experience-content">
      <div>
        <h2>Software Engineer Intern - Anywise</h2>
        <div class="info-badge-container">
          <InfoBadge> 2022 - 2023 </InfoBadge>
          <InfoBadge> Frontend Development </InfoBadge>
          <InfoBadge> Agile </InfoBadge>
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
        <h2 style="padding-top: 3rem">Data Science Intern - Digicor</h2>
        <div class="info-badge-container">
          <InfoBadge> 2021 </InfoBadge>
          <InfoBadge> Data Science </InfoBadge>
          <InfoBadge> SEO </InfoBadge>
        </div>
        <div class="content" style="padding-bottom: 5rem">
          <p>Digicor is a leading provider of high-performance computing solutions. At Digicor my role included:</p>
          <ul>
            <li>
              Made dashboards with google data studio to assist in finding useful insights for DiGiCOR's SEO campaign
            </li>
            <li>Created report to assist marketing department to set benchmarks and goals.</li>
          </ul>
        </div>
      </div>
    </div> -->