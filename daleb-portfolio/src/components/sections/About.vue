<script setup>
import WebsiteLogo from "../UI/WebsiteLogo.vue";
</script>

<template>
  <section id="about-me">
    <div class="image-about">
      <div class="img-container">
        <img src="/src/assets/placeholder.webp" alt="placeholder" />
      </div>
      <base-button class="call-to-action-button">Read More</base-button>
    </div>
    <div class="about-me">
      <h1>
        Hello I'm
        <p class="dale-text">Dale</p>
      </h1>
      <p>
        I am <span>Software Engineering</span> and <span>Statistics</span> graduate. <br /><br />
        I am most proficient with Frontend technologies but my goal is to continue learning and become a more well
        rounded Software Engineer. <br /><br />
        I am currently looking for a graduate role in <span>Software Engineering</span> where I can work with a team of
        developers to build amazing products.
      </p>
      <h2 class="social-header">Socials</h2>
      <WebsiteLogo url="//www.linkedin.com/in/dale-beniga-800871175" icon="fa-brands fa-linkedin" />
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

.call-to-action-button {
  animation: normal 1s ease-in-out 0s 1 fadeIn;
}

.about-me {
  padding: 2rem;
  animation: normal 1s ease-in-out 0s 1 slideInFromRight;
  p span {
    @include special-text;
  }

  @media (min-width: 60rem) {
    max-width: 30rem;
    padding-top: 8rem;
  }
}

.dale-text {
  display: inline-block;
  animation: normal 1s ease-in-out 1.5s 1 shake, normal 0.5s ease-in-out 1s 1 jumpUp;
}

.social-header {
  @include sub-heading;
  margin-top: 2rem;
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
  animation: normal 1s ease-in-out 0s 1 slideInFromLeft;
  @media (min-width: 40rem) {
    padding: 1rem;
  }
  @media (min-width: 60rem) {
    max-width: 40rem;
  }
}
</style>
