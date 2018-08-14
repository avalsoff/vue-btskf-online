<template>
  <header class="header">
    <h1 class="header__heading">{{ heading }}</h1>
    <button
      class="header__button header__button--left"
      v-if="leftButtonIcon"
    ></button>
    <button
      class="header__button header__button--right"
      v-if="rightButtonIcon"
    ></button>
  </header>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    leftButtonIcon: {
      type: String
    },
    rightButtonIcon: {
      type: String
    }
  }

}
</script>

<style lang="scss">
@import '../styles/main.scss';

.header {
  background-color: $dark;
  color: $menus;
  padding: 15px 0;
  text-align: center;

  &__heading {
    font-size: 14px;
    margin: 0;
    line-height: 1;
  }

  &__button {
    position: absolute;
    top: 7px;
    width: 30px;
    height: 30px;
    background: red;
    border: none;

    &--left {
      left: 7px;
    }

    &--right {
      right: 7px;
    }
  }
}

</style>
