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
    <ChatDialog/>
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
          :focused="true"
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

import { mapActions, mapGetters } from 'vuex'

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
      nextId: 3
    }
  },
  computed: {
    ...mapGetters({
      thread: 'currentThread'
    })
  },
  methods: {
    goToChats () {
      this.$router.push('chats');
    },
    ...mapActions({
      sendMessage (dispatch) {
        if (this.currentMessage.trim()) {
          dispatch('sendMessage', {
            text: this.currentMessage,
            thread: this.thread
          })
          this.currentMessage = ''
        }
      }
    })
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
