const express = require('express');
const router = express.Router();
const develop_responsive_designController = require('../controllers/develop_responsive_designController');

/**
 * Routes for Develop responsive design
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', develop_responsive_designController.getAll);

// GET single item by ID
router.get('/:id', develop_responsive_designController.getById);

// POST create new item
router.post('/', develop_responsive_designController.create);

// PUT update item
router.put('/:id', develop_responsive_designController.update);

// DELETE item
router.delete('/:id', develop_responsive_designController.delete);

module.exports = router;
