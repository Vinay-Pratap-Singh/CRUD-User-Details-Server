const express = require("express");
const router = express.Router();
const user = require("../model/userSchema");
const { route } = require("./adduser");

router.post("/displayuser", async(req, res) => {
    const data = await user.find();
    // converting the data into the json format
    res.send(JSON.stringify(data));
})

module.exports = router;