// const express = require("express");
// const md5 = require("md5");
// const schema = require("./schemas/Frekvens");
// const _ = require("lodash");
// var connection = require("../db/connection");

// const addStudentAttendance = async ({ attendanceId, classId, number }) => {
//   const client = await connection.instance();

//   const sc = await client.query(
//     `
//       select *
//       from "studentClass" sc
//       where sc."classId" = ${classId};
//     `
//   );

//   const addAttendances = async () => {
//     for (const s of sc.rows) {
//       await client.query(
//         `INSERT INTO "attendanceStudent"
//     ("attendanceId", "studentId", "status", index)
//     VALUES($1, $2, true, $3);`,
//         [attendanceId, s.studentId, number]
//       );
//     }
//   };

//   if (number === 1) {
//     const yo = await client.query(
//       `
//       delete from "attendanceStudent" where "attendanceId" = $1 and "index" > 1;
//       `,
//       [attendanceId]
//     );
//     console.log(yo);

//     if (yo.rowCount === 0) {
//       await addAttendances();
//     }
//   }
//   else {
//     await addAttendances();
//   }

//   client.end();
// };

// const addAttendance = async ({ date, teacherClassId }) => {
//   const client = await connection.instance();

//   const result = await client.query(
//     'insert into attendance ("date", "teacherClassId", "status") values ($1, $2, $3) RETURNING id;',
//     [date, teacherClassId, "OPEN"]
//   );

//   const attendanceId = result.rows[0].id;

//   client.end();

//   return attendanceId;
// };

// class Routers {
//   attendance() {
//     var attendanceRouter = express.Router();

//     attendanceRouter
//       .get("/:teacherId", async (req, res) => {
//         res.sendStatus(404);
//       })
//       .post("/", async (req, res) => {
//         const attendanceId = await addAttendance(req.body);

//         const postData = {
//           ...req.body,
//           attendanceId
//         };

//         await addStudentAttendance(postData);

//         res.send({
//           ok: attendanceId
//         });
//       })
//       .put("/", async (req, res) => { });

//     return attendanceRouter;
//   }

//   class() {
//     var classRouter = express.Router();

//     classRouter
//       .get("/", async (req, res) => { })
//       .post("/", async (req, res) => { })
//       .put("/", async (req, res) => { });

//     return classRouter;
//   }

//   teacherClass() {
//     var teacherClassRouter = express.Router();

//     teacherClassRouter
//       .get("/:teacherId/:date", async (req, res) => {
//         const client = await connection.instance();

//         const result = await client.query(
//           `
//             select tc.id "teacherClassId", c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate"
//             from "teacherClass" tc
//             join "class" c on c.id = tc."classId"
//             left join attendance a on tc.id = a."teacherClassId" and a.date = '${
//           req.params.date
//           }'
//             where tc."teacherId" = ${req.params.teacherId};
//           `
//         );
//         client.end();
//         res.send(result.rows);
//       })
//       .post("/", async (req, res) => { })
//       .put("/", async (req, res) => { });

//     return teacherClassRouter;
//   }

//   teacher() {
//     var teacherRouter = express.Router();

//     teacherRouter
//       .get("/", async (req, res) => {
//         const client = await connection.instance();
//         const result = await client.query(`select * from teacher`);
//         res.send(result.rows);
//       })
//       .post("/", schema.teacherPost, async (req, res) => {
//         const client = await connection.instance();

//         const result = await client.query(
//           `
//             select *
//             from teacher t
//             where t."userName" = '${
//           req.body.userName
//           }' and t."password" = '${md5(req.body.password)}'
//           `
//         );
//         client.end();
//         res.send(
//           result.rows.map(item => {
//             return {
//               id: item.id,
//               name: item.name
//             };
//           })[0]
//         );
//       });

//     return teacherRouter;
//   }

//   attendanceStudent() {
//     var attendanceStudentRouter = express.Router();

//     attendanceStudentRouter
//       .get("/:attendanceId", async (req, res) => {
//         const client = await connection.instance();

//         const { attendanceId } = req.params;

//         let result = await client.query(
//           `
//           select tc."classId", c.name "className", s.id studentId, a.date attendanceDate, a.status attendanceStatus, s.name studentName, "as".id "studentAttendanceId","as".status studentStatus
//           from "attendance" a
//           join "attendanceStudent" "as" on a.id = "as"."attendanceId"
//           join student s on "as"."studentId" = s.id
//           join "teacherClass" tc on a."teacherClassId" = tc.id
//           join "class" c on tc."classId" = c.id
//           where a.id = ${attendanceId}
//           order by "as".id asc;
//           `
//         );

//         const studentList = _.chain(result.rows)
//           .groupBy("studentid")
//           .map((items, key) => {
//             return {
//               id: key,
//               name: items[0].studentname,
//               attendances: items.map(item => {
//                 return {
//                   studentAttendanceId: item.studentAttendanceId,
//                   studentstatus: item.studentstatus
//                 };
//               })
//             };
//           })
//           .value();

//         result = {
//           attendanceId: parseInt(attendanceId),
//           classId: parseInt(result.rows[0].classId),
//           className: result.rows[0].className,
//           attendanceDate: result.rows[0].attendancedate,
//           attendanceStatus: result.rows[0].attendancestatus,
//           list: studentList
//         };
//         client.end();
//         res.send(result);
//       })
//       .put('/', async (req, res) => {
//         await addStudentAttendance(req.body);
//         res.send({});
//       })
//       .put('/single', async (req, res) => {
//         const { studentAttendanceId, studentstatus } = req.body;

//         const client = await connection.instance();

//         await client.query(
//           `
//             update "attendanceStudent" set status = $1 where id = $2;
//           `,
//           [!studentstatus, studentAttendanceId]
//         );

//         client.end();

//         res.send({});
//       })
//       .delete("/");

//     return attendanceStudentRouter;
//   }
// }

// module.exports = new Routers();
