exports.up = knex => {
  return knex.schema.createTable("teacher", table => {
    table.increments("id").primary();
    table.string("userName", 10).notNullable();
    table.string("password", 50).notNullable();
    table.string("name", 30).notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("teacher");
};
