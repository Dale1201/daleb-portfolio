<script setup>
import WebsiteLogo from "../UI/WebsiteLogo.vue";


</script>

<template>
  <section>
    <div class="content">
      <div class="about-me">
        <h3>Hello I'm</h3>
        <h1 class="dale-text">Dale Beniga</h1>
        <p>I'm a <span>Software Engineer</span> and <span>Statistics</span> Graduate. <br />
          I love to <span>create</span> and <span>learn</span> new things. <br />
          And I excel at solving <span>difficult</span> problems!
        </p>
        <h2 class="social-header">Connect with me!</h2>
        <div style="display: flex; gap: 1rem">
          <WebsiteLogo url="//www.linkedin.com/in/dale-beniga-800871175" icon="fa-brands fa-linkedin" class="logos" />
          <WebsiteLogo url="https://github.com/Dale1201?tab=repositories" icon="fa-brands fa-github" class="logos" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--clr-border);
  display: flex;
  justify-content: center;
  align-items: center;
}

.content {
  max-width: 70rem;
  @media (min-width: 60rem) {
    min-height: 90vh;

    display: grid;
    gap: 2rem;
    place-items: center;
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
  min-width: 20rem;
  animation: normal 2.5s ease-in-out 0s 1 fadeIn;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: 500;
    text-align: center;
  }

  p {
    text-align: center;
    font-weight: 300;
    font-size: 1rem;
  }

  p span {
    // @include special-text;
  }

  @media (min-width: 60rem) {
    max-width: 30rem;
  }
}

.dale-text {
  display: inline-block;
  // animation: normal 1s ease-in-out 1.5s 1 shake, normal 0.5s ease-in-out 1s 1 jumpUp;
  font-weight: 500;
  font-size: 3rem;
  margin: 0;
}

.social-header {
  @include sub-heading;
  margin-top: 2rem;
}

.logos {
  animation: shake 400ms 3s 2;
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
