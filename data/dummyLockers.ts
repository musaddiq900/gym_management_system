export type LockerStatus = "AVAILABLE" | "ASSIGNED" | "MAINTENANCE";

export type LockerRow = {
  id: string;
  lockerNo: string;
  branchId: string;
  branchName: string;
  status: LockerStatus;
  location?: string;

  // if assigned
  memberName?: string;
  memberPhone?: string;
  assignedAt?: string; // ISO or display
  deposit?: number;
  keyNo?: string;
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
];

export const lockerRows: LockerRow[] = [
  { id: "l1", lockerNo: "L-001", branchId: "b1", branchName: "Main Branch", status: "AVAILABLE", location: "Ground Floor" },
  { id: "l2", lockerNo: "L-002", branchId: "b1", branchName: "Main Branch", status: "ASSIGNED", location: "Ground Floor", memberName: "Ali Khan", memberPhone: "0300-1234567", assignedAt: "2026-03-03 07:40 AM", deposit: 500, keyNo: "K-11" },
  { id: "l3", lockerNo: "L-010", branchId: "b2", branchName: "DHA Branch", status: "MAINTENANCE", location: "1st Floor" },
  { id: "l4", lockerNo: "L-015", branchId: "b2", branchName: "DHA Branch", status: "AVAILABLE", location: "1st Floor" },
  { id: "l5", lockerNo: "L-101", branchId: "b3", branchName: "Johar Branch", status: "ASSIGNED", memberName: "Usman Tariq", memberPhone: "0333-1112223", assignedAt: "2026-03-02 06:55 AM", deposit: 0, keyNo: "K-03" },
];