const operations = require("../../operations");

module.exports = {
  async getProducts(req, res, next) {
    const productOperation = new operations.ProductOperation();
    const { SUCCESS, ERROR } = productOperation.outputs;
    
    productOperation
      .on(SUCCESS, (products) => res.send(products))
      .on(ERROR, next);

    const products = await productOperation.getProducts();
  
  },

  async addProduct(req, res, next) {
    const productOperation = new operations.ProductOperation();
    const { SUCCESS, ERROR } = productOperation.outputs;
    
    productOperation
      .on(SUCCESS, (products) => res.send(products))
      .on(ERROR, next);

    const product = await productOperation.addProduct(req.body);
 
  },

  async getProductById(req, res, next) {
    const productOperation = new operations.ProductOperation();
    const { SUCCESS, ERROR } = productOperation.outputs;

    productOperation
      .on(SUCCESS, (products) => res.send(products))
      .on(ERROR, next);
    const product = await productOperation.getProductById(req.params);
  },
  async getProductPPById(req, res, next) {
    const productOperation = new operations.ProductOperation();
    const { SUCCESS, ERROR } = productOperation.outputs;

    productOperation
      .on(SUCCESS, (products) => res.send(products))
      .on(ERROR, next);
    const product = await productOperation.getProductPPById(req.params);
  },
  async deleteProductById(req, res, next) {
    const productOperation = new operations.ProductOperation();
    const { SUCCESS, ERROR } = productOperation.outputs;

    productOperation
      .on(SUCCESS, (products) => res.send(products))
      .on(ERROR, next);
    const product = await productOperation.deleteProductById(req.params);
  }
};
