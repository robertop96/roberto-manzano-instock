const Warehouse = require('../models/Warehouse');
const Contact = require('../models/Contact');
const { v4: uuidv4 } = require('uuid');

// Gets all warehouses in the Database.
const getWarehouses = async (req, res) => {
  try {
    const warehouses = await Warehouse.fetchAll();
    res.status(200).json(warehouses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Gets an specific warehouse with its related inventory and contact information.
const getWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.where({ id: req.params.id }).fetch({
      withRelated: {
        contacts: function (qb) {
          qb.select();
        },
        inventories: function (qb) {
          qb.select('inventories.id', 'inventories.name', 'inventories.description', 'inventories.category', 'quantity');
        },
      },
    });
    res.status(200).json(warehouse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Adds warehouse and contact to the database.
const addWarehouse = async (req, res) => {
  const id = uuidv4();
  const { fullName, position, phone, email, ...warehouse } = req.body;
  const { name, address, city, country, ...contact } = req.body;
  try {
    const newWarehouse = await new Warehouse({ ...warehouse, id: id }).save(null, { method: 'insert' });
    const newContact = await new Contact({ ...contact, id: uuidv4(), warehouse_id: id }).save(null, { method: 'insert' });
    const warehouseContact = { ...newWarehouse.attributes, newContact };
    res.status(201).json(warehouseContact);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Edit warehouse information and contact information.
const editWarehouse = async (req, res) => {
  const { fullName, position, phone, email, ...warehouse } = req.body;
  const { name, address, city, country, ...contact } = req.body;
  try {
    const warehouseInfo = await Warehouse.where({ id: req.params.id }).fetch();
    const newWarehouse = new Warehouse({ ...warehouse, id: req.params.id });
    await warehouseInfo.save(newWarehouse.attributes);
    const contactInfo = await Contact.where({ warehouse_id: warehouseInfo.id }).fetch();
    const newContact = new Contact({ ...contact, id: contactInfo.id });
    await contactInfo.save(newContact.attributes);
    res.status(200).json({ ...warehouseInfo.attributes, contactInfo });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Deletes warehouse
const deleteWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.where({ id: req.params.id }).destroy();
    res.status(200).json(warehouse);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getWarehouses, getWarehouse, addWarehouse, editWarehouse, deleteWarehouse };
