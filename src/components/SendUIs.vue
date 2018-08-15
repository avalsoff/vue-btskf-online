<template>
  <section 
    class="send-uis" 
    :class="{'send-uis--last': isLast}"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    isLast: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.send-uis {
  background-color: #F6F7F7;
  padding: 5px 10px 0;
  display: flex;

  &--last {
    padding-bottom: 5px;
  }

  & > * {
    margin-right: 10px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
