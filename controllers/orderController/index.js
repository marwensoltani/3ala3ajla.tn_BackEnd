const operations = require("../../operations");

module.exports = {
  async getOrders(req, res, next) {
    const orderOperation = new operations.OrderOperation();
    const { SUCCESS, ERROR } = orderOperation.outputs;

    orderOperation.on(SUCCESS, (orders) => res.send(orders)).on(ERROR, next);

    const orders = await orderOperation.getorders();
  },

  async addOrder(req, res, next) {
    const orderOperation = new operations.OrderOperation();
    const { SUCCESS, ERROR } = orderOperation.outputs;

    orderOperation.on(SUCCESS, (orders) => res.send(orders)).on(ERROR, next);

    const order = await orderOperation.addorder(req.body);
  },

  async getOrderById(req, res, next) {
    const orderOperation = new operations.OrderOperation();
    const { SUCCESS, ERROR } = orderOperation.outputs;

    orderOperation.on(SUCCESS, (orders) => res.send(orders)).on(ERROR, next);
    const order = await orderOperation.getorderById(req.params);
  },

  async updateOrderById(req, res, next) {
    const orderOperation = new operations.OrderOperation();
    const { SUCCESS, ERROR } = orderOperation.outputs;

    orderOperation.on(SUCCESS, (orders) => res.send(orders)).on(ERROR, next);
    const order = await orderOperation.updateOrderById(req.params, req.body);
  },

  async getOrderByStoreId(req, res, next) {
    const orderOperation = new operations.OrderOperation();
    const { SUCCESS, ERROR } = orderOperation.outputs;

    orderOperation.on(SUCCESS, (orders) => res.send(orders)).on(ERROR, next);
    const order = await orderOperation.getorderByStoreId(req.params);
  }
};

