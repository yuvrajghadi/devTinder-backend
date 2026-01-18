const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
require('dotenv').config();

const app = express();
const PORT = 3000;

app.use(express.json());

app.post("/signup", async(req, res) => {
  const user = new User(req.body);

  try {
  await  user.save()
    res.send('User Saved susscefully')
  } catch (err) {
    res.status(400).send("user  not saved",err.msg)
  }
});

connectDB()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(PORT, () => {
      console.log(`app is listing on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed", err);
  });
