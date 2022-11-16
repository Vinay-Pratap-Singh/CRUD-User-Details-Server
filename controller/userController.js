const user = require("../model/userSchema");

// add user controller
exports.addUser = async (req, res) => {
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
};

// display user controller
exports.displayUser = async (req, res) => {
  const data = await user.find();
  // converting the data into the json format
  res.send(JSON.stringify(data));
};

// delete the user
exports.deleteUser=async (req, res) => {
  try {
    const { email } = await req.body;
    // checking that the email exists or not
    const checkEmail = await user.findOne({email});
    if (checkEmail) {
      user.deleteOne({ email: email }, (err) => {
        if(err) console.log(err);
      })
      res.send("User deleted sucessfully");
    }
    else {
      res.send("User does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}