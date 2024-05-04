<template>
  <button>
    <slot></slot>
  </button>
</template>

<style scoped lang="scss">
button {
  background: var(--clr-primary);
  color: var(--clr-text);
  border: none;
  cursor: pointer;
  transition: color 0.3s ease;
  border-radius: 12px;
  padding: 0.6rem 1rem;
}
</style>
