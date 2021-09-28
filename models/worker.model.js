const mongoose = require("mongoose");
const workerSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user"
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  rate: {
    type: Number,
    required: true,
    default: 1
  },
  speciality: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default:
      "http://res.cloudinary.com/ala-3ajla/image/upload/v1610762861/Images/ysy90icnar54s6cyjt5l.jpg"
  },
  twitter: {
    type: String
  },
  facebook: {
    type: String
  },
  instagram: {
    type: String
  },

  adress: {
    type: String
  },
  postecode: {
    type: Number
  },
  country: {
    type: String
  },
  website: {
    type: String
  },
  state: {
    type: String
  },
  brand: {
    type: [String]
  },
  hourfrom: {
    type: String
  },
  hourto: {
    type: String
  },
  geoLocation: {
    type: Array
  },
  storeAddress: {
    type: String
  },
  credits: {
    type: Number,
    default: 10
  },
  messages: [
    {
      Id: { type: mongoose.Schema.Types.ObjectId, ref: "message" }
    }
  ],
  secretCode: {
    type: String,
    unique: true
  },
  claimedRewards: [
    {
      Id: { type: mongoose.Schema.Types.ObjectId, ref: "reward" },
      claimDate: { type: Date }
    }
  ],
  visibility: {
    type: String,
    default: "rate"
  },
  visiblityExpirationDate: {
    type: Date,
    default: null
  }
});

const WorkerModel = mongoose.model("worker", workerSchema);

module.exports = WorkerModel;
