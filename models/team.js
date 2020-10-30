const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teamSchema = new Schema({
  teamName: {
    type: String,
    required: true,
  },
  players: [{ type: Schema.Types.ObjectId, ref: "Player" }],
});

module.exports = mongoose.model("Team", teamSchema);
