export type Product = {
  id: string;
  name: string;
  price: number;
  stock: number;
};

export type Supplier = {
  id: string;
  name: string;
  phone: string;
};

export const products: Product[] = [
  { id: "p1", name: "Whey Protein", price: 8500, stock: 12 },
  { id: "p2", name: "Pre Workout", price: 4500, stock: 5 },
  { id: "p3", name: "Gym Gloves", price: 1200, stock: 2 },
];

export const suppliers: Supplier[] = [
  { id: "s1", name: "Fit Supplements Co.", phone: "03001234567" },
  { id: "s2", name: "Health Traders", phone: "03119998888" },
];