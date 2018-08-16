<template>
  <div class="about">
    <HeaderPanel heading="Hello world">
      <Button-component 
        slot="right"
        icon="edit"
        iconSize="70"
        :onClick="showNewForm"
      />
      <Button-component 
        slot="left"
        icon="menu"
        iconSize="70"
        :onClick="goToMenu"
      />
      <Button-component 
        slot="center-right"
        icon="filter"
        iconSize="60"
      />
    </HeaderPanel>
    <DialogItems 
      :dialogItems="dialogItems"
    />
    <footer v-if="!isFormHidden" class="about__footer">
      <SendUIs>
        <InputText 
          placeholder="Название диалога"
          :auto-expand="true"
          v-model="currentName"
        />
      </SendUIs>
      <SendUIs :isLast="true">
        <!-- <ButtonComponent 
          icon="add"
        /> -->
        <InputText 
          placeholder="Текст сообщения"
          :auto-expand="true"
          v-model="currentMessage"
        />
        <ButtonComponent 
          text="Отпр."
          :onClick="createNewDialog"
        />
      </SendUIs>
    </footer>
  </div>
</template>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import InputText from '@/components/InputText.vue'
import SendUIs from '@/components/SendUIs.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogItems from '@/components/DialogItems.vue'

export default {
  components: {
    HeaderPanel,
    InputText,
    SendUIs,
    ButtonComponent,
    DialogItems,
  },
  data () {
    return {
      currentMessage: '',
      currentName: '',
      isFormHidden: true,
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
      this.isFormHidden = false
    },
    hideNewForm () {
      this.isFormHidden = true
    },
    goToMenu () {
      this.$router.push('menu')
    },
    createNewDialog () {
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

<style>
.about {
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
