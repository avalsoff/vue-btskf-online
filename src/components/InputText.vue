<template>
  <textarea
    class="input-text"
    :placeholder="placeholder"
    @input="expand"
    ref="field"
    :value="value"
    @keyUp.enter="$emit('send')"
  ></textarea>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      required: true
    },
    autoExpand: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      // Initial value assigned in mounted hook
      height: ''
    }
  },
  methods: {
    expand (evt) {
      if (evt) {
        this.$emit('input', evt.srcElement.value);
      }

      if (!this.autoExpand) return

      const field = this.$refs.field

      field.style.height = this.height

      const computed = window.getComputedStyle(field)

      field.style.height = this.getCurrentHeight(field, computed) + 'px'

      return field.style.height;
    },

    getCurrentHeight (field, computed) {

      const getPropertyInPx = (propName) => {
        return parseInt(computed.getPropertyValue(propName), 10)
      }

      const properties = [
        'border-top-width', 
        // 'padding-top',
        // 'padding-bottom',
        'border-bottom-width'
      ]

      const height = properties
        .reduce((sum, name) => {
          return sum += getPropertyInPx(name);
        }, 0) + field.scrollHeight

      return height;
    }
  },
  mounted () {
    this.height = this.expand();
  }
}
</script>

<style lang="scss">
.input-text {
  display: block;
  width: 100%;
  height: 20px;
  padding: 5px 10px;
  border-radius: 5px;
  resize: none;
  outline: none;
  border: 1px solid #EEEEEF;

  &::placeholder {
    color: #BFC1C7
  }

}
</style>
