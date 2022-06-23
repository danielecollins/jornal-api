const db = require('../models');
const User = db.user;

exports.getAll = (req, res) => {
    User.find({})
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving users.'
        });
      });
};