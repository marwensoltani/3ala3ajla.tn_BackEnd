const operations = require("../../operations");

module.exports = {
  async getUserStore(req, res, next) {
    const UserStoreOperation = new operations.UserStoreOperation();
    const { SUCCESS, ERROR } = UserStoreOperation.outputs;

    UserStoreOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const users = await UserStoreOperation.getUserStore();
  },

  async addUserStore(req, res, next) {
    const UserStoreOperation = new operations.UserStoreOperation();
    const { SUCCESS, ERROR } = UserStoreOperation.outputs;

    UserStoreOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const user = await UserStoreOperation.addUserStore(req.body);
  },

  async getUserStoreById(req, res, next) {
    const UserStoreOperation = new operations.UserStoreOperation();
    const { SUCCESS, ERROR } = UserStoreOperation.outputs;

    UserStoreOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const user = await UserStoreOperation.getUserStoreById(req.params);
  },

  async deleteUserStore(req, res, next) {
    const UserStoreOperation = new operations.UserStoreOperation();
    const { SUCCESS, ERROR } = UserStoreOperation.outputs;

    UserStoreOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const user = await UserStoreOperation.deleteUserStore(req.params);
  }
};
