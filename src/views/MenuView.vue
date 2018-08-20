<template>
  <div class="wrapper">
    <HeaderPanel heading="Меню">      
      <ButtonComponent
        slot="left"
        icon="menu"
        iconSize="70"
        :onClick="goBack"
      />
    </HeaderPanel>
    <main class="menu">
      <ul class="menu__items">
        <router-link tag="li" to="/chats" class="menu__item menu__item--todos">
          <a class="menu__link">Задачи</a>
        </router-link>
        <router-link tag="li" to="/companies" class="menu__item menu__item--companies">
          <a class="menu__link">Компании</a>
        </router-link>     
        <router-link tag="li" to="/settings" class="menu__item menu__item--settings">
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
  background-color: $light;
  height: 100%;
  background-image:
    url('../assets/logo1.svg'),
    url('../assets/pattern.svg');
  background-repeat: 
    no-repeat,
    no-repeat;
  background-size: 
    160px, 
    cover;
  background-position: 
    50% 90px, 
    50% -25px;
}

.menu {
  color: #000;

  &__items {
    @include list-reboot();
    width: 100px;
    margin: 0 auto;
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

    &--companies::before {
      background-image: url('../assets/portfolio.svg');
    }
  }

  &__link {
    font-size: 14px;
    color: #000;
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
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>