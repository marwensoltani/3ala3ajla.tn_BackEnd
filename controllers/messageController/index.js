const operations = require("../../operations");

module.exports = {
  async addMessage(req, res, next) {
    const messageOperation = new operations.MessageOperation();
    const { SUCCESS, ERROR } = messageOperation.outputs;

    messageOperation
      .on(SUCCESS, (message) => res.send(message))
      .on(ERROR, next);

    const message = await messageOperation.addMessage(req.body);
  },
  async getUserMessages(req, res, next) {
    const messageOperation = new operations.MessageOperation();
    const { SUCCESS, ERROR } = messageOperation.outputs;

    messageOperation
      .on(SUCCESS, (message) => res.send(message))
      .on(ERROR, next);

    const message = await messageOperation.getUserMessages(req.params);
  },

  async updateMessage(req, res, next) {
    const messageOperation = new operations.MessageOperation();
    const { SUCCESS, ERROR } = messageOperation.outputs;

    messageOperation
      .on(SUCCESS, (message) => res.send(message))
      .on(ERROR, next);

    const message = await messageOperation.updateMessage(req.body);
  }
};
