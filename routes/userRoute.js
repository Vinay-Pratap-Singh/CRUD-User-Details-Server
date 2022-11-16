const express = require("express");
const { addUser, displayUser, deleteUser, updateUser } = require("../controller/userController");
const router = express.Router();

router.post("/adduser", addUser);

router.post("/displayuser", displayUser);

router.post("/deleteuser", deleteUser);

router.post("/updateuser", updateUser);
module.exports = router;