<template>
  <textarea
    class="input-text"
    @input="emitValue"
    @keypress.enter.exact.prevent="onEnterPress"
    :placeholder="placeholder"
    :value="value"
    ref="field"
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
    },
    onEnterPress: {
      type: Function, 
      default: () => console.log('Enter pressed')
    },
    focused: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    value () {
      this.$nextTick(()=>this.expand());
    }
  },
  data () {
    return {
      // Initial value assigned in mounted hook
      height: ''
    }
  },
  methods: {
    emitValue (evt) {
      if (evt) {
        this.$emit('input', evt.srcElement.value);
      }
    },

    expand () {
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
    },
    init () {
      this.height = this.expand()
      if (this.focused) {
        this.$refs.field.focus()
      }
    }
  },
  mounted () {
    this.init()
  },
  activated () {
    this.init()
  },
  updated () {
    if (this.focused) {
      this.$refs.field.focus()
    }
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
  font-size: 16px;

  &::placeholder {
    color: #BFC1C7
  }
}
</style>
