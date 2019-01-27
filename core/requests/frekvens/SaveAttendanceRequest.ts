import { Attendance } from "../../models/Frekvens";

export interface SaveAttendanceRequest {
  id: number;
  date: Date;
  teacherId: number;
  attendances: Attendance[];
}
