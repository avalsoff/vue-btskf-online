<template>
  <div class="about">
    <HeaderPanel heading="Задачи">
      <ButtonComponent 
        slot="right"
        icon="edit"
        iconSize="70"
        :onClick="showNewForm"
      />
      <ButtonComponent 
        slot="left"
        icon="menu"
        iconSize="70"
        :onClick="goToMenu"
      />
      <ButtonComponent 
        slot="center-right"
        icon="filter"
        iconSize="60"
        :onClick="() => showFilters = true"
      />
    </HeaderPanel>
    <DialogItems      
      @click.native="hideNewForm"
      :dialogItems="dialogItems"
    />
    <footer v-if="!showForm" class="about__footer">
      <SendUIs>
        <InputText 
          placeholder="Название диалога"
          :auto-expand="true"
          v-model="currentName"
          :focused="true"
          :onEnterPress="createNewDialog"
        />
      </SendUIs>
      <SendUIs :isLast="true">
        <InputText 
          placeholder="Текст сообщения"
          :auto-expand="true"
          v-model="currentMessage"
          :onEnterPress="createNewDialog"
        />
        <ButtonComponent 
          text="Отпр."
          :onClick="createNewDialog"
        />
      </SendUIs>
    </footer>
    <ModalComponent 
      v-if="showFilters" 
      @close="showFilters = false"
    >
      <!-- TODO: Make component from it -->
      <div class="filters">
        <h4 class="filters__heading">Фильтр по статусам</h4>
        <div class="filters__filter">
          <label>
            <input type="checkbox">
            <span></span>
            Открыто
          </label>
        </div>
        <div class="filters__filter">
          <label>
            <input type="checkbox">
            <span></span>
            Закрыто
          </label>
        </div>
        <div class="filters__filter">
          <label>
            <input type="checkbox">
            <span></span>
            В очереди
          </label>
        </div>
      </div>
    </ModalComponent>
  </div>
</template>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import InputText from '@/components/InputText.vue'
import SendUIs from '@/components/SendUIs.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogItems from '@/components/DialogItems.vue'
import ModalComponent from '@/components/ModalComponent.vue'

export default {
  components: {
    HeaderPanel,
    InputText,
    SendUIs,
    ButtonComponent,
    DialogItems,
    ModalComponent
  },
  data () {
    return {
      showFilters: false,
      currentMessage: '',
      currentName: '',
      showForm: true,
      dialogItems: [
        {
          id: 0,
          heading: 'Обеспечение госконтракта',
          status: 'open',
          date: 'Сегодня'
        },
        {
          id: 1,
          heading: 'Создание счета',
          status: 'open',
          date: 'Вчера'
        },
        {
          id: 2,
          heading: 'Бонусы',
          status: 'close',
          date: 'Вчера'
        },
      ],
      nextId: 3
    }
  },
  methods: {
    showNewForm () {
      this.showForm = false
    },
    hideNewForm () {
      this.showForm = true
    },
    goToMenu () {
      this.$router.push('menu')
    },
    createNewDialog () {
      if (!this.currentName) return
      this.dialogItems.unshift({
        id: this.nextId++,
        heading: this.currentName,
        status: 'open'
      })
      this.currentMessage = ''
      this.currentName = ''
    },
  }
}
</script>

<style lang="scss">
@import '../styles/main';

.about {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.filters {
  &__heading {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__filter {
    border-bottom: 1px solid rgba(#000, .05);
    padding: 12px 0;
    &:last-child{
      border-bottom: none;
    }
    span {
      position: absolute;
      left: 3px;
      top: 3px;
      border: 1px solid #B2B2B2;
      display: block;
      width: 14px;
      height: 14px;
      border-radius: 3px;
    }
    label {
      position: relative;
      display: block;
      margin-left: -2px;
    }
    input {
      visibility: hidden;
    }
    input:checked + span::before {
      position: absolute;
      content: "";
      background: $dark;
      border-radius: 50%;
      width: 8px;
      height: 8px;
      top: 2px;
      left: 2px;
    }
  }
}
</style>
