const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  is_completed: {
    type: Boolean,
    required: false,
    default: false,
  },
}, {
  timestamps: true,
});

const TaskModel = mongoose.model('tasks', taskSchema);

module.exports = TaskModel; 