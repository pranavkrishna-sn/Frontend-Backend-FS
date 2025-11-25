const express = require('express');
const router = express.Router();
const implement_commenting_featureController = require('../controllers/implement_commenting_featureController');

/**
 * Routes for Implement commenting feature
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_commenting_featureController.getAll);

// GET single item by ID
router.get('/:id', implement_commenting_featureController.getById);

// POST create new item
router.post('/', implement_commenting_featureController.create);

// PUT update item
router.put('/:id', implement_commenting_featureController.update);

// DELETE item
router.delete('/:id', implement_commenting_featureController.delete);

module.exports = router;
