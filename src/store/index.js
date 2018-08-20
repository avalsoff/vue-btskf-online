import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const state = {
  currentThreadID: null,
  threads: {
    /*
    id: {
      id,
      name,
      ====> status,
      messages: [...ids],
      lastMessage
    }
    */
  },
  messages: {
    /*
    id: {
      id,
      threadId,
      threadName,
      authorName,
      text,
      timestamp,
      isRead
    }
    */
  
  //  threadID: 't_1',
  //  threadName: 'Обеспечение госконтракта',
  //  threadStatus: 'open',
  //  messageID: 'm_1',
  //  messageText: '1',
  //  messageIsMy: true,
  //  timestamp: Date.now() - 99999
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  // plugins: process.env.NODE_ENV !== 'production'
  //   ? [createLogger()]
  //   : []
})
