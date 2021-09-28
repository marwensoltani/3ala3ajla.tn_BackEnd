const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.orderController.getOrders);

router.get("/:_id", controllers.orderController.getOrderById);

router.put("/:_id", controllers.orderController.updateOrderById);

router.get("/pp/:_id", controllers.orderController.getOrderByStoreId);

router.post("/", controllers.orderController.addOrder);

module.exports = router;
