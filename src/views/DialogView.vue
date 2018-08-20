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
    <MessageList/>
    <footer class="about__footer">
      <SendFlexGrid :isLast="true">
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
      </SendFlexGrid>
    </footer>
  </div>
</template>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import InputText from '@/components/InputText.vue'
import SendFlexGrid from '@/components/SendFlexGrid.vue'
import MessageList from '@/components/MessageList.vue'
import ButtonComponent from '@/components/ButtonComponent.vue'
import DialogList from '@/components/DialogList.vue'

import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    HeaderPanel,
    InputText,
    SendFlexGrid,
    MessageList,
    ButtonComponent,
    DialogList,
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
