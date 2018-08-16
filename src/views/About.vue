<template>
  <div class="about">
    <HeaderPanel heading="Hello world">
      <Button-component 
        slot="left"
        icon="angle-left"
        iconSize="65"
      />
      <Button-component 
        slot="right"
        icon="phone-call"
        iconSize="70"
      />
    </HeaderPanel>
    <DialogItems />
    <footer class="about__footer">
      <SendUIs>
        <InputText 
          placeholder="Название диалога"
          :auto-expand="true"
        />
      </SendUIs>
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
import ChatMessage from '@/components/ChatMessage.vue'
import InputText from '@/components/InputText.vue'
import SendUIs from '@/components/SendUIs.vue'
import ChatDialog from '@/components/ChatDialog.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogPreview from '@/components/DialogPreview.vue'
import DialogItems from '@/components/DialogItems.vue'

export default {
  components: {
    HeaderPanel,
    ChatMessage,
    InputText,
    SendUIs,
    ChatDialog,
    ButtonComponent,
    DialogPreview,
    DialogItems,
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
