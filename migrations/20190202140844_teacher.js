exports.up = knex => {
  return knex.schema
    .createTable("teacher", table => {
      table.increments("id").primary();
      table.string("userName", 10).notNullable();
      table.string("password", 50).notNullable();
      table.string("name", 30).notNullable();
      table
        .timestamp("created_at")
        .defaultTo(knex.fn.now())
        .notNullable();
    })
    .then(() => {
      return knex("teacher").insert([
        {
          name: "Aline Var",
          userName: "aline",
          password: "202cb962ac59075b964b07152d234b70"
        },
        {
          name: "Heitor Mir",
          userName: "heitor",
          password: "202cb962ac59075b964b07152d234b70"
        }
      ]);
    });
};

exports.down = knex => {
  return knex.schema.dropTable("teacher");
};
