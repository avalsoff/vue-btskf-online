<template>
  <header class="header">
    <h1 class="header__heading">{{ heading }}</h1>
    <div class="header__wrapper header__wrapper--left">
      <slot name="left"></slot>
    </div>
    <div class="header__wrapper header__wrapper--right">
      <slot name="right"></slot>
    </div>
    <div class="header__wrapper header__wrapper--center-right">
      <slot name="center-right"></slot>
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
  background-color: $light;
  color: #000;
  padding: 15px 0;
  text-align: center;

  &__heading {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin: 0;
    line-height: 1;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background-color: $dark;
      margin-right: 10px;
      border-radius: 50%;
    }
  }

  &__wrapper {
    position: absolute;
    left: 10px;
    top: 9px;

    &--right {
      left: unset;
      right: 10px;
    }

    &--center-right {
      left: unset;
      right: 40px;
    }
  }
}

</style>
