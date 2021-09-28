const operations = require("../../operations");

module.exports = {
  async getCars(req, res, next) {
    const carOperation = new operations.CarOperation();
    const { SUCCESS, ERROR } = carOperation.outputs;

    carOperation.on(SUCCESS, (cars) => res.send(cars)).on(ERROR, next);

    const cars = await carOperation.getCars();
  },

  async addCar(req, res, next) {
    const carOperation = new operations.CarOperation();
    const { SUCCESS, ERROR } = carOperation.outputs;

    carOperation.on(SUCCESS, (cars) => res.send(cars)).on(ERROR, next);

    const car = await carOperation.addCar(req.body);
  },

  async getCarById(req, res, next) {
    const carOperation = new operations.CarOperation();
    const { SUCCESS, ERROR } = carOperation.outputs;

    carOperation.on(SUCCESS, (cars) => res.send(cars)).on(ERROR, next);
    const car = await carOperation.getCarById(req.params);
  },
  async getCarByUserId(req, res, next) {
    const carOperation = new operations.CarOperation();
    const { SUCCESS, ERROR } = carOperation.outputs;

    carOperation.on(SUCCESS, (cars) => res.send(cars)).on(ERROR, next);
    const car = await carOperation.getCarByUserId(req.params);
  },
  async deleteCarById(req, res, next) {
    const carOperation = new operations.CarOperation();
    const { SUCCESS, ERROR } = carOperation.outputs;

    carOperation.on(SUCCESS, (cars) => res.send(cars)).on(ERROR, next);
    const car = await carOperation.deleteCarById(req.params);
  }
};
