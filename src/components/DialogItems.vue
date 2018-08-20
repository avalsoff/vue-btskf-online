<template>
<main class="dialog-items">
  <!-- <DialogPreview 
    v-for="dialog in dialogItems"
    :key="dialog.id"
    :heading="dialog.heading"
    :status="dialog.status"
    :text="dialog.text"
    :date="dialog.date"
  /> -->
  <DialogPreview 
    v-for="thread in threads"
    :key="thread.id"
    :heading="thread.name"
    :status="thread.status"
    :timestamp="thread.timestamp"
  />
  </main>
</template>

<script>
import DialogPreview from '@/components/DialogPreview.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    DialogPreview
  },
  props: {
    dialogItems: {
      type: Array,
      default: () => [],
    }
  },
  computed: {
    ...mapGetters([
      'threads',
      'currentThread',
      'unreadCount'
    ])
  },
  methods: {
    ...mapActions(['switchThread'])
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
