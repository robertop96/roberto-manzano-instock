const bookshelf = require('../bookshelf');
require('./Inventory');
require('./Contact');

const Warehouse = bookshelf.model('Warehouse', {
  tableName: 'warehouses',
  inventories() {
    return this.belongsToMany('Inventory');
  },
  contacts() {
    return this.hasOne('Contact');
  },
});

module.exports = Warehouse;
