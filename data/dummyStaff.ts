export type StaffRole = "TRAINER" | "RECEPTIONIST" | "MANAGER";
export type StaffStatus = "ACTIVE" | "INACTIVE";

export type StaffRow = {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  branchId: string;
  branchName: string;
  role: StaffRole;
  joiningDate: string; // YYYY-MM-DD
  status: StaffStatus;
  baseSalary: number;
};

export const branches = [
  { id: "all", name: "All Branches" },
  { id: "b1", name: "Main Branch" },
  { id: "b2", name: "DHA Branch" },
];

export const staffRows: StaffRow[] = [
  {
    id: "s1",
    fullName: "Hassan Trainer",
    phone: "0301-1112223",
    branchId: "b1",
    branchName: "Main Branch",
    role: "TRAINER",
    joiningDate: "2026-01-10",
    status: "ACTIVE",
    baseSalary: 35000,
  },
  {
    id: "s2",
    fullName: "Sara Reception",
    phone: "0322-5556667",
    branchId: "b2",
    branchName: "DHA Branch",
    role: "RECEPTIONIST",
    joiningDate: "2026-02-01",
    status: "ACTIVE",
    baseSalary: 30000,
  },
];

export const roles = [
  {
    role: "TRAINER",
    permissions: ["members_read", "workout_write", "diet_write", "classes_manage"],
  },
  {
    role: "RECEPTIONIST",
    permissions: ["members_read", "members_write", "attendance_write", "payments_write"],
  },
  {
    role: "MANAGER",
    permissions: ["reports_read", "payments_read", "staff_manage", "branches_manage"],
  },
];

export const salaryRows = [
  { id: "sal1", staffId: "s1", month: "2026-03", baseSalary: 35000, bonus: 2000, deductions: 0, paidAmount: 20000, status: "PARTIAL" },
  { id: "sal2", staffId: "s2", month: "2026-03", baseSalary: 30000, bonus: 0, deductions: 1000, paidAmount: 30000, status: "PAID" },
];

export const performanceRows = [
  { id: "p1", staffId: "s1", month: "2026-02", rating: 4.6, sessionsDone: 42, notes: "Good client feedback" },
  { id: "p2", staffId: "s2", month: "2026-02", rating: 4.2, renewals: 18, collections: 155000, notes: "Strong renewals" },
];

export const staffAttendanceRows = [
  { id: "a1", staffId: "s1", date: "2026-03-03", status: "PRESENT", checkIn: "07:05 AM", checkOut: "01:00 PM" },
  { id: "a2", staffId: "s2", date: "2026-03-03", status: "PRESENT", checkIn: "08:55 AM", checkOut: "05:30 PM" },
];