const { Schema, model } = require("mongoose");

const { DSF_AUTH_USER_MODEL_NAME, DSF_INTERACTION_MODEL_NAME } = require("../../const");

const interactionSchema = new Schema({
  owner_id: {
    type: Schema.Types.ObjectId,
    ref: DSF_AUTH_USER_MODEL_NAME,
    required: true
  },
  dogsitter_id: {
    type: Schema.Types.ObjectId,
    ref: DSF_AUTH_USER_MODEL_NAME,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

interactionSchema.index({ owner_id: 1, dogsitter_id: 1 });

module.exports.Interaction = model(DSF_INTERACTION_MODEL_NAME, interactionSchema);