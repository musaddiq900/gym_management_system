export type Member = {
  id: string;
  name: string;
  phone: string;
  membershipExpiry: string;
  birthday: string;
  lastAttendance: string;
  pendingPayment: boolean;
};

export const members: Member[] = [
  {
    id: "m1",
    name: "Ali Khan",
    phone: "03001234567",
    membershipExpiry: "2026-03-10",
    birthday: "1998-03-05",
    lastAttendance: "2026-03-01",
    pendingPayment: true,
  },
  {
    id: "m2",
    name: "Ayesha",
    phone: "03129998887",
    membershipExpiry: "2026-03-20",
    birthday: "1997-07-15",
    lastAttendance: "2026-02-20",
    pendingPayment: false,
  },
];