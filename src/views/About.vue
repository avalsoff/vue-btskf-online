<template>
  <div class="about">
    <HeaderPanel heading="Hello world">
      <Button-component slot="left" />
      <Button-component slot="right" />
    </HeaderPanel>
    <div style="flex-grow:1">
      <!-- <ChatDialog /> -->
      <DialogPreview />
      <DialogPreview />
    </div>
    <footer class="about__footer">
      <SendUIs>
        <InputText 
          placeholder="Название диалога"
          :auto-expand="true"
        />
      </SendUIs>
      <SendUIs :isLast="true">
        <ButtonComponent 
          icon="../assets/logo.png"
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
import ChatMessage from '@/components/ChatMessage.vue'
import InputText from '@/components/InputText.vue'
import SendUIs from '@/components/SendUIs.vue'
import ChatDialog from '@/components/ChatDialog.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogPreview from '@/components/DialogPreview.vue'

export default {
  components: {
    HeaderPanel,
    ChatMessage,
    InputText,
    SendUIs,
    ChatDialog,
    ButtonComponent,
    DialogPreview
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
