const data = require('./mock-data')
const LATENCY = 16

export function getAllMessages (cb) {
  setTimeout(() => {
    cb(data)
  }, LATENCY)
}

export function createMessage ({ text, thread }, cb) {
  const timestamp = Date.now()
  const messageID = 'm_' + timestamp
  const message = {
    messageID,
    timestamp,
    messageText: text,
    threadID: thread.id,
    threadName: thread.name,
    authorName: 'Evan',
    threadStatus: 'open',
    messageIsMy: true
  }
  setTimeout(function () {
    cb(message)
  }, LATENCY)
}

// threadID: 't_5',
// threadName: 'Обеспечение госконтракта',
// threadStatus: 'open',
// messageID: 'm_10',
// messageText: '10',
// messageIsMy: false,
// timestamp: Date.now() - 9999
