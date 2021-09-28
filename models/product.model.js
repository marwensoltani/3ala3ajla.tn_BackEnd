const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  brand: [],
  model: {
    type: String
  },
  type: {
    type: String
  },
  price: {
    type: Number
  },
  quantity: {
    type: Number
  },
  description: { type: String },
  store: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "userstore"
  }
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
