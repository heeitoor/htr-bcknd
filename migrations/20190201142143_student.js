exports.up = knex => {
  return knex.schema.createTable("student", table => {
    table.increments("id").primary();
    table.string("code", 20).notNullable();
    table.string("name", 30).notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("student");
};
