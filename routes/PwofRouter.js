const express = require("express");
 const schema = require('./schemas/Frekvens');
const ClassService = require('../core/service/pwof/class');

let router = express.Router();

const path = {
    Class: '/class',
    Teacher: '/teacher',
    Attendance: '/attendance',
    TeacherClass: '/teacherClass',
    AttendanceStudent: '/attendanceStudent'
};

/* Class */
router
    .get(path.Class, async (req, res) => {
        const knex = require('../db/knexConnection');

        console.log(await knex('class'));

        //console.log(await ClassService.get());
        // console.log(await ClassService.add())
        // console.log(await ClassService.edit())
        //console.log(await ClassService.get());
        return res.send(await knex('class'));
    })
    .post(path.Class, async (req, res) => { })
    .put(path.Class, async (req, res) => { });

/* Teacher */
router
    .get(path.Teacher, async (req, res) => {
        const client = await connection.instance();
        const result = await client.query(`select * from teacher`);
        res.send(result.rows);
    })
    .post(path.Teacher, schema.teacherPost, async (req, res) => {
        const client = await connection.instance();

        const result = await client.query(
            `
        select *
        from teacher t
        where t."userName" = '${
            req.body.userName
            }' and t."password" = '${md5(req.body.password)}'
      `
        );
        client.end();
        res.send(
            result.rows.map(item => {
                return {
                    id: item.id,
                    name: item.name
                };
            })[0]
        );
    });

/* Attendance */
router
    .get(`${path.Attendance}/:teacherId`, async (req, res) => {
        res.sendStatus(404);
    })
    .post(path.Attendance, async (req, res) => {
        const attendanceId = await addAttendance(req.body);

        const postData = {
            ...req.body,
            attendanceId
        };

        await addStudentAttendance(postData);

        res.send({
            ok: attendanceId
        });
    })
    .put(path.Attendance, async (req, res) => { });

/* TeacherClass */
router
    .get(`${path.TeacherClass}/:teacherId/:date`, async (req, res) => {
        const client = await connection.instance();

        const result = await client.query(
            `
        select tc.id "teacherClassId", c.id "classId", c.name "className", a.id "attendanceId", a.date "attendanceDate"
        from "teacherClass" tc
        join "class" c on c.id = tc."classId"
        left join attendance a on tc.id = a."teacherClassId" and a.date = '${
            req.params.date
            }'
        where tc."teacherId" = ${req.params.teacherId};
      `
        );
        client.end();
        res.send(result.rows);
    })
    .post(path.TeacherClass, async (req, res) => { })
    .put(path.TeacherClass, async (req, res) => { });

/* AttendanceStudent */
router
    .get(path.AttendanceStudent, async (req, res) => {
        const client = await connection.instance();

        const { attendanceId } = req.params;

        let result = await client.query(
            `
      select tc."classId", c.name "className", s.id studentId, a.date attendanceDate, a.status attendanceStatus, s.name studentName, "as".id "studentAttendanceId","as".status studentStatus
      from "attendance" a
      join "attendanceStudent" "as" on a.id = "as"."attendanceId"
      join student s on "as"."studentId" = s.id
      join "teacherClass" tc on a."teacherClassId" = tc.id
      join "class" c on tc."classId" = c.id
      where a.id = ${attendanceId}
      order by "as".id asc;
      `
        );

        const studentList = _.chain(result.rows)
            .groupBy("studentid")
            .map((items, key) => {
                return {
                    id: key,
                    name: items[0].studentname,
                    attendances: items.map(item => {
                        return {
                            studentAttendanceId: item.studentAttendanceId,
                            studentstatus: item.studentstatus
                        };
                    })
                };
            })
            .value();

        result = {
            attendanceId: parseInt(attendanceId),
            classId: parseInt(result.rows[0].classId),
            className: result.rows[0].className,
            attendanceDate: result.rows[0].attendancedate,
            attendanceStatus: result.rows[0].attendancestatus,
            list: studentList
        };
        client.end();
        res.send(result);
    })
    .put(path.AttendanceStudent, async (req, res) => {
        await addStudentAttendance(req.body);
        res.send({});
    })
    .put(`${path.AttendanceStudent}/single`, async (req, res) => {
        const { studentAttendanceId, studentstatus } = req.body;

        const client = await connection.instance();

        await client.query(
            `
        update "attendanceStudent" set status = $1 where id = $2;
      `,
            [!studentstatus, studentAttendanceId]
        );

        client.end();

        res.send({});
    })
    .delete(path.AttendanceStudent);

module.exports = router;