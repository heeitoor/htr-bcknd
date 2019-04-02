exports.up = knex => {
  return knex.schema.createTable('class', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .timestamp('created_at')
      .defaultTo(knex.fn.now())
      .notNullable();
  });
  // .then(() => {
  // 	return knex("class").insert([
  // 		{
  // 			name: "Turma Fake 1"
  // 		},
  // 		{
  // 			name: "Turma Fake 2"
  // 		},
  // 		{
  // 			name: "Turma Fake 3"
  // 		},
  // 		{
  // 			name: "Turma Fake 4"
  // 		}
  // 	]);
  // });
};

exports.down = knex => {
  return knex.schema.dropTable('class');
};
