exports.up = knex => {
  return knex.schema
    .createTable('studentClass', table => {
      table.increments('id').primary();
      table.integer('studentId').notNullable();
      table.foreign('studentId').references('student.id');
      table.integer('classId').notNullable();
      table.foreign('classId').references('class.id');
      table
        .enu('status', ['Fre', 'Int'])
        .defaultTo('Fre')
        .notNullable();
    })
    .then(() => {
      return knex('studentClass').insert([
        { studentId: 1, classId: 1 },
        { studentId: 1, classId: 2 },
        { studentId: 2, classId: 2 },
        { studentId: 2, classId: 3 },
        { studentId: 2, classId: 4 }
      ]);
    });
};

exports.down = knex => {
  return knex.schema.dropTable('studentClass');
};
