require('dotenv').config()
const { json } = require('express');
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// connecting with my database
require("./database/connect");
const port = process.env.PORT || 5000;


// importing all my routes here
const adduser = require("./routes/adduser");
app.use("/",adduser);




// listening the app
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})