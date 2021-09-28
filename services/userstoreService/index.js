module.exports = new (class UserStoreService {
  constructor() {
    this.userstore = require("../../models/userstore.model.js");
  }

  getUserStores() {
    return this.userstore.find();
  }

  getUserStoreById(_id) {
    return this.userstore.find({ "user": _id });
  }

  addUserStore(payload) {
    return this.userstore.create(payload);
  }
  deleteUserStore(_id) {
    return this.userstore.deleteOne({ _id: _id });
  }
})();
