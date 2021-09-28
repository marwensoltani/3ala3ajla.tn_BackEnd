const mongoose = require("mongoose");

const CarSchema = new mongoose.Schema(
  {
    // TAB 1
    make: {
      type: String
    },
    model: {
      type: String
    },
    category: {
      type: String
    },
    type_of_use: {
      type: String
    },
    previous_owners: {
      type: String
    },
    had_accidents: {
      type: String
    },
    // TAB 2
    color: {
      type: String
    },
    number_of_cylinders: {
      type: Number
    },
    energy: {
      type: String
    },
    transmission: {
      type: Object
    },
    last_drain_date: {
      type: String
    },
    hp: {
      type: Number
    },
    number_of_places: {
      type: Number
    },
    number_of_doors: {
      type: Number
    },
    current_mileage: {
      type: Number
    },
    day_driving_average: {
      type: Number
    },
    oil_type: {
      type: Number
    },
    options: {
      type: Object
    },
    // TAB 3
    plate_number: {
      type: String
    },
    chassis_number: {
      type: String
    },
    release_date: {
      type: Date
    },
    insurance_expiration_date: {
      type: String
    },
    imgs: {
      type: Object
    },
    textarea: {
      type: String
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    }
  },
  { timestamps: true }
);

const CarModel = mongoose.model("Car", CarSchema);

module.exports = CarModel;
