const connection = require('../../../db/connection');

class ClassService {
    get() {
        return connection.select('SELECT * FROM class');
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