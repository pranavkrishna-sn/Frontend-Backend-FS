const express = require('express');
const router = express.Router();
const setup_core_infrastructureController = require('../controllers/setup_core_infrastructureController');

/**
 * Routes for Setup Core Infrastructure
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', setup_core_infrastructureController.getAll);

// GET single item by ID
router.get('/:id', setup_core_infrastructureController.getById);

// POST create new item
router.post('/', setup_core_infrastructureController.create);

// PUT update item
router.put('/:id', setup_core_infrastructureController.update);

// DELETE item
router.delete('/:id', setup_core_infrastructureController.delete);

module.exports = router;
