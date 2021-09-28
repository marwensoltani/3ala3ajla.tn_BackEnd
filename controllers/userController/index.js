const operations = require("../../operations");

module.exports = {
  async getUsers(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    const users = await userOperation.getUsers();
  },

  async addUser(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);

    const user = await userOperation.addUser(req.body);
  },

  async getUserById(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (users) => res.send(users)).on(ERROR, next);
    const user = await userOperation.getUserById(req.params);
  },

  async signup(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.signup(req.body);
  },

  async login(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.login(req, res, next);
  },

  async loginGoogle(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.loginGoogle(req, res, next);
  },

  async session(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.session(req, res, next);
  },

  async loginFacebook(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.loginFacebook(req, res, next);
  },

  async updateUserProfile(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.updateUserProfile(req.params, req.body);
    console.log("controller", req.body);
  },
  async applyCode(req, res, next) {
    const userOperation = new operations.UserOperation();
    const { SUCCESS, ERROR } = userOperation.outputs;

    userOperation.on(SUCCESS, (user) => res.send(user)).on(ERROR, next);
    const user = await userOperation.applyCode(req.body);
  }
};
