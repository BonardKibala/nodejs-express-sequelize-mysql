module.exports = (sequelize, Sequelize) => {
  const Login = sequelize.define("login", {
    login: {
      type: Sequelize.STRING
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return Login;
};
