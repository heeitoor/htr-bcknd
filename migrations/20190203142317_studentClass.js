exports.up = knex => {
  return knex.schema.createTable("studentClass", table => {
    table.increments("id").primary();
    table.integer("studentId").notNullable();
    table.foreign("studentId").references("student.id");
    table.integer("classId").notNullable();
    table.foreign("classId").references("class.id");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("studentClass");
};
