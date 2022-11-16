const express = require("express");
const { addUser, displayUser, deleteUser } = require("../controller/userController");
const router = express.Router();
const user = require("../model/userSchema");

router.post("/adduser", addUser);

router.post("/displayuser", displayUser);

router.post("/deleteuser", deleteUser);
module.exports = router;