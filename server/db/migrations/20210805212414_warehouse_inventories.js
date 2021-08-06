exports.up = function (knex) {
  return knex.schema.createTable('warehouse_inventories', (table) => {
    table.uuid('warehouse_id').references('id').inTable('warehouses').onDelete('CASCADE');
    table.uuid('inventory_id').references('id').inTable('inventories').onDelete('CASCADE');
    table.integer('quantity').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('warehouse_inventories');
};
