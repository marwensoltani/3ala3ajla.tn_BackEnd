const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class RewardOperation extends Operation {
  constructor() {
    super();
    this.rewardService = require("../../services").rewardService;
  }

  async getRewards() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const rewards = await this.rewardService.getRewards();
      this.emit(SUCCESS, rewards);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addReward(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const reward = await this.rewardService.addReward(payload);
      this.emit(SUCCESS, reward);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

}

RewardOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = RewardOperation;