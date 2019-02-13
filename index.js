var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
//var connection = require('../db/connection');
var app = express();
var Routers = require('./routes/FrekvensRouter');

const { Client } = require('pg');

require('dotenv').config();
app.use(cors());
app.use(bodyParser());
app.use('/attendance', Routers.attendance());
app.use('/teacher', Routers.teacher());

// var attendanceRouter = express.Router();
// attendanceRouter
//   .get('/:teacherId', async (req, res) => {})
//   .post('/', async (req, res) => {
//     const client = await connection.instance();

//     await client.query('insert into attendance (date,"teacherClassId",status) values ($1, $2, $3);', [
//       req.body.date,
//       req.body.teacherId,
//       'OPEN'
//     ]);

//     res.sendStatus(200);
//   })
//   .put('/', async (req, res) => {});
// app.use('/attendance', attendanceRouter);

// var teacherClassRouter = express.Router();
// teacherClassRouter
//   .get('/:teacherId/:date', async (req, res) => {
//     const client = await connection.instance();

//     const result = await client.query(
//       `
//       select c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate" from "teacherClass" tc join "class" c on c.id = tc."classId" left join attendance a on tc.id = a."teacherClassId" and a.date = '${
//         req.params.date
//       }' where tc."teacherId" = ${req.params.teacherId};`
//     );

//     res.send(result.rows);
//   })
//   .post('/', async (req, res) => {})
//   .put('/', async (req, res) => {});
// app.use('/teacherClass', teacherClassRouter);

// var classRouter = express.Router();
// classRouter
//   .get('/', async (req, res) => {})
//   .post('/', async (req, res) => {})
//   .put('/', async (req, res) => {});
// app.use('/class', classRouter);

// var teacherRouter = express.Router();
// teacherRouter
//   .get('/', async (req, res) => {
//     const client = await connection.instance();
//     const result = await client.query(`select * from teacher`);
//     res.send(result.rows);
//   })
//   .post('/', async (req, res) => {
//     const client = await connection.instance();
//     const result = await client.query(`
//     select * from teacher t
//     where t."userName" = '${req.body.userName}' and t."password" = '${req.body.password}'
//     `);
//     res.send(result.rows);
//   });
// app.use('/teacher', teacherRouter);

// .get("/", async (req, res) => {
//   try {
//     const client = await new Client({
//       host: "ec2-54-243-228-140.compute-1.amazonaws.com",
//       port: "5432",
//       database: "dbc5g3rhcqdmjk",
//       user: "ellltvtputtemb",
//       password: "14dba0e9d0bf40d3570c0f349c9ec20b9154602c594a5210a3c67d7b7b2e5f3a",
//       ssl: true
//     });
//     await client.connect();
//     const r = await client.query("select * from teacher");
//     res.send(r.rows);
//   } catch (e) {
//     res.send({ error: e });
//   }
// });

console.log('Starting app at: localhost:3500');

app.listen(process.env.PORT || 3500);
