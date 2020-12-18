const mongoose = require("mongoose");
const Scheme = mongoose.Schema;

//User Scheme
const UserSchema = new Scheme({
  id: {
    type: mongoose.Schema.ObjectId,
  },
  userName: {
    type: String,
    required: true,
  },
  emailAddress: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  website: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
  address: {
    street: {
      type: String,
    },
    suite: {
      type: String,
    },
    city: {
      type: String,
    },
    zipCode: {
      type: String,
    },
  },

  company: {
    name: {
      type: String,
    },
  },

  created_at: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema, "user");
module.exports = User;
