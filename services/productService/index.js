module.exports = new (class ProductService {
  constructor() {
    this.product = require("../../models/product.model.js");
  }

  getProducts() {
    return this.product.find();
  }

  getProductById(_id) {
    return this.product.findById(_id);
  }

  addProduct(payload) {
    return this.product.create(payload);
  }

  getProductPPById(_id) {
    return this.product.find({ store: _id });
  }

  deleteProductById(_id) {
    return this.product.deleteOne({ _id: _id });
  }
})();
