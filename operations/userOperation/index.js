const Operation = require("../Operation.js");
const ErrorUtil = require("../../utils/ErrorUtil");
const bcrypt = require("bcrypt");
const passport = require("passport");

class UserOperation extends Operation {
  constructor() {
    super();
    this.userService = require("../../services").userService;
    this.messageService = require("../../services/").messageService;
  }

  async signup(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserByEmail(payload.email);
      if (user) {
        throw ErrorUtil.createValidationError({
          details: "User already exists"
        });
      }
      payload.salt = bcrypt.genSaltSync(10);
      payload.password = bcrypt.hashSync(payload.password, payload.salt);
      const newUser = await this.userService.addUser(payload);
      let helloMessage = {
        title: "Welcome To 3ala 3ajla!",
        content:
          "Thank you for joing us! As a reward we added 10 3ajlet to your account! Collect more 3ajlet to claim several rewards !",
        to: newUser,
        createdAt: new Date()
      };
      const msg = await this.messageService.addMessage(helloMessage);
      this.emit(SUCCESS, newUser);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async login(req, res, next) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) {
          res.status(404);
          res.end();
        } else {
          req.logIn(user, (err) => {
            if (err) throw err;
            this.emit(SUCCESS, req.user);
          });
        }
      })(req, res, next);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async getUsers() {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const users = await this.userService.getUsers();
      this.emit(SUCCESS, users);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async addUser(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.addUser(payload);
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
  async updateUserProfile({ _id }, payload) {
    const { SUCCESS, ERROR } = this.outputs;
    console.log("operation", payload);
    try {
      const user = await this.userService.updateUserProfile(_id, payload);
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async getUserById({ _id }) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserById(_id);
      if (!user) {
        throw ErrorUtil.createNotFoundError({
          details: "User not found. Please register"
        });
      }
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async loginGoogle(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserByEmail(payload.body.email);
      if (!user) {
        const user = await this.userService.addUser(payload.body);
        this.emit(SUCCESS, user);
      }
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async session(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserByEmail(payload.body.email);

      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async loginFacebook(payload) {
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = await this.userService.getUserByEmail(payload.body.email);
      if (!user) {
        const user = await this.userService.addUser(payload.body);
        this.emit(SUCCESS, user);
      }
      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }

  async applyCode(payload) {
    let currentWorker = await this.userService.getWorkerBySecretCode(
      payload.secretCode
    );
    const { SUCCESS, ERROR } = this.outputs;
    try {
      const user = this.userService.applyCode(payload);
      let newMessage = {
        title: "Reward Claimed Successfully",
        content:
          payload.reward.title +
          " reward claimed, 3jlet were transfered from your account to " +
          currentWorker.name +
          " successfully",
        to: payload.userId,
        createdAt: new Date()
      };
      let workerMessage = {
        title: "You Received 3ajlet",
        content:
          payload.reward.title +
          " reward was activated for you, 3ajlet were transfered to your account by " +
          currentWorker.name +
          " successfully",
        to: currentWorker.userId,
        createdAt: new Date()
      };
      const msg = await this.messageService.addMessage(newMessage);
      const msgWorker = await this.messageService.addMessage(workerMessage);

      this.emit(SUCCESS, user);
    } catch (error) {
      this.emit(ERROR, error);
    }
  }
}
UserOperation.setOutputs(["SUCCESS", "ERROR"]);
module.exports = UserOperation;
