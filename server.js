require("dotenv").config();
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")
const morgan = require("morgan");
const cors = require("cors");
const mongoDb = require("./db/mongoDb");

//Creating the server
const app = express();

//Body parser & cookie parser middleware
app.use(express.json({ limit: "100mb" }));
app.use(cookieParser());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//settings cors
app.use(cors());

//logs settngs
app.use(morgan("combined"));

//Database connection
mongoDb.connect();

//Health check route
app.get("/api", (req, res) => {
  res.status(200).send({ message: "Live" });
});

app.use("/User", require("./route/index"));

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
