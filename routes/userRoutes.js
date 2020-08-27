const express = require("express");
const userController = require("../controllers/userController");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);

router.route("/").post(userController.createUser);
router.route("/:id").patch(userController.updateUser);

module.exports = router;
