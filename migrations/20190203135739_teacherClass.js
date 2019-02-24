exports.up = knex => {
	return knex.schema
		.createTable("teacherClass", table => {
			table.increments("id").primary();
			table.integer("teacherId").notNullable();
			table.foreign("teacherId").references("teacher.id");
			table.integer("classId").notNullable();
			table.foreign("classId").references("class.id");
		})
		.then(() => {
			return knex("teacherClass").insert([
				{
					teacherId: 1,
					classId: 1
				},
				{
					teacherId: 1,
					classId: 2
				},
				{
					teacherId: 2,
					classId: 3
				},
				{
					teacherId: 2,
					classId: 4
				}
			]);
		});
};

exports.down = knex => {
	return knex.schema.dropTable("teacherClass");
};
