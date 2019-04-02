const knex = require('../../../db/knexConnection');

class ClassService {
  constructor() {
    this.tableName = 'class';
  }

  async get() {
    return await knex(this.tableName);
  }

  add() {
    return connection.dml(
      `insert into class (name, created_at)
            values ('teste', '2019-01-01')
            returning id`
    );
  }

  edit() {
    return connection.dml(
      `update class
            set name = 'hhh'
            where id = 9`
    );
  }
}

module.exports = new ClassService();
