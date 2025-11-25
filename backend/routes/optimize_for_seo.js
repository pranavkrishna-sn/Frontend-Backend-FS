const express = require('express');
const router = express.Router();
const optimize_for_seoController = require('../controllers/optimize_for_seoController');

/**
 * Routes for Optimize for SEO
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', optimize_for_seoController.getAll);

// GET single item by ID
router.get('/:id', optimize_for_seoController.getById);

// POST create new item
router.post('/', optimize_for_seoController.create);

// PUT update item
router.put('/:id', optimize_for_seoController.update);

// DELETE item
router.delete('/:id', optimize_for_seoController.delete);

module.exports = router;
