const { Schema, model } = require("mongoose");

const { DSF_AUTH_USER_MODEL_NAME } = require("../../const");

const userSchema = new Schema({
  phone_number: {
    type: String,
    required: true,
    unique: true,
    match: /^\+?\d{10,15}$/
  },
  first_name: {
    type: String,
    required: true,
    trim: true
  },
  second_name: {
    type: String,
    required: true,
    trim: true
  },
  role: {
    type: String,
    enum: ["dogsitter", "owner"],
    required: true
  },
  location: {
    type: String,
    required: function() {
      return this.role === "dogsitter";
    }
  },
  price: {
    type: Number,
    min: 0,
    required: function() {
      return this.role === "dogsitter";
    }
  },
  about_me: {
    type: String,
    maxlength: 500
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0
  },
  ratings: {
    type: [Number],
    default: [],
    validate: {
      validator: function(arr) {
        return arr.every(v => v >= 0 && v <= 5);
      },
      message: "Рейтинг должен быть в диапазоне от 0 до 5!"
    }
  },
  tg: {
    type: String,
    match: /^[a-zA-Z0-9_]{5,32}$/
  },
  created: {
    type: Date,
    default: Date.now
  }
});

userSchema.virtual("id").get(function() {
  return this._id.toHexString();
});

userSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function(doc, ret) {
    delete ret._id;
    delete ret.__v;
  }
});

module.exports.User = model(DSF_AUTH_USER_MODEL_NAME, userSchema);