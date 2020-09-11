import knex from 'knex';
import path from 'path';

const connection = knex({
  client: 'sqlite3',
  connection: {
    filename:
      'C:/Users/luizn/Documents/gitRepositories/electronTeste/electron-typescript-react/src/backend/src/database/database.sqlite',
    // filename: path.resolve(
    //   __dirname,
    //   '..',
    //   'src',
    //   'backend',
    //   'src',
    //   'database',
    //   'database.sqlite'
    // ),
  },
  useNullAsDefault: true,
});

export default connection;
