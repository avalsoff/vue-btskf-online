<template>
<main class="dialog-items">
  <DialogPreview />
  <DialogPreview />
  <DialogPreview />
</main>
</template>

<script>
import DialogPreview from '@/components/DialogPreview.vue'

export default {
  components: {
    DialogPreview
  },
}
</script>

<style>
.dialog-items {
  flex: 1;
  overflow: auto;
  padding-left: 12px
}
</style>
