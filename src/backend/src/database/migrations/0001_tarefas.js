exports.up = function (knex, Promise) {
  return knex.schema.createTable('tarefas', function (table) {
    table.increments();
    table.string('name').notNullable();
    table.string('descripton').notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('tarefas');
};
