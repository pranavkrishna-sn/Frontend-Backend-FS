const express = require('express');
const router = express.Router();
const set_up_core_infrastructureController = require('../controllers/set_up_core_infrastructureController');

/**
 * Routes for Set up core infrastructure
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', set_up_core_infrastructureController.getAll);

// GET single item by ID
router.get('/:id', set_up_core_infrastructureController.getById);

// POST create new item
router.post('/', set_up_core_infrastructureController.create);

// PUT update item
router.put('/:id', set_up_core_infrastructureController.update);

// DELETE item
router.delete('/:id', set_up_core_infrastructureController.delete);

module.exports = router;
