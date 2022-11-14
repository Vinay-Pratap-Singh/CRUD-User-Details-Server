const express = require("express");
const router = express.Router();
const user = require("../model/userSchema");

router.get("/", (req, res) => {
  res.send("Add User Route");
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, password, cpassword } = await req.body;
    const emailExist = await user.findOne({ email: email });
    const phoneExist = await user.findOne({ phone });

    // checking that the fields were empty or not
    if (!name || !email || !phone || !password || !cpassword) {
      res.send("Please fill all the given fields");
    }

    // matching the password and cpassword
    else if (password !== cpassword) {
      res.send("Password did not match");
    }

    // checking that the email id already exists or not
    else if (emailExist) {
      res.send("Email already exists");
    }

    // checking that the phone number already exist or not
    else if (phoneExist) {
      res.send("Phone Number already exist");
    }

    // adding the user to the database
    else {
      const newUser = new user({
        name,
        email,
        phone,
        password,
        cpassword,
      });
      await newUser.save();
      res.send("User added sucessfully");
    }
  } catch (error) {}
});

module.exports = router;
