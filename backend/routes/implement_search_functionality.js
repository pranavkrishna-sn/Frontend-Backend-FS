const express = require('express');
const router = express.Router();
const implement_search_functionalityController = require('../controllers/implement_search_functionalityController');

/**
 * Routes for Implement search functionality
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_search_functionalityController.getAll);

// GET single item by ID
router.get('/:id', implement_search_functionalityController.getById);

// POST create new item
router.post('/', implement_search_functionalityController.create);

// PUT update item
router.put('/:id', implement_search_functionalityController.update);

// DELETE item
router.delete('/:id', implement_search_functionalityController.delete);

module.exports = router;
