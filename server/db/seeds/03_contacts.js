// import seed data files, arrays of objects
const contacts = require('../seed_data/contacts');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('contacts')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert(contacts);
    });
};
