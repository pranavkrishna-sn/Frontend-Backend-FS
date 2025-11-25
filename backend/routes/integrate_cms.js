const express = require('express');
const router = express.Router();
const integrate_cmsController = require('../controllers/integrate_cmsController');

/**
 * Routes for Integrate CMS
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', integrate_cmsController.getAll);

// GET single item by ID
router.get('/:id', integrate_cmsController.getById);

// POST create new item
router.post('/', integrate_cmsController.create);

// PUT update item
router.put('/:id', integrate_cmsController.update);

// DELETE item
router.delete('/:id', integrate_cmsController.delete);

module.exports = router;
