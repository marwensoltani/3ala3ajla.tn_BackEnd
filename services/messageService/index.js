module.exports = new (class MessageService {
  constructor() {
    this.message = require("../../models/message.model.js");
  }

  addMessage(payload) {
    return this.message.create(payload);
  }

  getUserMessages(to) {
    return this.message.find({ to });
  }


  updateMessage(msg) {
    let msgId = msg._id
    return this.message.findByIdAndUpdate(msgId, {isRead: true})
  }
})();
