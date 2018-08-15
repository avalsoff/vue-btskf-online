<template>
  <header class="header">
    <h1 class="header__heading">{{ heading }}</h1>
    <div class="header__wrapper header__wrapper--left">
      <slot name="left"></slot>
    </div>
    <div class="header__wrapper header__wrapper--right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@import '../styles/main.scss';

.header {
  background-color: #3F4757;
  color: $menus;
  padding: 15px 0;
  text-align: center;

  &__heading {
    font-size: 14px;
    margin: 0;
    line-height: 1;
  }

  &__wrapper {
    position: absolute;
    left: 10px;
    top: 9px;

    &--right {
      left: unset;
      right: 10px;
    }
  }
}

</style>
