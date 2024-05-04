<script setup></script>

<template>
  <section id="about-me">
    <h1>About Me</h1>
    <div class="about-me-card-container">
      <div class="about-me-card">
        <i class="fa-solid fa-school"></i>
        <h3>Education</h3>
        <ul>
          <li>
            <p>Bachelor of <span>Software Engineering</span> (Honours)</p>
          </li>
          <li>
            <p>Bachelor of Science <br />(<span>Mathematical Statistics</span>)</p>
          </li>
        </ul>
      </div>
      <div class="about-me-card">
        <i class="fa-solid fa-bullseye"></i>
        <h3>Goals</h3>
        <ul>
          <li>
            <p>Become a more well-rounded engineer</p>
          </li>
          <li>
            <p>Become a better leader</p>
          </li>
        </ul>
      </div>
    </div>

    <p class="about-me-text">
      I am a <span>Software Engineering</span> and <span>Statistics</span> graduate. <br /><br />
      I am most proficient with Frontend technologies but my goal is to continue learning and become a more well rounded
      Software Engineer. <br /><br />
      I am currently looking for a graduate role in <span>Software Engineering</span> where I can work with a team of
      developers to build amazing products.
    </p>
  </section>
</template>

<style scoped lang="scss">
section {
  border-bottom: 1px solid var(--clr-border);
  min-height: 40rem;
}
h1 {
  @include heading;
  text-align: center;
}

.about-me-card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 2rem;

  @media (min-width: 50rem) {
    flex-direction: row;
    justify-content: center;
    align-items: normal;
  }
}

.about-me-card {
  border: 1px solid var(--clr-primary);
  max-width: 21rem;
  border-radius: 12px;
  width: 80%;
  text-align: center;
  padding: 1rem;
  line-height: 1.5rem;

  ul {
    text-align: left;
    list-style: none;
  }

  h3 {
    margin-bottom: 1rem;
  }

  i {
    font-size: 2rem;
  }

  p {
    margin-top: 0.5rem;
  }

  span {
    @include special-text;
  }
}

.about-me-text {
  max-width: 25rem;
  margin-inline: auto;
  //   text-align: justify;
  padding: 0 2rem 2rem 2rem;
  span {
    @include special-text;
  }

  @media (min-width: 50rem) {
    max-width: 35rem;
  }
}
</style>
