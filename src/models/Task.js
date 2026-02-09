const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: String,
  done: Boolean,
  userId: String
});

module.exports = mongoose.model("Task", TaskSchema);
