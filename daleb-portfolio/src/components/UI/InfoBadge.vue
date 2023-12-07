<template>
  <div class="info-badge">
    <div class="info-badge__icon">
      <slot name="icon"></slot>
    </div>
    <div class="info-badge__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-badge {
  border: 1px solid;
  border-radius: 0.5rem;
  width: fit-content;
  padding: 0 0.5rem;
  opacity: 0.8;
}

.info-badge__content {
  font-weight: 500;
  font-size: 0.9rem;
}
</style>
