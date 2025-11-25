const express = require('express');
const router = express.Router();
const implement_analytics_toolController = require('../controllers/implement_analytics_toolController');

/**
 * Routes for Implement analytics tool
 * Auto-generated from n8n workflow
 */

// GET all items
router.get('/', implement_analytics_toolController.getAll);

// GET single item by ID
router.get('/:id', implement_analytics_toolController.getById);

// POST create new item
router.post('/', implement_analytics_toolController.create);

// PUT update item
router.put('/:id', implement_analytics_toolController.update);

// DELETE item
router.delete('/:id', implement_analytics_toolController.delete);

module.exports = router;
