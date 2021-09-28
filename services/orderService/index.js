module.exports = new (class OrderService {
  constructor() {
    this.order = require("../../models/order.model.js");
  }

  getorders() {
    return this.order.find();
  }

  getorderById(_id) {
    return this.order.find({ user: _id }).populate("products.product");
  }

  updateOrderById(_id, payload) {
    return this.order.update(
      { "products._id": _id },
      {
        $set: {
          "products.$.status": payload.status
        }
      }
    );
  }

  getorderByStoreId(_id) {
    return this.order
      .find({ "products.store": _id })
      .populate("products.product");
  }

  addorder(payload) {
    return this.order.create(payload);
  }
})();
