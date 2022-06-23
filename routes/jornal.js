const express = require('express');
const router = express.Router();

const jornalController = require('../controllers/jornal');

// router.get('/:username', jornalController.getAllEntriesForUser);

// router.get('/:id', jornalController.getEntry);

router.post('/', jornalController.create);

module.exports = router;