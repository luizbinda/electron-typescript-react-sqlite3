const path = require('path');

module.exports = {
  client: 'sqlite3',
  connection: path.resolve(
    __dirname,
    'src',
    'backend',
    'src',
    'database',
    'database.sqlite'
  ),
  migrations: {
    directory: path.resolve(
      __dirname,
      'src',
      'backend',
      'src',
      'database',
      'migrations'
    ),
  },
  seeds: {
    directory: path.resolve(
      __dirname,
      'src',
      'backend',
      'src',
      'database',
      'seeds'
    ),
  },
  useNullAsDefault: true,
};
