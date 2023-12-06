<script setup>
import BaseButton from "../UI/BaseButton.vue";
</script>

<template>
  <section>
    <div class="image-about">
      <div class="img-container">
        <img src="/src/assets/placeholder.webp" alt="placeholder" />
      </div>
      <BaseButton>Read More</BaseButton>
    </div>
    <div class="about-me">
      <h1>About Me</h1>
      <p>
        Hello my name is Dale. I am <span>Software Engineering</span> and <span>Statistics</span> graduate. <br /><br />
        Currently I am most proficient with Frontend technologies but my goal is to continue learning and become a more
        well rounded Engineer. <br /><br />
        I am currently looking for a graduate role in <span>Software Engineering</span> where I can work with a team of
        developers to build amazing products.
      </p>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid $dark-text;
  @media (min-width: 60rem) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    justify-items: center;
    min-height: 90vh;
  }
}

h1 {
  @include heading;
  text-align: center;
}

.about-me {
  padding: 2rem;
  span {
    color: $clr-secondary;
    font-weight: 500;
  }

  @media (min-width: 60rem) {
    max-width: 30rem;
    padding-top: 8rem;
  }
}

.image-about {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 60rem) {
    max-width: 40rem;
    gap: 3rem;
  }
}

.img-container {
  width: 100%;
  max-width: 40rem;
  @media (min-width: 40rem) {
    padding: 1rem;
  }
  @media (min-width: 60rem) {
    max-width: 40rem;
  }
}
</style>
