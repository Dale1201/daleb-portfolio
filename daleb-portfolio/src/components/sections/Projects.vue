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

// Projects
const projects = ref([
  {
    name: "NBA Archives",
    year: 2024,
    tech: ["Vue.js", "Django", "Web Scraping"],
    github: "https://github.com/Dale1201/nba-dashboard",
    image: "/projects/nba-archives.PNG",
    website: "https://nba-archives.live",
  },
  {
    name: "Mr Bluesky",
    year: 2023,
    tech: ["Mobile", "React", "Typescript"],
    github: "https://github.com/chessworld/weather-booking-client",
    image: "/projects/mr-bluesky.PNG",
  },
  {
    name: "Snippet Vault",
    year: 2024,
    tech: ["Go", "MySQL"],
    github: "https://github.com/Dale1201/snippet-vault"
  },
  {
    name: "Youtube Clone",
    year: 2024,
    tech: ["Next.js", "Nodejs", "Firebase"],
    github: "https://github.com/Dale1201/youtube-clone",
    image: "/projects/youtube-clone.webp",
  },
]);

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
    <div class="projects-content">
      <div class="card" v-for="project in projects">
        <div v-if="project.website" class="visit-link-container">
          <a class="visit-link" :href="project.website" target="_blank" rel="noopener noreferrer"
            >Visit <i class="fa-solid fa-arrow-up-right-from-square"></i
          ></a>
        </div>
        <div class="card-info-content">
          <div>
            <h2>{{ project.name }}</h2>
            <div class="info-badge-container">
              <InfoBadge v-for="tech in project.tech" :key="tech">{{ tech }}</InfoBadge>
              <WebsiteLogo :url="project.github" icon="fa-brands fa-github" class="github-logo" />
            </div>
          </div>
        </div>
        <div class="img-container">
          <!-- <img :src="project.image" alt="Project image" /> -->
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--clr-border);
  min-height: 40rem;
}

.projects-content {
  padding: 1rem;
}

.card {
  border: 1px solid var(--clr-border);
  border-radius: 12px;
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  max-width: 27rem;
  margin-inline: auto;

  .img-container {
    border-radius: 0 0 6px 6px;
    height: 20rem;
    width: 100%;
    overflow: hidden;
  }

  &:nth-child(1) .img-container {
    background-image: url("/projects/nba-archives.PNG");
    background-size: cover;
  }

  &:nth-child(2) .img-container {
    background-image: url("/projects/mr-bluesky.PNG");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #a8c8ed;
  }

  &:nth-child(3) .img-container {
    background-image: url("/projects/snippet-vault.PNG");
    background-size: cover;
    background-position: center;
  }

  &:nth-child(4) .img-container {
    background-image: url("/projects/youtube-clone.webp");
    background-size: cover;
    background-position: center;
  }
}

.card-info-content {
  display: flex;
  padding: 1rem;
}

.visit-link-container {
  width: fit-content;
  align-self: flex-end;
  padding: 0.5rem 0.5rem 0 0;
}

.visit-link {
    text-decoration: none;
    display: flex;
    gap: 1rem;
    align-items: center;
    i {
      color: var(--clr-background);
      background-color: var(--clr-primary);
      padding: 6px;
      border-radius: 50%;
    }
  }

h1 {
  @include heading;
  padding-left: 1rem;
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

// .img-container {
//   max-width: 14rem;
//   padding: 1rem;
//   @media (min-width: 40rem) {
//     padding: 0;
//   }
// }

.link-header {
  a {
    text-decoration: none;
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
    background-color: var(--clr-text);
    cursor: pointer;
  }
  .dot-active {
    background-color: var(--clr-primary);
  }
}
</style>

<!-- <div class="projects-content">
      <div>
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
        <div style="margin: 5rem 0 8rem 0">
          <h2 class="link-header">
            <a href="https://nba-archives.live" target="_blank" rel="noopener noreferrer"
              >NBA Archives
              <i class="fa-solid fa-arrow-up-right-from-square fa-xs"></i>
            </a>
          </h2>
          <div class="info-badge-container">
            <InfoBadge> 2024 </InfoBadge>
            <InfoBadge> Vue.js </InfoBadge>
            <InfoBadge> Django </InfoBadge>
            <InfoBadge> Web Scraping </InfoBadge>
            <WebsiteLogo
              url="https://github.com/Dale1201/nba-dashboard"
              icon="fa-brands fa-github"
              class="github-logo"
            />
          </div>
          <div style="margin-top: 2rem">
            <p>
              A application where you can view the stats for any player in the current and past seasons, as well as
              season leaders
            </p>
            <p>Vue.js front-end and Django backend</p>
          </div>
        </div>
        <div style="margin: 5rem 0 8rem 0">
          <h2>Youtube Clone - WIP</h2>
          <div class="info-badge-container">
            <InfoBadge> 2024 </InfoBadge>
            <InfoBadge> React - Next.js </InfoBadge>
            <InfoBadge> Nodejs </InfoBadge>
            <InfoBadge> Firebase </InfoBadge>
            <WebsiteLogo
              url="https://github.com/Dale1201/youtube-clone"
              icon="fa-brands fa-github"
              class="github-logo"
            />
          </div>
          <div style="margin-top: 2rem">
            <p>A simple webapp with that will allow users to upload and view their videos.</p>
            <p>React front-end and Nodejs backend with Firestore as the database</p>
          </div>
        </div>
      </div>
    </div> -->
