const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const playerSchema = new Schema({
  firstName: String,
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Player", playerSchema);
