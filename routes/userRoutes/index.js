const router = require("express").Router();
const controllers = require("../../controllers");

router.post("/signup", controllers.userController.signup);

router.post("/login", controllers.userController.login);

router.post("/session", controllers.userController.session);

router.post("/loginGoogle", controllers.userController.loginGoogle);

router.post("/loginFacebook", controllers.userController.loginFacebook);

router.get("/", controllers.userController.getUsers);

router.post("/", controllers.userController.addUser);

router.get("/:_id", controllers.userController.getUserById);

router.put("/:_id", controllers.userController.updateUserProfile);

router.post("/apply_code", controllers.userController.applyCode);

module.exports = router;
