exports.seed = async function (knex) {
  await knex('users').insert([
    { email: 'teste', password: '123' },
    { email: 'teste', password: '123' },
    { email: 'teste', password: '123' },
  ]);
};
