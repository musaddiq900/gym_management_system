export type ClassRow = {
  id: string;
  className: string;
  branchName: string;
  room: string;
  capacity: number;
  booked: number;
  trainer?: string;
  startTime: string;
  endTime: string;
  status: "ACTIVE" | "CANCELLED";
};

export const classRows: ClassRow[] = [
  {
    id: "c1",
    className: "Yoga",
    branchName: "Main Branch",
    room: "Hall A",
    capacity: 20,
    booked: 12,
    trainer: "Hassan Trainer",
    startTime: "07:00 AM",
    endTime: "08:00 AM",
    status: "ACTIVE",
  },
  {
    id: "c2",
    className: "Zumba",
    branchName: "DHA Branch",
    room: "Studio 1",
    capacity: 15,
    booked: 15,
    trainer: "Sara Fitness",
    startTime: "06:00 PM",
    endTime: "07:00 PM",
    status: "ACTIVE",
  },
];