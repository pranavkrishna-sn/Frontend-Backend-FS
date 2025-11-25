const express = require('express');
const router = express.Router();
const deploy_and_maintain_websiteController = require('../controllers/deploy_and_maintain_websiteController');

/**
 * Routes for Deploy and maintain website
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', deploy_and_maintain_websiteController.getAll);

// GET single item by ID
router.get('/:id', deploy_and_maintain_websiteController.getById);

// POST create new item
router.post('/', deploy_and_maintain_websiteController.create);

// PUT update item
router.put('/:id', deploy_and_maintain_websiteController.update);

// DELETE item
router.delete('/:id', deploy_and_maintain_websiteController.delete);

module.exports = router;
