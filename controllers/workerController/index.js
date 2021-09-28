const operations = require("../../operations");

module.exports = {
  async getWorkers(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);

    const workers = await workerOperation.getWorkers();
  },

  async addWorker(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);

    const worker = await workerOperation.addWorker(req.body);
  },
  async addAppointment(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);
    const worker = await workerOperation.addAppointment(
      req.params._id,
      req.body.event
    );
  },
  async getWorkerById(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);
    const worker = await workerOperation.getWorkerById(req.params);
  },
  async getWorkerByUserId(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);
    const worker = await workerOperation.getWorkerByUserId(req.params);
  },
  async updateWorker(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (workers) => res.send(workers)).on(ERROR, next);
    const worker = await workerOperation.updateWorker(req.body);
  },
  async applyWorkerReward(req, res, next) {
    const workerOperation = new operations.WorkerOperation();
    const { SUCCESS, ERROR } = workerOperation.outputs;

    workerOperation.on(SUCCESS, (worker) => res.send(worker)).on(ERROR, next);
    const worker = await workerOperation.applyWorkerReward(req.body);
  }
};
