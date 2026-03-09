export type AttendanceMethod = "QR" | "MANUAL" | "BIO";
export type AttendanceStatus = "OK" | "EXPIRED" | "DUPLICATE";

export type AttendanceRow = {
  id: string;
  memberName: string;
  phone: string;
  branchId: string;
  branchName: string;
  method: AttendanceMethod;
  date: string;        // YYYY-MM-DD
  checkInTime: string; // 07:15 AM
  status: AttendanceStatus;
};

export const branches = [
  { id: "all", name: "All Branches" },
  { id: "b1", name: "Main Branch" },
  { id: "b2", name: "DHA Branch" },
  { id: "b3", name: "Johar Branch" },
];

export const members = [
  { id: "m1", name: "Ali Khan", phone: "0300-1234567", branchId: "b1", branchName: "Main Branch" },
  { id: "m2", name: "Ayesha Amir", phone: "0312-9998887", branchId: "b2", branchName: "DHA Branch" },
  { id: "m3", name: "Usman Tariq", phone: "0333-1112223", branchId: "b3", branchName: "Johar Branch" },
  { id: "m4", name: "Hina Shah", phone: "0301-7776665", branchId: "b1", branchName: "Main Branch" },
  { id: "m5", name: "Bilal Ahmed", phone: "0345-5554443", branchId: "b2", branchName: "DHA Branch" },
];

export const attendanceRows: AttendanceRow[] = [
  {
    id: "a1",
    memberName: "Ali Khan",
    phone: "0300-1234567",
    branchId: "b1",
    branchName: "Main Branch",
    method: "QR",
    date: "2026-03-03",
    checkInTime: "07:15 AM",
    status: "OK",
  },
  {
    id: "a2",
    memberName: "Ayesha Amir",
    phone: "0312-9998887",
    branchId: "b2",
    branchName: "DHA Branch",
    method: "MANUAL",
    date: "2026-03-03",
    checkInTime: "08:05 AM",
    status: "OK",
  },
  {
    id: "a3",
    memberName: "Usman Tariq",
    phone: "0333-1112223",
    branchId: "b3",
    branchName: "Johar Branch",
    method: "BIO",
    date: "2026-03-03",
    checkInTime: "06:52 AM",
    status: "OK",
  },
  {
    id: "a4",
    memberName: "Hina Shah",
    phone: "0301-7776665",
    branchId: "b1",
    branchName: "Main Branch",
    method: "QR",
    date: "2026-03-03",
    checkInTime: "07:22 AM",
    status: "DUPLICATE",
  },
  {
    id: "a5",
    memberName: "Bilal Ahmed",
    phone: "0345-5554443",
    branchId: "b2",
    branchName: "DHA Branch",
    method: "QR",
    date: "2026-03-02",
    checkInTime: "09:10 AM",
    status: "EXPIRED",
  },
];