<script setup>
import InfoBadge from "../UI/InfoBadge.vue";
import { onMounted, onUnmounted, ref } from "vue";

// More info visibility
const moreInfoVisible = ref([false, false]);
function toggleMoreInfo(index) {
  moreInfoVisible.value[index] = !moreInfoVisible.value[index];
}

// Carousel logic
const testimonialItems = ref([
  {
    name: "Shane Arnold",
    title: "Senior Architect",
    text: "Dale is always positive in attitude and willing to help others within the team environment. His friendly disposition was always a joy during our daily work routine.",
    image: "/anywise/shane.png",
  },
  {
    name: "Ajay Usha",
    title: "Data Scientist",
    text: "Working with Dale has been a remarkable experience. His positive attitude shines through in every task, turning challenges into opportunities. Dale's dedication is unparalleled, always going above and beyond to ensure quality and timely delivery. Dale is truly a valuable asset to any team, bringing energy, fun, commitment, and a drive for excellence.",
    image: "/anywise/ajay.png",
  },
]);
</script>

<template>
  <section id="experience">
    <h1>Experience</h1>
    <div class="experience-content">
      <div @click="toggleMoreInfo(0)">
        <div class="summary-info">
          <div>
            <h2>Software Engineer Intern</h2>
            <a href="https://www.anywise.com.au/" target="_blank" rel="noopener noreferrer">Anywise</a>
            <div class="info-badge-container">
              <InfoBadge> Frontend Development </InfoBadge>
              <InfoBadge> Agile </InfoBadge>
            </div>
          </div>
          <p class="year">2022 - 2023</p>
        </div>
        <Transition name="more-info" mode="out-in">
          <div v-if="moreInfoVisible[0]" class="more-info">
            <ul>
              <li>Developed a front end application in Vue.js with Typescript and SCSS</li>
              <li>Created and maintained basic unit tests with Vitest framework</li>
              <li>Took part in Agile methodologies such as Daily Stand-ups, Sprint Planning and Retros</li>
            </ul>
            <div class="carousel">
              <div class="carousel__content" v-for="t in testimonialItems">
                <div class="carousel__image">
                  <div class="img-container">
                    <img :src="t.image" alt="carousel image" />
                  </div>
                  <div style="line-height: normal;">
                    <h2>{{ t.name }}</h2>
                    <p>{{ t.title }}</p>
                  </div>
                </div>
                <div class="carousel__text">
                  <div class="start-quote">“</div>
                  <p>{{ t.text }}</p>
                  <div class="end-quote">”</div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
      <div @click="toggleMoreInfo(1)">
        <div class="summary-info">
          <div>
            <h2>Data Science Intern</h2>
            <a href="https://www.digicor.com.au/" target="_blank" rel="noopener noreferrer">Digicor</a>
            <div class="info-badge-container">
              <InfoBadge> Data Science </InfoBadge>
              <InfoBadge> SEO </InfoBadge>
            </div>
          </div>
          <p class="year">2021</p>
        </div>
        <Transition name="more-info">
          <div class="more-info" v-if="moreInfoVisible[1]">
            <ul>
              <li>
                Created dashboards with google data studio to assist in finding useful insights for DiGiCOR's SEO
                campaign
              </li>
              <li>Wrote reports to assist marketing department to set benchmarks and goals.</li>
            </ul>
          </div>
        </Transition>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--clr-border);
  min-height: 40rem;
  display: flex;
  flex-direction: column;
}

h1 {
  @include heading;
  padding-left: 1rem;
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
  width: 100%;
  max-width: 80rem;
  margin-inline: auto;
  border: 1px solid var(--clr-border-faint);
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  transition: all 0.2s;

  &:hover {
    scale: 1.01;
  }
}

.summary-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 2.5rem 0;

  h2 {
    @include sub-heading;
  }

  a {
    text-decoration: none;
    font-style: italic;
    margin-bottom: 0.5rem;
  }

  .year {
    font-size: 1.5rem;
    font-weight: 200;
    letter-spacing: 1px;
  }
  @media (min-width: 40rem) {
    flex-direction: row;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
  }
}

.more-info {
  padding-bottom: 1rem;
}

.more-info-enter-active,
.more-info-leave-active {
  transition: all 0.5s ease;
}

.more-info-enter-from,
.more-info-leave-to {
  opacity: 0;
  transform: translateY(-2rem);
}

.info-badge-container {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.content {
  padding: 1rem 0;
  p {
    max-width: 30rem;
  }
}
.carousel {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--clr-border);
  width: fit-content;
}

.carousel__content {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 40rem) {
    flex-direction: row;
    gap: 3rem;
  }
}

.carousel__image {
  display: flex;
  flex-direction: column;
  min-width: 7rem;
  
  .img-container {
    max-width: 5rem;
    border-radius: 12px;
    overflow: hidden;
  }

  h2 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
    font-weight: 300;
  }
}

.carousel__text {
  max-width: 30rem;
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
