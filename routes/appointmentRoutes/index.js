const router = require("express").Router();
const controllers = require("../../controllers");

router.get("/", controllers.appointmentController.getAppointments);

router.post("/", controllers.appointmentController.addAppointment);

router.get("/:_id", controllers.appointmentController.getAppointmentById);
router.get(
  "/accepted/:_id",
  controllers.appointmentController.getAppointmentByIdAccepted
);
router.delete("/:_id", controllers.appointmentController.deleteAppointment);
router.get(
  "/worker/:_id",
  controllers.appointmentController.getWorkerAppointmentById
);

router.get(
  "/user/:_id",
  controllers.appointmentController.getUserAppointmentById
);
router.put("/:_id", controllers.appointmentController.updateAppointment);
router.post(
  "/add/appointment/:_id",
  controllers.appointmentController.addAppointment
);
// router.get(
//   "/events/:_id",
//   controllers.appointmentController.getAppointment
// );

module.exports = router;
