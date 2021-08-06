// import seed data files, arrays of objects
const warehouseInventoryData = require('../seed_data/warehouse_inventories');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('warehouse_inventories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('warehouse_inventories').insert(warehouseInventoryData);
    });
};
