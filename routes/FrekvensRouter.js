const express = require('express');
var connection = require('./db/connection');

class Routers {
    attendance() {
        var attendanceRouter = express.Router();
        
        attendanceRouter
          .get('/:teacherId', async (req, res) => {})
          .post('/', async (req, res) => {
            const client = await connection.instance();
            
            const result = await client.query('insert into attendance (date,"teacherClassId",status) values ($1, $2, $3);', [
              req.body.date,
              req.body.teacherId,
              'OPEN'
            ]);
            
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
              select c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate" from "teacherClass" tc join "class" c on c.id = tc."classId" left join attendance a on tc.id = a."teacherClassId" and a.date = '${
                req.params.date
              }' where tc."teacherId" = ${req.params.teacherId};`
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
          .post('/', async (req, res) => {
            const client = await connection.instance();
            const result = await client.query(`
            select * from teacher t
            where t."userName" = '${req.body.userName}' and t."password" = '${req.body.password}'
            `);
            res.send(result.rows);
          });
        
        return teacherRouter;
    }
}



