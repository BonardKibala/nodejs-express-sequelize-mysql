module.exports = (app) => {
  const logins = require("../controllers/login.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/", logins.create);

  // Retrieve all logins
  router.get("/", logins.findAll);

  // Retrieve a single User with id
  router.get("/:id", logins.findOne);

  // Update a User with id
  router.put("/:id", logins.update);

  // Delete a User with id
  router.delete("/:id", logins.delete);

  app.use("/api/logins", router);
};
