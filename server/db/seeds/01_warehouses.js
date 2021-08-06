// import seed data files, arrays of objects
const warehouseData = require('../seed_data/warehouses');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('warehouses')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('warehouses').insert(warehouseData);
    });
};
