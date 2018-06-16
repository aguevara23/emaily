const mongoose = require("mongoose");
const { Schema } = mongoose;

// creates schema for recipients
const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: 0 }
});

module.exports = recipientSchema;
