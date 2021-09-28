const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.rewardController.getRewards);
router.post("/", controllers.rewardController.addReward)

module.exports = router;
