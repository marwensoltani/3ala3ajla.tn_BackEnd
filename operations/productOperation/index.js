const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class ProductOperation extends Operation {
  constructor() {
    super();
    this.productService = require("../../services").productService;
  }

  async getProducts() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const products = await this.productService.getProducts();
      this.emit(SUCCESS, products);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addProduct(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const product = await this.productService.addProduct(payload);
      this.emit(SUCCESS, product);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getProductById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const product = await this.productService.getProductById(_id);
      if (!product) {
        throw ErrorUtil.createNotFoundError({
          details: "Product not found."
        });
      }
      this.emit(SUCCESS, product);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async getProductPPById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const product = await this.productService.getProductPPById(_id);
      if (!product) {
        throw ErrorUtil.createNotFoundError({
          details: "Product not found."
        });
      }
      this.emit(SUCCESS, product);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async deleteProductById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const product = await this.productService.deleteProductById(_id);
      if (!product) {
        throw ErrorUtil.createNotFoundError({
          details: "Product not found."
        });
      }
      this.emit(SUCCESS, product);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
}

ProductOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = ProductOperation;
