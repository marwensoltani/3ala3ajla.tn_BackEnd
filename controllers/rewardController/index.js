const operations = require("../../operations");

module.exports = {
  async getRewards(req, res, next) {
    const rewardOperation = new operations.RewardOperation();
    const { SUCCESS, ERROR } = rewardOperation.outputs;

    rewardOperation.on(SUCCESS, (rewards) => res.send(rewards)).on(ERROR, next);

    const rewards = await rewardOperation.getRewards();
  },

  async addReward(req, res, next) {
    const rewardOperation = new operations.RewardOperation();
    const { SUCCESS, ERROR } = rewardOperation.outputs;

    rewardOperation.on(SUCCESS, (reward) => res.send(reward)).on(ERROR, next);

    const reward = await rewardOperation.addReward(req.body);
  },
};
