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
          'insert into attendance ("date", "teacherClassId", "status") values ($1, $2, $3) RETURNING id;',
          [req.body.date, req.body.teacherClassId, 'OPEN']
        );

        const attendanceId = result.rows[0].id;

        const tc = await client.query(
          `
            select *
            from "teacherClass" tc
            where tc.id = ${req.body.teacherClassId};
          `
        );
        const classId = tc.rows[0].classId;

        const sc = await client.query(
          `
            select *
            from "studentClass" sc
            where sc."classId" = ${classId};
          `
        );

        for (const s of sc.rows) {
          await client.query(`INSERT INTO "attendanceStudent"
          ("attendanceId", "studentId")
          VALUES($1, $2);`, [
            attendanceId,
            s.studentId
          ]);
        }

        res.send('result.rows[0]');
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
            select tc.id "teacherClassId", c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate"
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
      .post('/', schema.teacherPost, async (req, res) => {
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

  attendanceStudent() {
    var attendanceStudentRouter = express.Router();
    console.log(242322222);

    attendanceStudentRouter.get('/:teacherClassId', async (req, res) => {
      const client = await connection.instance();
      console.log(234234);
      const result = await client.query(
        `
          select c."name" "className", s.id "studentId", s.code "studentCode", s."name" "stundentName", a.id
          from "teacherClass" tc
          join "studentClass" sc on tc."classId" = sc."classId"
          join "class" c on sc."classId" = c.id
          join "student" s on sc."studentId" = s.id
          left join "attendanceStudent" a on a."studentId" = s.id
          where tc.id = ${req.params.teacherClassId};
        `
      );

      res.send(result.rows);
    });

    return attendanceStudentRouter;
  }
}

module.exports = new Routers();
