exports.up = knex => {
  return knex.schema.createTable("teacherClass", table => {
    table.increments("id").primary();
    table.integer("teacherId").notNullable();
    table.foreign("teacherId").references("teacher.id");
    table.integer("classId").notNullable();
    table.foreign("classId").references("class.id");
  });
};

exports.down = knex => {
    return knex.schema.dropTable("teacherClass");
  };
