exports.up = function (knex) {
  return knex.schema.createTable('inventories', (table) => {
    table.uuid('id').primary();
    table.string('name').notNull();
    table.string('description').notNull();
    table.string('category').notNull();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('inventories');
};
