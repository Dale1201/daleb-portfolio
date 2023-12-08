<script setup>
import InfoBadge from "../UI/InfoBadge.vue";
import WebsiteLogo from "../UI/WebsiteLogo.vue";
</script>

<template>
  <section>
    <h1>Projects</h1>
    <h2>Mr Bluesky - Weather Booking App</h2>
    <div class="info-badge-container">
      <InfoBadge> 2023 </InfoBadge>
      <InfoBadge> React </InfoBadge>
      <InfoBadge> Typescript </InfoBadge>
      <InfoBadge> HTML/CSS </InfoBadge>
      <WebsiteLogo url="https://github.com/weather-booking-app" icon="fa-brands fa-github" class="github-logo" />
    </div>

    <div class="booking-app-content">
      <div style="display: flex; flex-direction: column; align-items: center">
        <div class="logo-container">
          <img src="/src/assets/weather-booking-app/mr_bluesky_logo.png" alt="Mr Bluesky" />
        </div>
        <p class="booking-blurb">
          Have a special occasion coming up? <br />
          Need a certain weather...? <br />
          Then book it!
        </p>
        <b class="booking-blurb special-text">Introducing Mr Bluesky {{ "&nbsp;".repeat(18) }} </b>
      </div>
      <div style="display: flex; justify-content: center">
        <div class="img-container" v-if="false">
          <img src="/src/assets/weather-booking-app/wba-home.png" alt="Mr Bluesky" />
        </div>
        <div class="img-container">
          <img src="/src/assets/weather-booking-app/wba-booking-confirm.png" alt="Mr Bluesky" />
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

.booking-blurb {
  text-align: justify;
  display: flex;
  justify-content: center;
}

.special-text {
  @include special-text;
}

.img-container {
  max-width: 18rem;
  padding: 1rem;
  @media (min-width: 40rem) {
    padding: 0;
  }
}
</style>
