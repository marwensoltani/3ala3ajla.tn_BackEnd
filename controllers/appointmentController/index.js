const operations = require("../../operations");

module.exports = {
  async getAppointments(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);

    const appointments = await appointmentOperation.getAppointments();
  },

  async addAppointment(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);

    const appointment = await appointmentOperation.addAppointment(req.body);
  },
  async deleteAppointment(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);

    const appointment = await appointmentOperation.deleteAppointment(
      req.params._id
    );
  },
  async addAppointment(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => {
        res.send(appointments);
      })
      .on(ERROR, next);
    const appointment = await appointmentOperation.addAppointment(
      req.body.event
    );
  },
  async getAppointmentByIdAccepted(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);
    const appointment = await appointmentOperation.getAppointmentByIdAccepted(
      req.params
    );
  },
  async getAppointmentById(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);
    const appointment = await appointmentOperation.getAppointmentById(
      req.params
    );
  },
  async getUserAppointmentById(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);
    const appointment = await appointmentOperation.getUserAppointmentById(
      req.params
    );
  },
  async updateAppointment(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;

    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);
    console.log("controller", req.body);

    const appointment = await appointmentOperation.updateAppointment(
      req.params,
      req.body
    );
  },

  async getWorkerAppointmentById(req, res, next) {
    const appointmentOperation = new operations.AppointmentOperation();
    const { SUCCESS, ERROR } = appointmentOperation.outputs;
    appointmentOperation
      .on(SUCCESS, (appointments) => res.send(appointments))
      .on(ERROR, next);
    const appointment = await appointmentOperation.getWorkerAppointmentById(
      req.params._id
    );
  }
};
