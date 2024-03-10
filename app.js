const express = require("express");
const mongoose = require("mongoose");
const constants = require("./constant");

const app = express();
app.use(express.json());

mongoose
  .connect("mongodb+srv://vinaypk07:Sinvin@cluster0.5tnwoyz.mongodb.net/")
  .then(() => {
    console.log("Connection eastiblished !");
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("Hellow World !");
});

app.listen(constants.PORT, () => {
  console.log(`App listining at port ${constants.PORT}`);
});
