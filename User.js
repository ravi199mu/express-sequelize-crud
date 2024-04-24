const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize("sqlite::memory:");

const sequelize = new Sequelize("testDb", "ravi", "ravi", {
  dialect: "sqlite",
  storage: "dev.sqlite",
});

const User = sequelize.define(
  "user",
  {
    username: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = {
  User,
  sequelize,
};
