<template>
<a class="dialog-preview">
  <div class="dialog-preview__row">
    <h2 class="dialog-preview__heading">
      Обеспечение госконтракта
    </h2>
    <!-- Router link -->
    <div class="dialog-preview__button">
      Вчера
    </div>
  </div>
  <div class="dialog-preview__status">Статус</div>
</a>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.dialog-preview {
  display: block;
  border-bottom: 1px solid #F5F5F6;
  padding: 12px;
  padding-left: 0;


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

    &::before {
      content: "";
      position: absolute;
      left: -12px;
      top: 3px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: #579136;
    }
  }

  &__button {
    position: relative;
    display: block;
    width: 55px;
    font-size: 12px;
    color: #C4C8CD;
    display: flex;

    &::after {
      content: "";
      position: absolute;
      width: 12px;
      height: 12px;
      right: 0;
      top: 1px;

      background-image: url('../assets/angle-right.svg');
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
}
</style>
