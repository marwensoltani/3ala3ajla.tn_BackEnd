const mongoose = require("mongoose");
const rewardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  amount: {
    type: Number
  },
  type: {
    type: String
  },
  expiresAfterDays: {
    type: Number
  }
});

const RewardModel = mongoose.model("reward", rewardSchema);
module.exports = RewardModel;
