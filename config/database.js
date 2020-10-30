const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/footballTracker", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log("mongoDB connected");
});
