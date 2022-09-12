module.exports = (sequelize, Sequelize) => {
    const Etudiant = sequelize.define("etudiant", {
      nom: {
        type: Sequelize.STRING
      },
      postnom: {
        type: Sequelize.STRING
      },
      prenom: {
        type: Sequelize.STRING
      }
    });
  
    return Etudiant;
  };
  