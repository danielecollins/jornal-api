const db = require('../models');
const Jornal = db.jornal;
const ObjectId = require('mongodb').ObjectId;

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

module.exports.getAllEntriesForUser = (req, res) => {
  try {
    const username = req.params.username;
    Jornal.find({ username: username })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving jornal entries.'
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.getEntryByDate = (req, res) => {
  try {
    const entryDate = req.params.entryDate;
    Jornal.find({ entryDate: entryDate })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving jornal entries.'
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports.updateEntry = async (req, res) => {
  try {
    const jornalId = new ObjectId(req.params.id);
    if (!jornalId) {
      res.status(400).send({ message: 'Invalid ID Supplied' });
      return;
    }
    Jornal.findOne({ _id: jornalId }, function (err, jornal) {
      jornal.username = req.body.username;
      jornal.entry = req.body.entry;
      jornal.entryDate = req.body.entryDate;

      jornal.save(function (err) {
        if (err) {
          res.status(500).json(err || 'Some error occurred while updating the jornal entry');
        } else {
          res.status(204).send();
        }
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports.deleteEntry = async (req, res) => {
  try {
    const jornalId = new ObjectId(req.params.id);
    if (!jornalId) {
      res.status(400).send({ message: 'Invalid ID Supplied' });
      return;
    }
    Jornal.deleteOne({ _id: jornalId }, function (err, result) {
      if (err) {
        res.status(500).json(err || 'Some error occurred while deleting the jornal entry.');
      } else {
        res.status(204).send(result);
      }
    });
  } catch (err) {
    res.status(500).json(err || 'Some error occurred while deleting the jornal entry.');
  }
};