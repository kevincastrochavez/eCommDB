const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.route("/").post(userController.createUser);
router.route("/:id").patch(userController.updateUser);

module.exports = router;
