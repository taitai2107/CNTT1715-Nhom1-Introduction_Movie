const express = require("express");
const router = express.Router();
const controllerMethod = require("../controllers/authController");

router.post("/create/user", controllerMethod.createUser);
router.post("/login/user", controllerMethod.loginUser);
router.get("/getAll", controllerMethod.getAll);

module.exports = router;
