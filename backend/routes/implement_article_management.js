const express = require('express');
const router = express.Router();
const implement_article_managementController = require('../controllers/implement_article_managementController');

/**
 * Routes for Implement article management
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_article_managementController.getAll);

// GET single item by ID
router.get('/:id', implement_article_managementController.getById);

// POST create new item
router.post('/', implement_article_managementController.create);

// PUT update item
router.put('/:id', implement_article_managementController.update);

// DELETE item
router.delete('/:id', implement_article_managementController.delete);

module.exports = router;
