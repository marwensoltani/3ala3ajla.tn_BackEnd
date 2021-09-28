const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.carController.getCars);

router.post("/", controllers.carController.addCar);

router.get("/:_id", controllers.carController.getCarById);

router.get("/user/:_id", controllers.carController.getCarByUserId);

router.delete("/:_id", controllers.carController.deleteCarById);

module.exports = router;
