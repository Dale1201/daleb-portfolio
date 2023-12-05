<template>
  <header>
    <div class="header__logo">
      <a href="/">
        <img src="/src/assets/db-logo-light.svg" alt="Dale's Logo" />
      </a>
    </div>
    <nav>
      <ul>
        <li><a href="/">About me</a></li>
        <li><a href="/projects">Experience</a></li>
        <li><a href="/about">Projects</a></li>
        <li><a href="/about">Technologies</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid $dark-text;

  nav {
    flex: 1;
    max-width: 40rem;
  }
}
nav ul {
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
</style>
