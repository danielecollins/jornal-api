const express = require('express');
const router = express.Router();

const jornalController = require('../controllers/jornal');

router.post('/', jornalController.create);
router.get('/:username', jornalController.getAllEntriesForUser);
router.get('/:id', jornalController.getEntry);
router.put('/:id', jornalController.updateEntry);
router.delete('/:id', jornalController.deleteEntry);

module.exports = router;