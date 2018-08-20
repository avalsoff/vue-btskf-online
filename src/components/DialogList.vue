<template>
<main class="dialog-items">
  <!-- <DialogItem 
    v-for="dialog in dialogItems"
    :key="dialog.id"
    :heading="dialog.heading"
    :status="dialog.status"
    :text="dialog.text"
    :date="dialog.date"
  /> -->
  <DialogItem 
    v-for="thread in threads"
    :key="thread.id"
    :id="thread.id"
    :heading="thread.name"
    :status="thread.status"
    :timestamp="thread.timestamp"
  />
  </main>
</template>

<script>
import DialogItem from '@/components/DialogItem.vue'
import { mapGetters } from 'vuex'

export default {
  components: {
    DialogItem
  },
  props: {
    threads: {
      type: Object,
      default: () => {},
    }
  },
  computed: {
    ...mapGetters([
      'currentThread',
      'unreadCount'
    ])
  }
}
</script>

<style>
.dialog-items {
  flex: 1;
  overflow: auto;
  padding-left: 12px
}
</style>
