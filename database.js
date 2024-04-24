const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("testDb", "ravi", "ravi", {
  dialect: "sqlite",
  storage: "dev.sqlite",
});

module.exports = sequelize;
