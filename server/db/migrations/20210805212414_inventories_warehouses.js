exports.up = function (knex) {
  return knex.schema.createTable('inventories_warehouses', (table) => {
    table.uuid('warehouse_id').references('id').inTable('warehouses').onDelete('CASCADE');
    table.uuid('inventory_id').references('id').inTable('inventories').onDelete('CASCADE');
    table.integer('quantity').notNull();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('inventories_warehouses');
};
