const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class WorkerOperation extends Operation {
  constructor() {
    super();
    this.workerService = require("../../services").workerService;
    this.userService = require("../../services").userService;
    this.appointmentService = require("../../services").appointmentService;
  }

  getWorkers() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      this.workerService.getWorkers().then((workers) => {
        workers.forEach((element, index) => {
          var acc = 0;
          this.appointmentService
            .getAppointmentByIdRate({ workerId: element._id, rated: true })
            .then((appointments) => {
              if (appointments.length > 0) {
                appointments.forEach((elem) => {
                  acc += elem.rate;
                });
                acc = acc / appointments.length;
              }
              workers[index].rate = acc;

              if (index === workers.length - 1) {
                this.emit(SUCCESS, workers);
              }
            });
        });
      });
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addWorker(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.addWorker(payload);
      const user = await this.userService.updateUser(payload);

      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }

  async getWorkerById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.getWorkerById(_id);
      if (!worker) {
        throw ErrorUtil.createNotFoundError({
          details: "Worker not found. Please register"
        });
      }
      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async getWorkerByUserId(_id) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.getWorkerByUserId(_id);
      if (!worker) {
        throw ErrorUtil.createNotFoundError({
          details: "Worker not found. Please register"
        });
      }
      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async updateWorker(payload) {
    var _id = payload._id;
    delete payload._id;
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.updateWorker(_id, payload);
      if (!worker) {
        throw ErrorUtil.createNotFoundError({
          details: "Worker not found. Please register"
        });
      }
      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async addAppointment(id, payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.addAppointment(id, payload);
      if (!worker) {
        throw ErrorUtil.createNotFoundError({
          details: "We are Sorry ther is something Wrong!"
        });
      }
      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log("worker Oper Add Appo error ", error);
      this.emit(ERROR, error);
    }
  }
  async applyWorkerReward(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.applyWorkerReward(payload);
      if (!worker) {
        throw ErrorUtil.createNotFoundError({
          details: "We are Sorry, something went Wrong!"
        });
      }
      this.emit(SUCCESS, worker);
    } catch (error) {
      console.log("error ", error);
      this.emit(ERROR, error);
    }
  }
}

WorkerOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = WorkerOperation;
