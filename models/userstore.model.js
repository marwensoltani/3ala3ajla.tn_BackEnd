const mongoose = require("mongoose");
const storeSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Adress: {
    type: String
  },
  City: {
    type: String
  },
  Country: {
    type: String
  },
  mobile: {
    type: String
  },
  email: {
    type: String
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" }
});

const UserstoreModel = mongoose.model("userstore", storeSchema);

module.exports = UserstoreModel;
