const User = require("../db/Models/User");

module.exports = (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "Internal server error" });
    }
    if (users) {
      return res.status(200).send({ data: users });
    }
  });
};
