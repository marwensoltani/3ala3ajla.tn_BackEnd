const utils = require("../../utils/secretCodeGenerator");
module.exports = new (class WorkerService {
  constructor() {
    this.worker = require("../../models/worker.model.js");
    this.user = require("../../models/user.model.js");
    this.appointment = require("../../models/appointment.model.js");
  }

  getWorkers() {
    return this.worker.find();
  }

  getWorkerById(_id) {
    return this.worker.findById({ _id });
  }
  getWorkerByUserId(_id) {
    return this.worker.findOne({ userId: _id });
  }
  updateWorker(_id, payload) {
    return this.worker.findByIdAndUpdate(_id, payload);
  }
  addWorker(payload) {
    payload.secretCode = utils.encrypt(payload.name + payload.email);
    return this.worker.create(payload);
  }

  addAppointment(id, payload) {
    return this.worker.findByIdAndUpdate(
      id,
      {
        $push: {
          appointment: {
            userId: payload.userId,
            classes: payload.classes,
            endDate: payload.endDate,
            label: payload.label,
            startDate: payload.startDate,
            title: payload.title,
            url: payload.url
          }
        }
      },
      { new: true }
    );
  }

  async applyWorkerReward(payload) {
    let currentDate = new Date();
    let daysToAdd = 0;
    let currentWorker = await this.worker.findOne({ userId: payload.userId });

    let currentUser = await this.user.findById(payload.userId);

    let updatedUser = await this.user.findByIdAndUpdate(currentUser._id, {
      $set: { credits: currentUser.credits - payload.reward.amount },
      $push: { claimedRewards: payload.reward }
    });
    let Difference_In_Time =
      currentWorker.visiblityExpirationDate.getTime() - currentDate.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    if (Difference_In_Days > 0) {
      daysToAdd = Difference_In_Days;
    }
    currentDate.setDate(
      currentDate.getDate() + payload.reward.expiresAfterDays + daysToAdd
    );
    await this.worker.findByIdAndUpdate(currentWorker._id, {
      $set: { visibility: "boosted", visiblityExpirationDate: currentDate },
      $push: {
        claimedRewards: { id: payload.reward._id, claimDate: new Date() }
      }
    });
    return   await this.user.findById(payload.userId);
  }
})();
