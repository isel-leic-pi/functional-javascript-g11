function getShortMessages(messages) {
      return messages.filter(m => m.message.length < 50).map(m => m.message)
}

module.exports = getShortMessages
