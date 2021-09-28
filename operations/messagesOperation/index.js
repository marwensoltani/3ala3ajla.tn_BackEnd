const Operation = require("../Operation.js");

class MessageOperation extends Operation {
  constructor() {
    super();
    this.messageService = require("../../services").messageService;
  }

  async addMessage(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const message = await this.messageService.addMessage(payload);
      this.emit(SUCCESS, message);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async getUserMessages(to) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const message = await this.messageService.getUserMessages(to);
      this.emit(SUCCESS, message);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async updateMessage (msg) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const message = await this.messageService.updateMessage(msg);
      this.emit(SUCCESS, message);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

}
MessageOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = MessageOperation;
