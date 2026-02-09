const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = await Task.create({
    title: req.body.title,
    done: false,
    userId: req.userId
  });

  res.status(201).send(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.send(tasks);
};
