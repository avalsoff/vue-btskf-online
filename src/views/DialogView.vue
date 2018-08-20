<template>
  <div class="about">
    <HeaderPanel heading="Диалог" status="open">
      <ButtonComponent 
        slot="left"
        icon="angle-left"
        iconSize="65"
        :onClick="goToChats"
      />
      <ButtonComponent 
        slot="right"
        icon="phone-call"
        iconSize="70"
      />
    </HeaderPanel>
    <ChatDialog 
      :messages="messages"
    />
    <footer class="about__footer">
      <SendUIs :isLast="true">
        <ButtonComponent 
          icon="add"
        />
        <InputText 
          placeholder="Текст сообщения"
          :auto-expand="true"
          v-model="currentMessage"
          @send="sendMessage"
          :onEnterPress="sendMessage"
        />
        <ButtonComponent 
          text="Отпр."
          :onClick="sendMessage"
        />
      </SendUIs>
    </footer>
  </div>
</template>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import InputText from '@/components/InputText.vue'
import SendUIs from '@/components/SendUIs.vue'
import ChatDialog from '@/components/ChatDialog.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogItems from '@/components/DialogItems.vue'

export default {
  components: {
    HeaderPanel,
    InputText,
    SendUIs,
    ChatDialog,
    ButtonComponent,
    DialogItems,
  },
  data () {
    return {
      currentMessage: '',
      nextId: 3,
      messages: [
        {
          id: 0,
          text: 'Здравствуйте, подскажите пожалуйста, возможно ли.. Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. ',
          isRightPosition: true
        },
        {
          id: 1,
          text: 'Да, конечно, для этого вам нужно обратиться в Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. ',
          isRightPosition: false
        },
        // {
        //   id: 2,
        //   text: 'Вам потребуется паспорт, документы на квартиру, ИННю Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. ',
        //   isRightPosition: false
        // },
      ],
    }
  },
  methods: {
    goToChats () {
      this.$router.push('chats');
    },
    sendMessage () {
      if (!this.currentMessage) return
      this.messages.push({
        id: this.nextId++,
        text: this.currentMessage,
        isRightPosition: true
      })
      this.currentMessage = ''
    }
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
