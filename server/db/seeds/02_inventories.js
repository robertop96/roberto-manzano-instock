// import seed data files, arrays of objects
const inventoryData = require('../seed_data/inventories');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('inventories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('inventories').insert(inventoryData);
    });
};
