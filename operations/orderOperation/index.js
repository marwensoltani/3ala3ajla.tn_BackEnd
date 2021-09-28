const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class OrderOperation extends Operation {
  constructor() {
    super();
    this.orderService = require("../../services").orderService;
  }

  async getorders() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const orders = await this.orderService.getorders();
      this.emit(SUCCESS, orders);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addorder(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const order = await this.orderService.addorder(payload);
      this.emit(SUCCESS, order);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getorderById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const order = await this.orderService.getorderById(_id);
      if (!order) {
        throw ErrorUtil.createNotFoundError({
          details: "order not found."
        });
      }
      this.emit(SUCCESS, order);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async updateOrderById({ _id }, payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const order = await this.orderService.updateOrderById(_id, payload);
      if (!order) {
        throw ErrorUtil.createNotFoundError({
          details: "order not found."
        });
      }
      this.emit(SUCCESS, order);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getorderByStoreId({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const order = await this.orderService.getorderByStoreId(_id);
      if (!order) {
        throw ErrorUtil.createNotFoundError({
          details: "order not found."
        });
      }
      this.emit(SUCCESS, order);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
}

OrderOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = OrderOperation;
