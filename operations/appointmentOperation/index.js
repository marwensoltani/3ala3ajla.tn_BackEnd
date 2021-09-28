const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class AppointmentOperation extends Operation {
  constructor() {
    super();
    this.appointmentService = require("../../services").appointmentService;
    this.workerService = require("../../services").workerService;
  }

  async getAppointments() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointments = await this.appointmentService.getAppointments();
      this.emit(SUCCESS, appointments);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async deleteAppointment(id) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointments = await this.appointmentService.deleteAppointment(id);
      this.emit(SUCCESS, appointments);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async getAppointmentByIdAccepted({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointment = await this.appointmentService.getAppointmentByIdAccepted(_id);
      if (!appointment) {
        throw ErrorUtil.createNotFoundError({
          details: "Appointment not found. Please register"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async getAppointmentById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointment = await this.appointmentService.getAppointmentById(_id);
      if (!appointment) {
        throw ErrorUtil.createNotFoundError({
          details: "Appointment not found. Please register"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async getWorkerAppointmentById(_id) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const worker = await this.workerService.getWorkerByUserId(_id);

      var { _id } = worker;

      const appointment = await this.appointmentService.getAppointmentById(_id);
      if (!appointment) {
        throw ErrorUtil.createNotFoundError({
          details: "Appointment not found. Please register"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async getUserAppointmentById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointment = await this.appointmentService.getUserAppointmentById(
        _id
      );
      if (!appointment) {
        throw ErrorUtil.createNotFoundError({
          details: "Appointment not found. Please register"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async addAppointment(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointment = await this.appointmentService.addAppointment(payload);
      if (!appointment) {
        console.log("appointment---------", appointment);
        throw ErrorUtil.createNotFoundError({
          details: "We are Sorry ther is something Wrong!"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log("appointment Oper Add Appo error ", error);
      this.emit(ERROR, error);
    }
  }
  async updateAppointment({ _id }, update) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const appointment = await this.appointmentService.updateAppointment(
        _id,
        update
      );
      if (!appointment) {
        console.log("appointment---------", appointment);
        throw ErrorUtil.createNotFoundError({
          details: "We are Sorry ther is something Wrong!"
        });
      }
      this.emit(SUCCESS, appointment);
    } catch (error) {
      console.log("appointment Oper Add Appo error ", error);
      this.emit(ERROR, error);
    }
  }
}

AppointmentOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = AppointmentOperation;
