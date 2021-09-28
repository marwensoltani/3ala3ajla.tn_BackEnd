const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const ErrorService = require("./services/errorService");
const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
const app = express();
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
require("./utils/passportConfig")(passport);
const upload = require("./utils/multer");
const cloudinary = require("./utils/cloudinary");
const fs = require("fs");
const routes = require("./routes");

//protect our data we remove the name of our database and password and we change it with process ... inside .env
mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("connected to mongodb");
  })
  .catch((err) => {
    console.log("failed to connect to MongoDB", err);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true
  })
);

app.use(cookieParser("secretcode"));
app.use(passport.initialize());
app.use(passport.session());

app.use("/uploadimages", upload.array("image"), async (req, res) => {
  const uploader = async (path) => await cloudinary.uploads(path, "Images");
  if (req.method === "POST") {
    const urls = [];
    const files = req.files;
    for (const file of files) {
      const { path } = file;
      const newPath = await uploader(path);
      urls.push(newPath);
      fs.unlinkSync(path);
    }
    console.log(urls);
    res.send(urls);
  } else {
    res.status(405).json({
      err: `${req.method} method not allowed`
    });
  }
});

app.use("/api/user", routes.userRoute);
app.use("/api/product", routes.productRoute);
app.use("/api/car", routes.carRoute);
app.use("/api/worker", routes.workerRoute);
app.use("/api/appointment", routes.appointmentRoute);
app.use("/api/userstore", routes.userstoreRoute);
app.use("/api/order", routes.orderRoute);
app.use("/api/messages", routes.messageRoute);
app.use("/api/rewards", routes.rewardRoute);

app.use(ErrorService);

const PORT = process.env.PORT || 3501;

app.listen(PORT, () => {
  console.log("app connected on: " + PORT);
});
