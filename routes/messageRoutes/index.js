const router = require("express").Router();
const controllers = require("../../controllers");

router.post("/", controllers.messageController.addMessage);
router.get("/:_id", controllers.messageController.getUserMessages);
router.put("/", controllers.messageController.updateMessage);

module.exports = router;
