<script setup>
import Burger from "../UI/burger/Burger.vue";
</script>

<template>
  <section id="technologies">
    <h1>Techstack</h1>
    <div class="techstack-container">
      <div class="techstack-card">
        <h2>Frontend</h2>
        <ul>
          <li>Vue.js</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS & SCSS</li>
          <li>Javascrpt & Typescript</li>
        </ul>
      </div>
      <div class="techstack-card">
        <h2>Backend</h2>
        <ul>
          <li>Python</li>
          <li>Go</li>
          <li>Node.js</li>
          <li>Java</li>
          <li>SQL</li>
        </ul>
      </div>
      <div class="techstack-card">
        <h2>Other</h2>
        <ul>
          <li>Git</li>
          <li>Agile</li>
          <li>CI/CD</li>
          <li>Unit Testing</li>
          <li>Windows</li>
        </ul>
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
  margin-bottom: 3rem;
}

.techstack-container {
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 50rem) {
    flex-direction: row;
    justify-content: center;
    align-items: normal;
    gap: 2rem;
  }
}

.techstack-card {
  text-align: center;
  border: 1px solid $clr-primary;
  border-radius: 12px;
  margin: 2rem 0;
  width: clamp(20rem, 80%, 25rem);

  h2 {
    font-weight: 600;
    font-size: 1.3rem;
  }

  ul {
    text-align: left;
    list-style: none;
    padding: 0;
    text-align: center;
  }
}
</style>
