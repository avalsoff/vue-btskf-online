<template>
  <button class="button" :style="style">
    {{ text }}
  </button>
</template>


<script>

export default {
  data () {
    return {
      style: {
        backgroundImage: 'url(' + this.iconRequire() + ')',
        backgroundSize: this.iconSize + '%'
      }
    }
  },
  props: {
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
    },
    iconSize: {
      type: String,
      default: '100'
    }
  },
  methods: {
    iconRequire () {
      return this.icon ? require('../assets/' + this.icon + '.svg') : '';
    }
  }
}
</script>

<style>
.button {
  display: block;
  min-width: 27px;
  font-size: 14px;
  height: 27px;
  padding: 0;
  border: none;
  flex: 1 0 auto;
  background-color: unset;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  color: #AFB3BA;
  outline: none;
}
</style>
