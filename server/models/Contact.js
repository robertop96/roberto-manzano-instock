const bookshelf = require('../bookshelf');
require('./Warehouse');

const Contact = bookshelf.model('Contact', {
  tableName: 'contacts',
  hidden: ['warehouse_id', 'created_at', 'updated_at'],
  warehouses() {
    return this.belongsTo('warehouses');
  },
});

module.exports = Contact;
