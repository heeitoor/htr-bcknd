const express = require('express');
const TeacherRouter = require('./pwof/teacher');
const AttendanceRouter = require('./pwof/attendance');
const TeacherClassRouter = require('./pwof/teacherClass');
const AttendanceStudentRouter = require('./pwof/attendanceStudent');

let router = express.Router();

router = TeacherRouter(router);
router = AttendanceRouter(router);
router = TeacherClassRouter(router);
router = AttendanceStudentRouter(router);

module.exports = router;
