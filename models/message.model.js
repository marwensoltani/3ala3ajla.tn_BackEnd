const mongoose = require("mongoose");
const messageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  },
  extra: {
    type: String
  },
  isRead: {
    type: Boolean
  },
  to: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  createdAt: {
    type: Date
  }
});

const MessageModel = mongoose.model("message", messageSchema);
module.exports = MessageModel;
