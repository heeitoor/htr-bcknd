const knex = require('../../db/knexConnection');

class ClassroomService {
  constructor() {
    this.tableName = 'class';
  }

  async get() {
    return await knex(this.tableName);
  }

  async getById({ id, edit }) {
    const response = await knex.raw(`
      with cte as (
        select *
        from "studentClass" sc
        where sc."classId" = ${id}
      )
      select s.id "studentId", s.code, s.name, c.id, c."classId", c.status
      from student s
      left join cte c on s.id = c."studentId";
    `);

    return response.rows;
  }

  async save({ id, name }) {
    if (id > 0) {
      await knex(this.tableName)
        .where('id', id)
        .update({
          name,
        });
    } else {
      await knex(this.tableName).update({
        name,
      });
    }

    return true;
  }
}

module.exports = new ClassroomService();
