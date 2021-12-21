export interface ProductList {
  id?: number;
  name: string;
  price: number;
  amount: number;
  factory : ProductListFactory;
}

export interface ProductListFactory {
  id?: number;
  name: string;
}