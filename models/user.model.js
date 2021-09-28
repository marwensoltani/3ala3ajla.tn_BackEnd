const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  username: {
    type: String
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String
  },
  salt: {
    type: String
  },
  isPartner: {
    type: Boolean,
    default: false
  },
  isPP: {
    type: Boolean,
    default: false
  },
  photoURL: {
    type: String,
    default:
      "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-social-media-user-vector-default-avatar-profile-icon-social-media-user-vector-portrait-176194876.jpg"
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
  birthDay: {
    type: Date
  },
  mobile: {
    type: Number
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

  credits: {
    type: Number,
    default: 10
  },
  claimedRewards: [
    {
      Id: { type: mongoose.Schema.Types.ObjectId, ref: "reward" },
      claimDate: { type: Date }
    }
  ]
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
