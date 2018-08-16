<template>
  <div class="about">
    <HeaderPanel heading="Hello world">
      <Button-component 
        slot="left"
        icon="angle-left"
        iconSize="65"
        :onClick="goToChats"
      />
      <Button-component 
        slot="right"
        icon="phone-call"
        iconSize="70"
      />
    </HeaderPanel>
    <ChatDialog />
    <footer class="about__footer">
      <SendUIs :isLast="true">
        <ButtonComponent 
          icon="add"
        />
        <InputText 
          placeholder="Текст сообщения"
          :auto-expand="true"
        />
        <ButtonComponent 
          text="Отпр." 
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
  methods: {
    goToChats () {
      this.$router.push('chats');
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
