<template>
  <header>
    <div class="header__logo">
      <a href="/">
        <img src="/db-logo.svg" alt="Dale's Logo" />
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
  //   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

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
