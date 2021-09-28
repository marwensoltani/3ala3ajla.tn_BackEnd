module.exports = new (class CarService {
  constructor() {
    this.car = require("../../models/car.model.js");
  }

  getCars() {
    return this.car.find();
  }

  getCarById(_id) {
    return this.car.findById(_id);
  }

  deleteCarById(_id) {
    return this.car.deleteOne({_id:_id});
  }

  getCarByUserId(_id) {
    return this.car.find({ user:_id });
  }

  addCar(payload) {
    payload.last_drain_date = new Date(payload.last_drain_date).toDateString();
    if(Object.keys(payload.imgs).length === 0) {
      const defaultImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmb_VKKzq6bDUKQucykx3CQ6UUTBPh8i0Lrg&usqp=CAU"
      payload.imgs["front"] = defaultImg;
    };
    console.log(payload);
    return this.car.create(payload);
  }
})();
