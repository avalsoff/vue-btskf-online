<template>
<main class="chat-dialog" ref="dialog">
  <span class="chat-dialog__date">18 июля 2018</span>
  <MessageItem
    v-for="message in messages"
    :key="message.messageID"
    :text="message.messageText"
    :time-stamp="new Date().toLocaleTimeString()"
    :is-right-position="message.messageIsMy"
  />
</main>
</template>

<script>
import MessageItem from '@/components/MessageItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    MessageItem
  },
  watch: {
    messages () {
      console.log('messages');
      this.$nextTick(() => this.scrollToBottom());
    }
  },
  // props: {
  //   messages: {
  //     type: Array,
  //     default: () => []
  //   }
  // },
  computed: {
    ...mapGetters({
      thread: 'currentThread',
      messages: 'sortedMessages'
    })
  },
  methods: {
    scrollToBottom () {
      const dialog = this.$refs.dialog
      dialog.scrollTop = dialog.scrollHeight
    }
  },
  activated () {
    this.scrollToBottom()
  },
  mounted () {
    this.scrollToBottom()
  }
}
</script>

<style lang="scss">
.chat-dialog {
  padding: 25px 10px 0;
  flex: 1;
  overflow: auto;
  &__date {
    font-size: 11px;
    color: #B5B9C0;
    display: flex;
    margin-bottom: 10px;

    &::before,
    &::after {
      z-index: -1;
      content: "";
      position: relative;
      top: 5px;
      background-color: #B5B9C0;
      height: 1px;
      flex-grow: 1;
      margin-right: 5px;
    }

    &::after {
      margin: 0;
      margin-left: 5px;
    }
  }
}
</style>