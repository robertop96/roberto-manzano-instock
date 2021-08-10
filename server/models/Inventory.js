const bookshelf = require('../bookshelf');
require('./Warehouse');

const Inventory = bookshelf.model('Inventory', {
  tableName: 'inventories',
  hidden: ['_pivot_warehouse_id', '_pivot_inventory_id', 'created_at', 'updated_at'],
  warehouses() {
    return this.belongsToMany('Warehouse');
  },
});

module.exports = Inventory;
