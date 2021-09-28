module.exports = new (class AppointmentService {
  constructor() {
    this.appointment = require("../../models/appointment.model.js");
  }

  getAppointments() {
    return this.appointment.find();
  }
  deleteAppointment(id) {
    return this.appointment.findByIdAndDelete(id);
  }
  getAppointmentById(_id) {
    return this.appointment.find({ workerId: _id }).populate("userId");
  }
  getAppointmentByIdAccepted(_id) {
    return this.appointment.find({ workerId: _id , status: "Accepted"}).populate("userId");
  }
  getAppointmentByIdRate(payload) {
    return this.appointment.find(payload);
  }
  getUserAppointmentById(_id) {
    return this.appointment.find({ userId: _id }).populate("workerId");
  }
  addAppointment(payload) {
    return this.appointment.create(payload);
  }
  updateAppointment(_id, update) {
    return this.appointment.findByIdAndUpdate(_id, update);
  }
  calculateReward(price) {
    return price * 0.3;
  }

  // addAppointment(id, payload) {
  //   return this.appointment.findByIdAndUpdate(
  //     id,
  //     {
  //       $push: {
  //         appointment: {
  //           userId: payload.userId,
  //           classes: payload.classes,
  //           endDate: payload.endDate,
  //           label: payload.label,
  //           startDate: payload.startDate,
  //           title: payload.title,
  //           url: payload.url
  //         }
  //       }
  //     },
  //     { new: true }
  //   );
  // }
})();
