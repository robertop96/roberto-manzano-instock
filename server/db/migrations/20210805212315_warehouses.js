exports.up = function (knex) {
  // run this when we need to create/modify/change our schemas!
  return knex.schema.createTable('warehouses', (table) => {
    table.uuid('id').primary();
    table.string('name').notNullable();
    table.string('address').notNullable();
    table.string('city').notNullable();
    table.string('country').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('warehouses');
};
//run this when we need to undo those changes!
