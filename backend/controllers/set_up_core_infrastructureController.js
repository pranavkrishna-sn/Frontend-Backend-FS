const Set_up_core_infrastructureModel = require('../models/set_up_core_infrastructureModel');

/**
 * Controller for Set up core infrastructure
 * Auto-generated from n8n workflow
 */

// Get all items
exports.getAll = async (req, res) => {
  try {
    const items = await Set_up_core_infrastructureModel.findAll();
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
    const item = await Set_up_core_infrastructureModel.findById(req.params.id);
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
    const newItem = await Set_up_core_infrastructureModel.create(req.body);
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
    const updatedItem = await Set_up_core_infrastructureModel.update(req.params.id, req.body);
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
    const deleted = await Set_up_core_infrastructureModel.delete(req.params.id);
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
