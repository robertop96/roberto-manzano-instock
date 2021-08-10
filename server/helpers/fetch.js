const Warehouse = require('../models/Warehouse');

const fetchWarehouse = (id) => {
  return Warehouse.where({ id: id }).fetch();
};

module.exports = { fetchWarehouse };
