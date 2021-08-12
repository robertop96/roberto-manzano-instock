const bookshelf = require('../bookshelf');
require('./Inventory');
require('./Contact');

const Warehouse = bookshelf.model('Warehouse', {
  tableName: 'warehouses',
  hidden: ['_pivot_warehouse_id', '_pivot_inventory_id', 'created_at', 'updated_at'],
  inventories() {
    return this.belongsToMany('Inventory');
  },
  contacts() {
    return this.hasOne('Contact');
  },
});

module.exports = Warehouse;
