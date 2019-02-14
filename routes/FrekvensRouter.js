const express = require('express');
const md5 = require('md5');
const schema = require('./schemas/Frekvens');
var connection = require('../db/connection');

class Routers {
  attendance() {
    var attendanceRouter = express.Router();

    attendanceRouter
      .get('/:teacherId', async (req, res) => {
        res.sendStatus(404);
      })
      .post('/', async (req, res) => {
        const client = await connection.instance();

        const result = await client.query(
          'insert into attendance ("date", "teacherClassId", "status") values ($1, $2, $3);',
          [req.body.date, req.body.teacherId, 'OPEN']
        );

        res.sendStatus(200);
      })
      .put('/', async (req, res) => {});

    return attendanceRouter;
  }

  class() {
    var classRouter = express.Router();

    classRouter
      .get('/', async (req, res) => {})
      .post('/', async (req, res) => {})
      .put('/', async (req, res) => {});

    return classRouter;
  }

  teacherClass() {
    var teacherClassRouter = express.Router();

    teacherClassRouter
      .get('/:teacherId/:date', async (req, res) => {
        const client = await connection.instance();

        const result = await client.query(
          `
            select c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate"
            from "teacherClass" tc
            join "class" c on c.id = tc."classId"
            left join attendance a on tc.id = a."teacherClassId" and a.date = '${req.params.date}'
            where tc."teacherId" = ${req.params.teacherId};
          `
        );

        res.send(result.rows);
      })
      .post('/', async (req, res) => {})
      .put('/', async (req, res) => {});

    return teacherClassRouter;
  }

  teacher() {
    var teacherRouter = express.Router();

    teacherRouter
      .get('/', async (req, res) => {
        const client = await connection.instance();
        const result = await client.query(`select * from teacher`);
        res.send(result.rows);
      })
      .post('/', schema.post, async (req, res) => {
        const client = await connection.instance();
      
        const result = await client.query(
          `
            select *
            from teacher t
            where t."userName" = '${req.body.userName}' and t."password" = '${md5(req.body.password)}'
          `
        );

        res.send(
          result.rows.map(item => {
            return {
              id: item.id,
              name: item.name
            };
          })[0]
        );
      });

    return teacherRouter;
  }
}

module.exports = new Routers();
