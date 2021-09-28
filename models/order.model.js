const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  adress: { type: {} },
  products: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "product" },
      store: { type: mongoose.Schema.Types.ObjectId, ref: "store" },
      quantity: Number,
      price: Number,
      status: String,
      total: Number
    }
  ],
  total: Number,
  status: String
});

const orderModel = mongoose.model("order", orderSchema);

module.exports = orderModel;
