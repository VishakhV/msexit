const mongoose = require("mongoose");
//Write missing code here
mongoose
  .connect("mongodb+srv://vishakh:user@cluster0.3l4ev0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
