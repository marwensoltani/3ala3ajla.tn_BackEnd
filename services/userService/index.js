module.exports = new (class UserService {
  constructor() {
    this.user = require("../../models/user.model.js");
    this.worker = require("../../models/worker.model.js");
  }

  getUsers() {
    return this.user.find();
  }

  getUserById(_id) {
    return this.user.findById(_id).populate("messages");
  }

  getUserByEmail(email) {
    return this.user.findOne({ email });
  }

  addUser(payload) {
    return this.user.create(payload);
  }

  updateUserProfile(_id, payload) {
    console.log("serv", payload);
    delete payload._id;
    return this.user.findByIdAndUpdate(_id, payload);
  }

  updateUser({ userId }) {
    return this.user.findByIdAndUpdate(userId, { isPartner: true });
  }
  updateUserStore({ user }) {
    return this.user.findByIdAndUpdate(user, { isPP: true });
  }

  addMessageToUSer(userId, message) {
    return this.user.findByIdAndUpdate(userId, {
      $push: { messages: message }
    });
  }

  getWorkerBySecretCode(secretCode) {
    return this.worker.findOne({ secretCode });
  }

  async applyCode(payload) {
    let currentWorker = await this.worker.findOne({
      secretCode: payload.secretCode
    });
    let currentUser = await this.user.findById(payload.userId);
    let workerUser = await this.getUserById(currentWorker.userId);

    let updatedUser = await this.user.findByIdAndUpdate(currentUser._id, {
      $set: { credits: currentUser.credits - payload.reward.amount },
      $push: { claimedRewards: payload.reward }
    });

    let updatedWorker = await this.user.updateOne(
      { _id: workerUser._id },
      { credits: workerUser.credits + payload.reward.amount }
    );
    return updatedWorker;
  }
})();
