<template>
<main class="dialog-items">
  <DialogPreview 
    v-for="dialog in dialogItems"
    :key="dialog.id"
    :heading="dialog.heading"
    :status="dialog.status"
    :text="dialog.text"
    :date="dialog.date"
  />
</main>
</template>

<script>
import DialogPreview from '@/components/DialogPreview.vue'

export default {
  components: {
    DialogPreview
  },
  props: {
    dialogItems: {
      type: Array,
      default: () => [],
    }
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
