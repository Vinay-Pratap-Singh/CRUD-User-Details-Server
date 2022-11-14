const mongoose = require("mongoose");

const db = process.env.DATABASE_URL;

try {
  mongoose.connect(db);
  console.log("Database Connected Succesfully");
} catch (error) {
  console.log("Database Connection Fails\n", error);
}
