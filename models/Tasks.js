const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const TasksSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  category: {
    type: String,
    required: true
  },
  task: {
    type: String,
    required: true
  }
});

const Tasks = mongoose.model("Tasks", TasksSchema);
module.exports = Tasks;
