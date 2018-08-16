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
  font-size: 14px;

  &__wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__text {
    margin: 0;
    padding: 8px 10px;
    word-wrap: break-word;
    max-width: 66.6666%;
    width: fit-content;
    background-color: lighten($dark, 30);
    color: black;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    text-indent: -4px;
  }

  &__time {
    margin-left: 2px;
    color: #B5B9C0
  }

  &--right {
    .message {
      &__wrapper {
        flex-direction: row-reverse;
      }

      &__text {
        border-radius: 10px;
        border-bottom-right-radius: 0;
        background-color: $dark;
        color: white;
        text-align: right;
      }

      &__time {
        flex: 0 0 auto;
        margin-right: 10px;
      }
    }
  }
}
</style>
