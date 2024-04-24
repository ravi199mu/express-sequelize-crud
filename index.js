const express = require("express");
const app = express();
// const sequelize = require("./database");
const { User, sequelize } = require("./User");

sequelize.sync().then(() => {
  console.log("database is ready");
});

app.use(express.json());

app.post("/users", async (req, res) => {
  await User.create(req.body);
  res.status(201).send("user created");
});

app.listen(3002, () => {
  console.log("server started on port 3002");
});
