exports.up = knex => {
  return knex.schema.createTable("attendanceStudent", table => {
    table.increments("id").primary();
    table.integer("attendanceId").notNullable();
    table.foreign("attendanceId").references("attendance.id");
    table.integer("studentId").notNullable();
    table.foreign("studentId").references("student.id");
  });
};

exports.down = knex => {
  return knex.schema.dropTable("attendanceStudent");
};
