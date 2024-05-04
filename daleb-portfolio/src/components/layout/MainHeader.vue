<script setup>
import { computed, onMounted, ref } from "vue";

// Logo logic
const colourScheme = ref("light");
onMounted(() => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    colourScheme.value = "dark";
  }
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
    colourScheme.value = event.matches ? "dark" : "light";
  });
});

const logo = computed(() => {
  if (colourScheme.value === "dark") {
    return "/db-logo-dark.svg";
  } else {
    return "/db-logo-light.svg";
  }
});

// Mobile Nav colour logic
const mobileNavBackgroundColour = computed(() => {
  if (colourScheme.value === "dark") {
    return "rgb(32, 32, 32, 1)";
  } else {
    return "rgb(248, 248, 248)";
  }
});

const mobileNavTextColour = computed(() => {
  if (colourScheme.value === "dark") {
    return "rgb(248, 248, 248)";
  } else {
    return "rgb(0, 0, 0)";
  }
});

const mobileNavVisible = ref(false);
function toggleMobileNav() {
  mobileNavVisible.value = !mobileNavVisible.value;
}
</script>

<template>
  <div>
    <div class="backdrop" v-if="mobileNavVisible" @click="mobileNavVisible = false"></div>
    <header>
      <div class="header__logo">
        <button class="toggle fa-solid fa-bars fa-2xl" @click="mobileNavVisible = !mobileNavVisible"></button>
        <a href="/">
          <img :src="logo" alt="Dale's Logo" />
        </a>
      </div>
      <nav class="main-nav">
        <ul>
          <li><a href="#about-me">About me</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#technologies">Technologies</a></li>
        </ul>
      </nav>
    </header>
    <Transition name="slide-in">
      <nav
        class="mobile-nav"
        :style="{
          'background-color': mobileNavBackgroundColour,
        }"
        v-if="mobileNavVisible"
      >
        <ul
          :style="{
            color: mobileNavTextColour,
          }"
        >
          <li><a href="#about-me" @click="toggleMobileNav">About me</a></li>
          <li><a href="#experience" @click="toggleMobileNav">Experience</a></li>
          <li><a href="#projects" @click="toggleMobileNav">Projects</a></li>
          <li><a href="#technologies" @click="toggleMobileNav">Technologies</a></li>
        </ul>
      </nav>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
.backdrop {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
}
header {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.5rem;
  border-bottom: 1px solid var(--clr-border);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.toggle {
  background: none;
  border: none;
  font-size: 1.5rem;
  width: 3rem;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: var(--clr-primary);
  }
}

.main-nav {
  display: none;
  ul {
    display: flex;
    list-style: none;
    justify-content: space-between;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1rem;
      transition: color 0.2s ease-in-out;
    }
  }
}

.mobile-nav {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  width: 80%;
  height: 100vh;

  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    list-style: none;
    gap: 2rem;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 1.2rem;
      transition: color 0.2s ease-in-out;
    }
  }
}

@media (min-width: 40rem) {
  header {
    justify-content: center;
    gap: 1rem;
  }

  .main-nav {
    display: block;
    flex: 1;
    max-width: 40rem;
  }

  .toggle {
    display: none;
  }

  .header__logo {
    max-width: 40px;
  }
}

.slide-in-enter-active {
  animation: slideIn 0.5s;
}

.slide-in-leave-active {
  animation: slideIn 0.5s reverse;
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
</style>
