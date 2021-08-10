// import seed data files, arrays of objects
const InventoriesWarehouses = require('../seed_data/inventories_warehouses');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('inventories_warehouses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('inventories_warehouses').insert(InventoriesWarehouses);
    });
};
