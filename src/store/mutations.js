import Vue from 'vue'

export default {
  receiveAll (state, messages) {
    let latestMessage
    messages.forEach(message => {
      // create new thread if the thread doesn't exist
      if (!state.threads[message.threadID]) {
        createThread(state, message.threadID, message.threadName, message.threadStatus, message.timestamp)
      }
      // mark the latest message
      if (!latestMessage || message.timestamp > latestMessage.timestamp) {
        latestMessage = message
      }
      // add message
      addMessage(state, message)
    })
    // set initial thread to the one with the latest message
    setCurrentThread(state, latestMessage.threadID)
  },

  receiveMessage (state, message) {
    addMessage(state, message)
  },

  switchThread (state, id) {
    setCurrentThread(state, id)
  },

  receiveThread (state, thread) {
    createThread(
      state, 
      't_' + Date.now(), 
      thread.name, 
      thread.status, 
      Date.now()
    )
  }
}

function createThread (state, id, name, status, timestamp) {
  Vue.set(state.threads, id, {
    id,
    name,
    messages: [],
    lastMessage: null,
    status,
    timestamp
  })
}

function addMessage (state, message) {
  // add a `isRead` field before adding the message
  message.isRead = message.threadID === state.currentThreadID
  // add it to the thread it belongs to
  const thread = state.threads[message.threadID]
  if (!thread.messages.some(id => id === message.messageID)) {
    thread.messages.push(message.messageID)
    thread.lastMessage = message
  }
  // add it to the messages map
  Vue.set(state.messages, message.messageID, message)
}

function setCurrentThread (state, id) {
  state.currentThreadID = id
  if (!state.threads[id]) {
    debugger
  }
  // mark thread as read
  // state.threads[id].lastMessage.isRead = true
}
