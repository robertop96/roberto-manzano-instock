exports.up = function (knex) {
  return knex.schema.createTable('contacts', (table) => {
    table.uuid('id').primary();
    table.string('fullName').notNull();
    table.string('position').notNull();
    table.string('phone').notNull();
    table.string('email').notNull();
    table.uuid('warehouse_id').references('id').inTable('warehouses').onDelete('CASCADE');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('contacts');
};
