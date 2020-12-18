const express = require("express");
const router = express.Router();
const user = require("../controllers/users");

// @route post User/
router.post("/create", user.createUser);

//@route Get User/
router.get("/get", user.getUser);

//@route Post User/
router.post("/update", user.updateUser);

module.exports = router;
