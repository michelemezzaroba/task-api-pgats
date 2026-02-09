const Task = require("../models/Task");

module.exports = {
  Query: {
    tasks: async (_, __, { userId }) => {
      return Task.find({ userId });
    }
  }
};
