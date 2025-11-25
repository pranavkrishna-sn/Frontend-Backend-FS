const express = require('express');
const router = express.Router();
const implement_user_authenticationController = require('../controllers/implement_user_authenticationController');

/**
 * Routes for Implement user authentication
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_user_authenticationController.getAll);

// GET single item by ID
router.get('/:id', implement_user_authenticationController.getById);

// POST create new item
router.post('/', implement_user_authenticationController.create);

// PUT update item
router.put('/:id', implement_user_authenticationController.update);

// DELETE item
router.delete('/:id', implement_user_authenticationController.delete);

module.exports = router;
