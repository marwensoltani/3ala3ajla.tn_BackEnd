module.exports = new (class RewardService {
  constructor() {
    this.reward = require("../../models/reward.model.js");
  }

  getRewards() {
    return this.reward.find();
  }

  addReward(payload) {
    return this.reward.create(payload);
  }

})();
