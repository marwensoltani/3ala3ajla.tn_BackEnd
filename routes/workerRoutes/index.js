const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.workerController.getWorkers);

router.post("/", controllers.workerController.addWorker);

router.get("/:_id", controllers.workerController.getWorkerById);
router.get("/userId/:_id", controllers.workerController.getWorkerByUserId);
router.put("/:_id", controllers.workerController.updateWorker);

router.post(
  "/add/appointment/:_id",
  controllers.workerController.addAppointment
);
// router.get(
//   "/events/:_id",
//   controllers.workerController.getAppointment
// );
router.post(
  "/apply_worker_reward",
  controllers.workerController.applyWorkerReward
);

module.exports = router;
