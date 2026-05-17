const User = require("./User");
const Project = require("./Project");
const Task = require("./Task");

Project.hasMany(Task);
Task.belongsTo(Project);

User.hasMany(Task);
Task.belongsTo(User);

module.exports = {
  User,
  Project,
  Task,
};