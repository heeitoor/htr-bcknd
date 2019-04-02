exports.up = knex => {
  return knex.schema
    .createTable('student', table => {
      table.increments('id').primary();
      table.string('code', 20).notNullable();
      table.string('name', 100).notNullable();
      table
        .timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable();
    })
    .then(() => {
      return knex('student').insert([
        { code: 'CJ01', name: 'Caju' },
        { code: 'AMR02', name: 'Amora' }
      ]);
    });
};

exports.down = knex => {
  return knex.schema.dropTable('student');
};
