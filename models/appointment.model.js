const mongoose = require("mongoose");
const appointmentSchema = new mongoose.Schema({
  workerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "worker"
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  classes: String,
  status: {
    type: String,
    default: "Waiting"
  },
  rate: Number,
  startDate: {
    type: Date,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  hour: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  refuseCause: {
    type: String
  },
  rated: {
    type: Boolean,
    default: false
  }
});

const AppointmentModel = mongoose.model("appointment", appointmentSchema);

module.exports = AppointmentModel;
