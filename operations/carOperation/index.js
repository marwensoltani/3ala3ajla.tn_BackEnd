const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class CarOperation extends Operation {
  constructor() {
    super();
    this.carService = require("../../services").carService;
  }

  async getCars() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const cars = await this.carService.getCars();
      this.emit(SUCCESS, cars);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addCar(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const car = await this.carService.addCar(payload);
      this.emit(SUCCESS, car);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getCarById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const car = await this.carService.getCarById(_id);
      if (!car) {
        throw ErrorUtil.createNotFoundError({
          details: "car not found. Please register"
        });
      }
      this.emit(SUCCESS, car);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async deleteCarById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const car = await this.carService.deleteCarById(_id);
      if (!car) {
        throw ErrorUtil.createNotFoundError({
          details: "car not found. Please register"
        });
      }
      this.emit(SUCCESS, car);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async getCarByUserId({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const car = await this.carService.getCarByUserId(_id);
      if (!car) {
        throw ErrorUtil.createNotFoundError({
          details: "car not found. Please register"
        });
      }
      this.emit(SUCCESS, car);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
}

CarOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = CarOperation;