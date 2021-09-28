const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.productController.getProducts);

router.get("/:_id", controllers.productController.getProductById);

router.get("/pp/:_id", controllers.productController.getProductPPById);

router.post("/", controllers.productController.addProduct);
// router.put("/", controllers.productController.addProduct);

router.delete("/:_id", controllers.productController.deleteProductById);

module.exports = router;
