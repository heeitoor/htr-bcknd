exports.up = knex => {
  return knex.schema.createTable("attendance", table => {
    table.increments("id").primary();
    table.date("date").notNullable();
    table.integer("teacherClassId").notNullable();
    table.foreign("teacherClassId").references("teacherClass.id");
    table.enu("status", ["OPEN", "CLOSED"]).notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("attendance");
};
