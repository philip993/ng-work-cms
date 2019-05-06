const express = require("express");
const router = express.Router();
const userCtrl = require("../controller/usersCt");

router.post("/signup", userCtrl.postSignup);
router.post("/login", userCtrl.postLogin);

module.exports = router;
