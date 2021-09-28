const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");

class UserStoreOperation extends Operation {
  constructor() {
    super();
    this.userstoreService = require("../../services").userstoreService;
    this.userService = require("../../services").userService;
  }

  async getUserStore() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const userstores = await this.userstoreService.getUserStores();
      this.emit(SUCCESS, userstores);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addUserStore(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const userstore = await this.userstoreService.addUserStore(payload);
      const user = await this.userService.updateUserStore(payload);
      this.emit(SUCCESS, userstore);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getUserStoreById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const userstore = await this.userstoreService.getUserStoreById(_id);
      if (!userstore) {
        throw ErrorUtil.createNotFoundError({
          details: "this store dosn't exist"
        });
      }
      this.emit(SUCCESS, userstore);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
  async deleteUserStore({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const userstore = await this.userstoreService.deleteUserStore(_id);
      if (!user) {
        throw ErrorUtil.createNotFoundError({
          details: "this store dosn't exist"
        });
      }
      this.emit(SUCCESS, userstore);
    } catch (error) {
      console.log(error);
      this.emit(ERROR, error);
    }
  }
}

UserStoreOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = UserStoreOperation;
