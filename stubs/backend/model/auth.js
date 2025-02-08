const { Schema, model } = require("mongoose");

const {
  DSF_AUTH_PASSWD_MODEL_NAME,
  DSF_AUTH_USER_MODEL_NAME,
} = require("../../const");

const schema = new Schema({
  login: { 
    type: String, 
    required: true, 
    unique: true
  },
  hash: { 
    type: String, 
    required: true 
  },
  salt: { 
    type: String, 
    required: true 
  },
  userId: { 
    type: Schema.Types.ObjectId, 
    ref: DSF_AUTH_USER_MODEL_NAME 
  },
  created: {
    type: Date,
    default: () => new Date().toISOString(),
  },
});

schema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
  },
});

schema.virtual("id").get(function () {
  return this._id.toHexString();
});

exports.AuthModel = model(DSF_AUTH_PASSWD_MODEL_NAME, schema);
