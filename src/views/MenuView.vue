<template>
  <div class="wrapper">
    <HeaderPanel heading="Настройки">      
      <ButtonComponent
        slot="left"
        icon="menu"
        iconSize="70"
        :onClick="goToChats"
      />
    </HeaderPanel>
    <main class="menu">
      <ul class="menu__items">
        <router-link tag="li" to="/chats" class="menu__item menu__item--todos">
          <a class="menu__link">Тикеты</a>
        </router-link>
        <router-link tag="li" to="/chats" class="menu__item menu__item--settings">
          <a class="menu__link">Настройки</a>
        </router-link>     
      </ul>
    </main>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../styles/main";

.wrapper {
  background-color: $dark;
  height: 100%;
  background-repeat: no-repeat;
  background-position: 0 12%,
                       50% 96%;
  background-size: contain,
                   30%;
}

.menu {
  color: #fff;

  &__items {
    @include list-reboot();
    margin-left: 88px;
    margin-top: 144px;
  }

  &__item {
    position: relative;
    margin-bottom: 30px;

    &::before {
      position: absolute;
      top: 2px;
      left: -29px;
      content: "";
      width: 14px;
      height: 14px;
      background-size: contain;
      background-repeat: no-repeat;
    }

    &--todos::before {
      background-image: url('../assets/tasks.svg');
    }

    &--settings::before {
      background-image: url('../assets/settings.svg');
    }
  }

  &__link {
    font-size: 14px;
    font-family: 'Geometria Medium';
    color: #fff;
    text-decoration: none;
  }
}
</style>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  components: {
    HeaderPanel,
    ButtonComponent
  },
  methods: {
    goToChats () {
      this.$router.push('chats');
    }
  }
}
</script>