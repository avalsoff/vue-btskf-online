<template>
  <div 
    class="modal__overlay"
    @click.self="$emit('close')"
  >
    <section class="modal">
      <slot></slot>
      <!-- <button
        class="modal__close"
        @click.prevent="$emit('close')"
      ></button> -->
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.modal {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 80%;
  border-radius: 6px;
  padding: 5% 6%;
  box-shadow: 0 0 40px 5px rgba(#000, .1);

  // &__close {
  //   position: absolute;
  //   right: 3%;
  //   top: 5%;
  //   content: "";
  //   width: 20px;
  //   height: 20px;
  //   background: 0;
  //   background-image: url('../assets/close.svg');
  //   border-radius: 50%;
  //   border: none;

  // }

  &__overlay {
    position: fixed;
    background: rgba(#000, .1);
    top: 0; bottom: 0; left: 0; right: 0;
  }
}

</style>
