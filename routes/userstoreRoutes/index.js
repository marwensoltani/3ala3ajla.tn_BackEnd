const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.userstoreContoller.getUserStore);

router.post("/", controllers.userstoreContoller.addUserStore);

router.get("/:_id", controllers.userstoreContoller.getUserStoreById);

router.delete("/:id", controllers.userstoreContoller.deleteUserStore);

module.exports = router;
