const Inventory = require('../models/Inventory');
const { v4: uuidv4 } = require('uuid');

// Get all inventory
const getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.fetchAll();
    res.status(200).json(inventories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Get single inventory
const getInventory = async (req, res) => {
  try {
    const inventory = await Inventory.where({ id: req.params.id }).fetch({ withRelated: ['warehouses'] });
    res.status(200).json(inventory);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//Edit Inventory

module.exports = { getInventories, getInventory };
