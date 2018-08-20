<template>
<a class="dialog-preview" @click="goToDialog">
  <div class="dialog-preview__row">
    <h2 class="dialog-preview__heading">
      {{ heading }}
    </h2>
    <!-- Router link -->
    <div v-if="timestamp !== 'none'" class="dialog-preview__button">
      {{ timestamp | date }}
    </div>
  </div>
  <div class="dialog-preview__status" :class="{'dialog-preview__company': text}">
    <span 
      v-if="!text"
      class="dialog-preview__status-marker"
      :style="{ backgroundColor: getStatusColor(status) }"
    ></span>
    {{ !text ? getStatusText(status) : text }}
  </div>
</a>
</template>

<script>
import { mapActions } from 'vuex'

const statuses = {
  open: {
    color: '#579136',
    text: 'Открыто'
  },
  close: {
    color: 'red',
    text: 'Закрыто'
  },
  queue: {
    color: 'darkorange',
    text: 'В очереди'
  },
}

export default {
  props: {
    status: {
      type: String,
      default: 'open'
    },
    heading: {
      type: String,
      required: true
    },
    timestamp: {
      type: Number,
      default: Number(new Date())
    },
    text: {
      type: String
    },
    id: {
      type: String,
      required: true
    }
  },
  methods: {
    ...mapActions(['switchThread']),
    goToDialog () {
      this.switchThread(this.id)
      this.$router.push('dialog');
    },
    getStatusColor (status) {
      return statuses[status].color
    },
    getStatusText (status) {
      return statuses[status].text
    }
  }
}
</script>

<style lang="scss">
.dialog-preview {
  display: block;
  border-bottom: 1px solid #F5F5F6;
  padding: 12px;
  padding-left: 0;
  cursor: pointer;


  &__row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  &__heading {
    text-indent: -4px;
    margin: 0;
    margin-bottom: 5px;
    font-size: 15px;
    color: #626875;
  }

  &__status {
    display: block;
    position: relative;
    margin-left: 12px;
    color: #A9A9A9;
    font-size: 13px;
  }

  &__status-marker {
    content: "";
    position: absolute;
    left: -12px;
    top: 3px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #579136;
  }

  &__button {
    position: relative;
    display: block;
    margin-right: 12px;
    font-size: 12px;
    color: #C4C8CD;
    display: flex;

    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      right: -15px;
      top: 1px;

      background-image: url('../assets/angle-right.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }

  &__company {
    margin-left: 0;
    text-indent: -3px;
  }
}
</style>
