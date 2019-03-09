// const addAttendance = async ({ date, teacherClassId }) => {
//     const client = await connection.instance();

//     const result = await client.query(
//         'insert into attendance ("date", "teacherClassId", "status") values ($1, $2, $3) RETURNING id;',
//         [date, teacherClassId, "OPEN"]
//     );

//     const attendanceId = result.rows[0].id;

//     client.end();

//     return attendanceId;
// };
