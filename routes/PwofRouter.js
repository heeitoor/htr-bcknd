const express = require('express');
const TeacherRouter = require('./pwof/teacher');
const AttendanceRouter = require('./pwof/attendance');
const TeacherClassRouter = require('./pwof/teacherClass');
const AttendanceStudentRouter = require('./pwof/attendanceStudent');
const StudentRouter = require('./pwof/student');
const ClassroomRouter = require('./pwof/classroom');
const StudentClassRouter = require('./pwof/studentClass');

let router = express.Router();

router = TeacherRouter(router);
router = AttendanceRouter(router);
router = TeacherClassRouter(router);
router = AttendanceStudentRouter(router);
router = StudentRouter(router);
router = ClassroomRouter(router);
router = StudentClassRouter(router);

module.exports = router;
