const mongoose = require('mongoose');

const { Schema } = mongoose;

const userModel = new Schema({
  name: { type: String },
  password: { type: String },
});

module.export = mongoose.model('modeluser', userModel);
