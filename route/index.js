const express = require("express");
const router = express.Router();

// @route post User/
router.post("/create", require("../controllers/create"));

//@route Get User/
router.get("/get", require("../controllers/getUser"));


//@route Post User/
router.post("/update",require("../controllers/updateUser"))

module.exports = router;
