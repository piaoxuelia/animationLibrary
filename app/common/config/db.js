'use strict';
/**
 * db config
 * @type {Object}
 */

exports.__esModule = true;
exports.default = {
  type: 'mysql',
  adapter: {
    mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'tools',
      user: 'root',
      password: 'lyy2010',
      prefix: '',
      encoding: 'utf8'
    },
    mongo: {}
  }
};
//# sourceMappingURL=db.js.map