<script setup>
import { onMounted, ref } from "vue";

// Logo logic
const logo = ref("/src/assets/db-logo-light.svg");
onMounted(() => {
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    logo.value = "/src/assets/db-logo-dark.svg";
  }
});

const mobileNavVisible = ref(false);
</script>

<template>
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
        <li><a href="/">About me</a></li>
        <li><a href="/projects">Experience</a></li>
        <li><a href="/about">Projects</a></li>
        <li><a href="/about">Technologies</a></li>
      </ul>
    </nav>
  </header>
  <nav class="mobile-nav" v-if="mobileNavVisible">
    <ul>
      <li><a href="/">About me</a></li>
      <li><a href="/projects">Experience</a></li>
      <li><a href="/about">Projects</a></li>
      <li><a href="/about">Technologies</a></li>
    </ul>
  </nav>
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
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0.5rem;
  border-bottom: 1px solid $dark-text;
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
    color: $clr-primary;
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
      font-size: 1.2rem;
      transition: color 0.2s ease-in-out;
    }
  }
}

.mobile-nav {
  position: fixed;
  z-index: 101;
  top: 0;
  left: 0;
  background: rgb(248, 248, 248);
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
  .main-nav {
    display: block;
    flex: 1;
    max-width: 40rem;
  }

  .toggle {
    display: none;
  }
}
</style>
