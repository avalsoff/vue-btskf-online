<template>
  <button class="button" :style="style">
    {{ text }}
  </button>
</template>


<script>
const images = ['add', 'angle-left', 'phone-call', 'edit', 'cancel'];
images.forEach(img => require(`../assets/${img}.svg`));

export default {
  data () {
    return {
      style: {
        backgroundImage: `url('${require('../assets/add.svg')}')`
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
      default: '../assets/add.svg',
    }
  }
}
</script>

<style>
.button {
  display: block;
  min-width: 27px;
  font-size: 12px;
  padding: 0 5px;
  height: 27px;
  border: none;
  flex: 1 0 auto;
  background-color: unset;
  background-size: contain;
  background-repeat: no-repeat;
}
</style>
