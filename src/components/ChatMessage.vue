<template>
<div 
  class="message" 
  :class="{'message--right': isRightPosition}"
>
  <div class="message__wrapper">  
    <p class="message__text">
      {{ text }}
    </p>
    <span class="message__time">
      {{ timeStamp | hhmm }}
    </span>
  </div>
</div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    },
    timeStamp: {
      type: String,
      required: true
    },
    isRightPosition: {
      type: Boolean,
      default: false
    }
  },
  filters: {
    //Mocking
    hhmm(stamp) {
      return stamp.slice(0, stamp.length - 6);
    }
  }
};
</script>

<style lang="scss">
@import '../styles/main.scss';

.message {  
  &__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__text {
    margin: 0;
    padding: 8px 10px;
    word-wrap: break-word;
    width: 66.6666%;
    background-color: $bg-dark;
    color: black;
    border-radius: 6px;
    border-bottom-left-radius: 0;
  }

  &__time {
    margin-left: 2px;
  }

  &--right {
    .message {
      &__wrapper {
        flex-direction: row-reverse;
      }

      &__text {
        border-radius: 6px;
        border-bottom-right-radius: 0;
        background-color: $light;
        color: white;
      }

      &__time {
        flex: 0 0 auto;
        margin-right: 10px;
      }
    }
  }
}
</style>
