const db = require('../models');
const Jornal = db.jornal;

module.exports.create = (req, res) => {
  try {
    if (!req.body.username || !req.body.entry || !req.body.entryDate) {
      res.status(400).send({ message: 'Content can not be empty!' });
      return;
    }

    const jornal = new Jornal(req.body);
    jornal
      .save()
      .then((data) => {
        console.log(data);
        res.status(201).send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the jornal entry.'
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
};