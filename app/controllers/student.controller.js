const db = require("../models");
const Etudiant = db.etudiants;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nom && !req.body.postnom) {
    res.status(400).send({
      error: "veuillez insérer le nom ou le postnom",
    });
    return;
  }

  // Create a login
  const student = {
    nom: req.body.nom,
    postnom: req.body.postnom,
    prenom: req.body.prenom,
  };

  // Save Tutorial in the database
  Student.create(student)
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        errror: err.message || "Création d'insertion",
      });
    });
};

exports.findAll = (req, res) => {
  const login = req.query.login;
  var condition = login ? { login: { [Op.like]: `%${login}%` } } : null;

  Login.findAll({ where: condition })
    .then((data) => {
      res.send({
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        error: err.message || "erreur d'affichage ",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Login.findByPk(id)
    .then((data) => {
      if (data) {
        res.send({
          data: data,
        });
      } else {
        res.status(404).send({
          message: `on ne retrouve pas id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: "non retrouvé" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Login.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          succès: "modification effectué avec sucès",
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: "Error updating Tutorial with id=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Login.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          success: "Supprimé avec succès",
        });
      } else {
        res.send({
          error: `echec de suppression`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        error: "nous n'avons pas pu supprimer=" + id,
      });
    });
};
