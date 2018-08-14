<template>
  <div class="about">
    <HeaderPanel 
      heading="Hello world" 
      left-button-icon="1" 
      right-button-icon="2"
    />
    <ChatMessage
      :text="longMockText"
      :timeStamp="new Date().toLocaleTimeString()"
      :isRightPosition="true"
    />
    <ChatMessage
      :text="longMockText"
      :timeStamp="new Date().toLocaleTimeString()"
      :isRightPosition="false"
    />
  </div>
</template>

<script>
import HeaderPanel from '@/components/HeaderPanel.vue'
import ChatMessage from '@/components/ChatMessage.vue'

export default {
  components: {
    HeaderPanel,
    ChatMessage
  },
  data () {
    return {
      longMockText: `Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Имеет всеми собрал, заголовок за инициал ее несколько продолжил сбить лучше lorem языком алфавит рыбными семантика которое, живет ведущими сих.`
    }
  }
}
</script>

<style>

</style>
