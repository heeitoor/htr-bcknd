exports.up = knex => {
  return knex.schema.createTable("class", table => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table
      .timestamp("created_at")
      .defaultTo(knex.fn.now())
      .notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("class");
};
