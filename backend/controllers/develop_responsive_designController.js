const Develop_responsive_designModel = require('../models/develop_responsive_designModel');

/**
 * Controller for Develop responsive design
 * Auto-generated from n8n workflow
 */

// Get all items
exports.getAll = async (req, res) => {
  try {
    const items = await Develop_responsive_designModel.findAll();
    res.status(200).json({
      success: true,
      data: items
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching items',
      error: error.message
    });
  }
};

// Get item by ID
exports.getById = async (req, res) => {
  try {
    const item = await Develop_responsive_designModel.findById(req.params.id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: item
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error fetching item',
      error: error.message
    });
  }
};

// Create new item
exports.create = async (req, res) => {
  try {
    const newItem = await Develop_responsive_designModel.create(req.body);
    res.status(201).json({
      success: true,
      data: newItem
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error creating item',
      error: error.message
    });
  }
};

// Update item
exports.update = async (req, res) => {
  try {
    const updatedItem = await Develop_responsive_designModel.update(req.params.id, req.body);
    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }
    res.status(200).json({
      success: true,
      data: updatedItem
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Error updating item',
      error: error.message
    });
  }
};

// Delete item
exports.delete = async (req, res) => {
  try {
    const deleted = await Develop_responsive_designModel.delete(req.params.id);
    if (!deleted) {
      return res.status(404).json({
        success: false,
        message: 'Item not found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Item deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error deleting item',
      error: error.message
    });
  }
};
