const mongoose = require("mongoose");

const UsageSchema = new mongoose.Schema({
  domain: String,
  timeSpent: Number,
  category: String,
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Usage", UsageSchema);
